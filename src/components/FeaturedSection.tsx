import { ArtworkCard } from "./ArtworkCard";

const featuredArtworks = [
  {
    title: "Urban Symphony",
    artist: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1536241455566-5709c3aefd3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwbW9kZXJuJTIwYXJ0fGVufDF8fHx8MTc1ODE0ODMwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Oil on Canvas",
    year: "2024",
    price: "$12,500"
  },
  {
    title: "Timeless Form",
    artist: "Marcus Chen",
    image: "https://images.unsplash.com/photo-1588786175766-0c73a19ebc2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBzY3VscHR1cmUlMjBnYWxsZXJ5fGVufDF8fHx8MTc1ODA1NTE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Bronze Sculpture",
    year: "2023",
    price: "$8,750"
  },
  {
    title: "Classical Revival",
    artist: "Isabella Thompson",
    image: "https://images.unsplash.com/photo-1710082777338-dcb6189ae64f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMGNsYXNzaWNhbCUyMGFydHxlbnwxfHx8fDE3NTgwMjk0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Oil Painting",
    year: "2024",
    price: "$15,200"
  },
  {
    title: "Digital Dreams",
    artist: "Alex Kim",
    image: "https://images.unsplash.com/photo-1753775298240-9f734661cd2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwY29udGVtcG9yYXJ5fGVufDF8fHx8MTc1ODA3NDQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Digital Art",
    year: "2024",
    price: "$3,800"
  }
];

export function FeaturedSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Featured Artworks</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of exceptional pieces from emerging and established artists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArtworks.map((artwork, index) => (
            <ArtworkCard
              key={index}
              title={artwork.title}
              artist={artwork.artist}
              image={artwork.image}
              medium={artwork.medium}
              year={artwork.year}
              price={artwork.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}