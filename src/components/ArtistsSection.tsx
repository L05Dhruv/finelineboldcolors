import { ArtistCard } from "./ArtistCard";

const featuredArtists = [
  {
    name: "Elena Rodriguez",
    specialty: "Abstract Painting",
    image: "https://images.unsplash.com/photo-1683223584862-91b693b6db27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmclMjBhcnRpc3RpY3xlbnwxfHx8fDE3NTgwNDM5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "New York, USA",
    works: 24,
    bio: "Elena creates vibrant abstract compositions that explore the intersection of emotion and color. Her work has been featured in galleries across North America."
  },
  {
    name: "Marcus Chen",
    specialty: "Contemporary Sculpture",
    image: "https://images.unsplash.com/photo-1693039382183-26ce087592e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGJsYWNrJTIwd2hpdGUlMjBhcnR8ZW58MXx8fHwxNzU4MTQ4MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "London, UK",
    works: 18,
    bio: "Marcus specializes in large-scale bronze and steel sculptures that challenge traditional forms. His installations can be found in public spaces worldwide."
  },
  {
    name: "Isabella Thompson",
    specialty: "Classical Painting",
    image: "https://images.unsplash.com/photo-1710082777338-dcb6189ae64f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMGNsYXNzaWNhbCUyMGFydHxlbnwxfHx8fDE3NTgwMjk0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Florence, Italy",
    works: 31,
    bio: "Isabella brings classical techniques into the modern era, creating stunning portraits and landscapes that honor traditional mastery while speaking to contemporary themes."
  }
];

export function ArtistsSection() {
  return (
    <section id="artists" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Featured Artists</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the talented artists behind our exceptional collection of contemporary and classical works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtists.map((artist, index) => (
            <ArtistCard
              key={index}
              name={artist.name}
              specialty={artist.specialty}
              image={artist.image}
              location={artist.location}
              works={artist.works}
              bio={artist.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
}