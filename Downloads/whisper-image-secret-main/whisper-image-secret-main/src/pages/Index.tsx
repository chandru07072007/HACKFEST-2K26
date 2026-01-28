import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Encoder } from "@/components/Encoder";
import { Decoder } from "@/components/Decoder";
import { Shield, Lock, Unlock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in-50 duration-700">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Steganography Tool
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Securely hide and extract secret messages within images using advanced steganography techniques
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="encode" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-14 bg-card/50 backdrop-blur-sm border border-border shadow-sm">
              <TabsTrigger 
                value="encode" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-primary-foreground transition-all text-base"
              >
                <Lock className="w-4 h-4 mr-2" />
                Encode
              </TabsTrigger>
              <TabsTrigger 
                value="decode"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent data-[state=active]:to-accent/90 data-[state=active]:text-accent-foreground transition-all text-base"
              >
                <Unlock className="w-4 h-4 mr-2" />
                Decode
              </TabsTrigger>
            </TabsList>

            <TabsContent 
              value="encode" 
              className="animate-in fade-in-50 slide-in-from-bottom-4 duration-500"
            >
              <Encoder />
            </TabsContent>

            <TabsContent 
              value="decode"
              className="animate-in fade-in-50 slide-in-from-bottom-4 duration-500"
            >
              <Decoder />
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center animate-in fade-in-50 duration-1000 delay-300">
          <div className="max-w-3xl mx-auto p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">How It Works</h3>
            <p className="text-sm text-muted-foreground">
              This tool uses LSB (Least Significant Bit) steganography to hide your messages. 
              The text is embedded into the image's pixel data in a way that's invisible to the human eye, 
              while maintaining the image's visual quality. Decoded messages can be edited and re-encoded into new images.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
