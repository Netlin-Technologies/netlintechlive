import React from "react";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { NavbarSection } from "./sections/NavbarSection";
import { OurClientsSection } from "./sections/OurClientsSection";
import { ToolsOverviewSection } from "./sections/ToolsOverviewSection";
import { WhatWeDoSection } from "./sections/WhatWeDoSection";

export const AutomationSubpage = (): JSX.Element => {
  return (
    <div className="bg-[#0c0e14] flex flex-col items-center justify-center w-full">
      <NavbarSection />
      <div className="bg-[#0c0e14] w-full max-w-[1920px] relative">
        <main className="flex flex-col w-full">
          <HeroSection />
          <WhatWeDoSection />
          <HowItWorksSection />
          <ToolsOverviewSection />
          {/* <OurClientsSection /> */}
          <FaqSection />
        </main>
      </div>
      <FooterSection />
    </div>
  );
};