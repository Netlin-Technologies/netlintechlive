import React from "react";
import { t } from '@/lib/locales';
import { Badge } from "../ui/badge";

export const ContactHeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center lg:pb-0 lg:pt-40 px-4 md:px-8 lg:px-16 w-full relative">
      <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2.5 animate-fade-in-up">
          <Badge className="p-1.5 rounded-[5px] border border-solid border-[#4d9aff] shadow-[inset_0px_1px_6.5px_#00000040] bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] animate-rotate-glow-subtle">
            <img className="w-5 h-5 md:w-6 md:h-6 lg:w-[26px] lg:h-[26px]" alt="Icon" src="/icon.svg" />
          </Badge>

          <span className="font-sora font-semibold text-white text-lg md:text-xl lg:text-2xl animate-fade-in-right">
            Contact
          </span>
        </div>

        <h1 className="font-sora font-semibold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight animate-fade-in-up animation-delay-200">
          {t.content.contactHero.title}
        </h1>

        <p className="font-sora font-normal text-[#ffffffcc] text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl leading-relaxed animate-fade-in-up animation-delay-400">
          {t.content.contactHero.subtitle}
        </p>
      </div>
    </section>
  );
};
