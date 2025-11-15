import { HeroSection } from "@/app/compontents/HeroSection";
import { AboutSection } from "@/app/compontents/AboutSection";
import { DownloadSection } from "@/app/compontents/DownloadSection";

function FeaturesSection() {
  return null;
}

function HowItWorksSection() {
  return null;
}

function TechStackSection() {
  return null;
}

function Roadmap() {
  return null;
}

function FollowSection() {
  return null;
}

export default function Home() {
  return (
    <>
      <HeroSection />
      {/*
      Sections with z-1 (or higher) will not have the background gradient.
      Content without z-1 must set internal content to have z-1 to appear
       above the gradient while still putting the gradient between the
       section background and section foreground.
       The background gradient component is in the HeroSection.
       */}
      <div className="z-1">
        <AboutSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TechStackSection />
        <Roadmap />
        <FollowSection />
      </div>
      <DownloadSection />
    </>
  );
}
