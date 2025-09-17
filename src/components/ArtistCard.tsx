import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ArtistCardProps {
  name: string;
  specialty: string;
  image: string;
  location: string;
  works: number;
  bio: string;
}

export function ArtistCard({ name, specialty, image, location, works, bio }: ArtistCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={`Portrait of ${name}`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <Badge className="absolute top-3 right-3 bg-white/90 text-black">
            {specialty}
          </Badge>
        </div>
        
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-xl">{name}</h3>
            <p className="text-muted-foreground text-sm">{location}</p>
          </div>
          
          <p className="text-sm leading-relaxed line-clamp-3">{bio}</p>
          
          <div className="flex justify-between items-center pt-2 border-t border-border">
            <span className="text-sm text-muted-foreground">{works} artworks</span>
            <button className="text-primary hover:underline text-sm font-medium">
              View Profile
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}