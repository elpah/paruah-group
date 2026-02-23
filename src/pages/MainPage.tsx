import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import VisionMissionSection from '@/components/VisionMissionSection';
import ValueSection from '@/components/ValueSection';
import GovernanceSection from '@/components/GovernanceSection';
import ContactSection from '@/components/ContactSection';

const MainPage = () => {
  // @return
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <VisionMissionSection />
      <ValueSection />
      <GovernanceSection />
      <ContactSection />
    </main>
  );
};

export default MainPage;
