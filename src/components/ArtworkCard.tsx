import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ArtworkCardProps {
  title: string;
  artist: string;
  image: string;
  medium: string;
  year: string;
  price?: string;
  className?: string;
}

export function ArtworkCard({ title, artist, image, medium, year, price, className }: ArtworkCardProps) {
  return (
    <Card className={`group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 ${className}`}>
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={`${title} by ${artist}`}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          <Badge className="absolute top-3 left-3 bg-white/90 text-black">
            {medium}
          </Badge>
        </div>
        
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg leading-tight">{title}</h3>
          <p className="text-muted-foreground">by {artist}</p>
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm text-muted-foreground">{year}</span>
            {price && (
              <span className="font-semibold text-primary">{price}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}