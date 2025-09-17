import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedSection } from "./components/FeaturedSection";
import { ArtistsSection } from "./components/ArtistsSection";
import { GallerySection } from "./components/GallerySection";
import { Footer } from "./components/Footer";
import { OnlineCourseSection } from "./components/OnlineCourseSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedSection />
        <GallerySection />
        <ArtistsSection />
        {/* <OnlineCourseSection /> */}
        {/* <AboutSection />
        <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
}