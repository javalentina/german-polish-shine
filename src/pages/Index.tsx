import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import ConcertsSection from "@/components/ConcertsSection";
import VideosSection from "@/components/VideosSection";
import GallerySection from "@/components/GallerySection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <BiographySection />
      <ConcertsSection />
      <VideosSection />
      <GallerySection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
