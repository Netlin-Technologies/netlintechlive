'use client'

import React from "react";
import dynamic from "next/dynamic";
import { ContactHeroSection } from "./sections/ContactHeroSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { NavbarSection } from "./sections/NavbarSection";

// Dynamically import ContactFormSection with no SSR
const ContactFormSection = dynamic(
  () => import('./sections/ContactFormSection'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex flex-col items-center justify-center gap-6 pt-8 md:pt-16 pb-0 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative self-stretch w-full">
        <div className="flex justify-center items-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      </div>
    )
  }
);

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
