import React from 'react';
import AITools from "./sections/AITools";
import BannerInfo from "./sections/BannerInfo";
import BannerSection from "./sections/BannerSection";
import BottomBanner from "./sections/BottomBanner";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import HeroSection from "./sections/HomeHeroSection";
import ReviewSection from "./sections/ReviewSection";
import { NavbarSection } from "./sections/NavbarSection";

export const Home = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#0c0e14]">
        <NavbarSection />
        <div className="w-full bg-[#0D0C14] pb-5">
            <div className="px-5">
            <HeroSection />
            <BannerSection />
            <AITools />
            <BottomBanner />
            </div>

            <BannerInfo />
            <div className="px-5">
            <ReviewSection />
            <FaqSection />
            </div>
            <FooterSection />
        </div>
    </div>
  );
}
