import React from "react";
import { BlogArticlesSection } from "./sections/BlogArticlesSection";
import { BlogHeroSection } from "./sections/BlogHeroSection";
import { FooterSection } from "./sections/FooterSection";
import { NavbarSection } from "./sections/NavbarSection";

export const Blog = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      <NavbarSection theme="light" />
       <main className="bg-white flex flex-col items-center w-full">
        <BlogHeroSection />
        <div className="bg-white w-full max-w-[1920px] overflow-hidden">
          <BlogArticlesSection />
        </div>
      </main>
      <FooterSection theme="light" />
    </div>
  );
};
