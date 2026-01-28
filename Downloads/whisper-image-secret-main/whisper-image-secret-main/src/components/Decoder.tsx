import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload, Download, Unlock, Edit } from "lucide-react";
import { decodeMessage, loadImageData, encodeMessage, downloadImage } from "@/utils/steganography";
import { toast } from "sonner";

export const Decoder = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [decodedMessage, setDecodedMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }

    setSelectedFile(file);
    setDecodedMessage("");
    setIsEditing(false);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDecode = async () => {
    if (!selectedFile) {
      toast.error("Please select an image");
      return;
    }

    setIsProcessing(true);

    try {
      const imageData = await loadImageData(selectedFile);
      const message = decodeMessage(imageData);

      if (message === null) {
        toast.error("No hidden message found in this image");
        setDecodedMessage("");
      } else {
        setDecodedMessage(message);
        toast.success("Message decoded successfully!");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to decode message");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReEncode = async () => {
    if (!selectedFile || !decodedMessage.trim()) {
      toast.error("No message to re-encode");
      return;
    }

    setIsProcessing(true);

    try {
      const imageData = await loadImageData(selectedFile);
      const encodedData = encodeMessage(imageData, decodedMessage);
      downloadImage(encodedData, `modified_${selectedFile.name.replace(/\.[^/.]+$/, "")}.png`);
      toast.success("Modified message encoded successfully! Image downloaded.");
      setIsEditing(false);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to re-encode message");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-b from-card to-card/50 border-border shadow-md">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-br from-accent to-accent/80">
          <Unlock className="w-5 h-5 text-accent-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Decode Message</h2>
          <p className="text-sm text-muted-foreground">Extract hidden text from an image</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <Label htmlFor="decode-upload" className="text-foreground font-medium">Encoded Image</Label>
          <div className="mt-2">
            <input
              id="decode-upload"
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button
              variant="outline"
              onClick={() => document.getElementById("decode-upload")?.click()}
              className="w-full border-dashed border-2 h-32 hover:border-accent transition-colors"
            >
              <div className="flex flex-col items-center gap-2">
                <Upload className="w-6 h-6 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {selectedFile ? selectedFile.name : "Click to upload an encoded image"}
                </span>
              </div>
            </Button>
          </div>
        </div>

        {previewUrl && (
          <div className="rounded-lg overflow-hidden border border-border shadow-sm">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-48 object-cover"
            />
          </div>
        )}

        <Button
          onClick={handleDecode}
          disabled={!selectedFile || isProcessing}
          className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground shadow-md"
        >
          <Unlock className="w-4 h-4 mr-2" />
          {isProcessing ? "Processing..." : "Decode Message"}
        </Button>

        {decodedMessage && (
          <div className="space-y-4 animate-in fade-in-50 duration-500">
            <div className="flex items-center justify-between">
              <Label htmlFor="decoded-message" className="text-foreground font-medium">
                Extracted Message
              </Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
                className="text-accent hover:text-accent/80"
              >
                <Edit className="w-4 h-4 mr-2" />
                {isEditing ? "Cancel Edit" : "Edit"}
              </Button>
            </div>
            
            <Textarea
              id="decoded-message"
              value={decodedMessage}
              onChange={(e) => setDecodedMessage(e.target.value)}
              readOnly={!isEditing}
              className={`min-h-[120px] bg-background border-border ${
                isEditing ? "focus:border-accent" : "opacity-90"
              }`}
            />
            
            {isEditing && (
              <Button
                onClick={handleReEncode}
                disabled={!decodedMessage.trim() || isProcessing}
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground shadow-md"
              >
                <Download className="w-4 h-4 mr-2" />
                {isProcessing ? "Processing..." : "Re-encode & Download"}
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};
