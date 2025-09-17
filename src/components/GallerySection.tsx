import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArtworkCard } from "./ArtworkCard";

const galleryCategories = [
  { id: "all", label: "All" },
  { id: "paintings", label: "Paintings" },
  { id: "sculptures", label: "Sculptures" },
  { id: "digital", label: "Digital Art" },
  { id: "photography", label: "Photography" }
];

const galleryArtworks = [
  {
    title: "Urban Symphony",
    artist: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1536241455566-5709c3aefd3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwbW9kZXJuJTIwYXJ0fGVufDF8fHx8MTc1ODE0ODMwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Oil on Canvas",
    year: "2024",
    price: "$12,500",
    category: "paintings"
  },
  {
    title: "Timeless Form",
    artist: "Marcus Chen",
    image: "https://images.unsplash.com/photo-1588786175766-0c73a19ebc2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBzY3VscHR1cmUlMjBnYWxsZXJ5fGVufDF8fHx8MTc1ODA1NTE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Bronze Sculpture",
    year: "2023",
    price: "$8,750",
    category: "sculptures"
  },
  {
    title: "Classical Revival",
    artist: "Isabella Thompson",
    image: "https://images.unsplash.com/photo-1710082777338-dcb6189ae64f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMGNsYXNzaWNhbCUyMGFydHxlbnwxfHx8fDE3NTgwMjk0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Oil Painting",
    year: "2024",
    price: "$15,200",
    category: "paintings"
  },
  {
    title: "Digital Dreams",
    artist: "Alex Kim",
    image: "https://images.unsplash.com/photo-1753775298240-9f734661cd2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwY29udGVtcG9yYXJ5fGVufDF8fHx8MTc1ODA3NDQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Digital Art",
    year: "2024",
    price: "$3,800",
    category: "digital"
  },
  {
    title: "Flowing Colors",
    artist: "Sarah Wilson",
    image: "https://images.unsplash.com/photo-1683223584862-91b693b6db27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmclMjBhcnRpc3RpY3xlbnwxfHx8fDE3NTgwNDM5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Watercolor",
    year: "2023",
    price: "$2,900",
    category: "paintings"
  },
  {
    title: "Shadows & Light",
    artist: "David Park",
    image: "https://images.unsplash.com/photo-1693039382183-26ce087592e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGJsYWNrJTIwd2hpdGUlMjBhcnR8ZW58MXx8fHwxNzU4MTQ4MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Photography",
    year: "2024",
    price: "$1,500",
    category: "photography"
  }
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArtworks = activeCategory === "all" 
    ? galleryArtworks 
    : galleryArtworks.filter(artwork => artwork.category === activeCategory);

  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Gallery Collection</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our complete collection of artworks across different mediums and styles
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {galleryCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork, index) => (
            <ArtworkCard
              key={`${artwork.title}-${index}`}
              title={artwork.title}
              artist={artwork.artist}
              image={artwork.image}
              medium={artwork.medium}
              year={artwork.year}
              price={artwork.price}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Artworks
          </Button>
        </div>
      </div>
    </section>
  );
}