import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload, Download, Lock } from "lucide-react";
import { encodeMessage, loadImageData, downloadImage } from "@/utils/steganography";
import { toast } from "sonner";

export const Encoder = () => {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleEncode = async () => {
    if (!selectedFile) {
      toast.error("Please select an image");
      return;
    }

    if (!message.trim()) {
      toast.error("Please enter a message to hide");
      return;
    }

    setIsProcessing(true);

    try {
      const imageData = await loadImageData(selectedFile);
      const encodedData = encodeMessage(imageData, message);
      downloadImage(encodedData, `encoded_${selectedFile.name.replace(/\.[^/.]+$/, "")}.png`);
      toast.success("Message encoded successfully! Image downloaded.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to encode message");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-b from-card to-card/50 border-border shadow-md">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary/80">
          <Lock className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Encode Message</h2>
          <p className="text-sm text-muted-foreground">Hide your secret text within an image</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <Label htmlFor="message" className="text-foreground font-medium">Secret Message</Label>
          <Textarea
            id="message"
            placeholder="Enter the message you want to hide..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 min-h-[120px] bg-background border-border focus:border-accent transition-colors"
          />
          <p className="mt-2 text-xs text-muted-foreground">
            {message.length} characters
          </p>
        </div>

        <div>
          <Label htmlFor="image-upload" className="text-foreground font-medium">Cover Image</Label>
          <div className="mt-2">
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button
              variant="outline"
              onClick={() => document.getElementById("image-upload")?.click()}
              className="w-full border-dashed border-2 h-32 hover:border-accent transition-colors"
            >
              <div className="flex flex-col items-center gap-2">
                <Upload className="w-6 h-6 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {selectedFile ? selectedFile.name : "Click to upload an image"}
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
          onClick={handleEncode}
          disabled={!selectedFile || !message.trim() || isProcessing}
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground shadow-md"
        >
          <Download className="w-4 h-4 mr-2" />
          {isProcessing ? "Processing..." : "Encode & Download"}
        </Button>
      </div>
    </Card>
  );
};
