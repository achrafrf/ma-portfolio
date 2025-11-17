import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/characters";
import SkillsSection from "@/components/sections/videos";
import ExperienceSection from "@/components/sections/news";
import Footer from "@/components/sections/footer";
import MatrixRain from "@/components/effects/matrix-rain";
import FloatingBadge from "@/components/ui/floating-badge";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <MatrixRain />
      
      <div className="relative z-10">
        <Navigation />
        
        <main>
          <Hero />
          
          <ProjectsSection />
          
          <SkillsSection />
          
          <ExperienceSection />
        </main>
        
        <Footer />
        
        <FloatingBadge />
      </div>
    </div>
  );
}