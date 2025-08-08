'use client'

import React from "react";
import { ContactFormSection } from "./sections/ContactFormSection";
import { ContactHeroSection } from "./sections/ContactHeroSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { NavbarSection } from "./sections/NavbarSection";

export const Contact = (): JSX.Element => {
  return (
    <div className="bg-[#0c0e14] min-h-screen">
      <NavbarSection />
      <main className="bg-[#0c0e14] flex flex-col items-center w-full relative">
        <div className="w-full relative">
          <img
            className="w-full h-auto max-h-[1144px] absolute top-16 md:top-20 lg:top-[98px] left-0 z-0 hidden md:block"
            alt="Background graphic"
            src="/group-844.png"
          />

          <div className="flex flex-col w-full items-start relative z-10">
            <ContactHeroSection />
            <ContactFormSection />
            <FaqSection />
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};
