import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import RepertoireSection from "@/components/RepertoireSection";
import ConcertsSection from "@/components/ConcertsSection";
import VideosSection from "@/components/VideosSection";
import GallerySection from "@/components/GallerySection";
import ProjectsSection from "@/components/ProjectsSection";
import PresentationSection from "@/components/PresentationSection";
import FooterSection from "@/components/FooterSection";
import TopNav from "@/components/TopNav";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <TopNav />
      <HeroSection />
      <SectionDivider variant="ornament" />
      <PresentationSection />
      <SectionDivider variant="line" />
      <BiographySection />
      <SectionDivider variant="ornament" />
      <RepertoireSection />
      <SectionDivider variant="line" />
      <ConcertsSection />
      <SectionDivider variant="ornament" />
      <VideosSection />
      <SectionDivider variant="line" />
      <GallerySection />
      <SectionDivider variant="ornament" />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
