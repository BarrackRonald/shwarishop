import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  imageUrl?: string;
  onButtonClick?: () => void;
}

export const HeroBanner = ({ 
  title, 
  subtitle, 
  buttonText, 
  imageUrl,
  onButtonClick 
}: HeroBannerProps) => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary/80">
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt="Hero banner" 
          className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
        />
      )}
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative flex h-full items-center justify-center">
        <div className="text-center text-primary-foreground max-w-2xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">{subtitle}</p>
          <Button 
            size="lg"
            variant="secondary"
            onClick={onButtonClick}
            className="group"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};