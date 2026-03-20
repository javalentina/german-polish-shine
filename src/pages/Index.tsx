import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import ConcertsSection from "@/components/ConcertsSection";
import VideosSection from "@/components/VideosSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <BiographySection />
      <ConcertsSection />
      <VideosSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
