import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import EraQuestion from "@/components/sections/EraQuestion";
import HostStatement from "@/components/sections/HostStatement";
import Philosophy from "@/components/sections/Philosophy";
import KnowVsUse from "@/components/sections/KnowVsUse";
import WhyNow from "@/components/sections/WhyNow";
import FiveLayers from "@/components/sections/FiveLayers";
import MonthlyCycle from "@/components/sections/MonthlyCycle";
import FirstTheme from "@/components/sections/FirstTheme";
import Audience from "@/components/sections/Audience";
import Pricing from "@/components/sections/Pricing";
import FinalCheck from "@/components/sections/FinalCheck";
import ClosingMessage from "@/components/sections/ClosingMessage";
import Profile from "@/components/sections/Profile";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EraQuestion />
        <HostStatement />
        <Philosophy />
        <KnowVsUse />
        <WhyNow />
        <FiveLayers />
        <MonthlyCycle />
        <FirstTheme />
        <Audience />
        <Pricing />
        <FinalCheck />
        <ClosingMessage />
        <Profile />
      </main>
      <Footer />
    </>
  );
}
