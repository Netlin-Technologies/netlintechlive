import React from "react";
import { t } from '@/lib/locales';
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export const BlogHeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 md:gap-6 px-4 md:px-8 lg:px-16 xl:px-[65px] py-16 md:py-20 lg:py-24 xl:py-32 w-full bg-neutral-50 border-b border-[#e4e4e4]">
      <Badge className="px-4 md:px-6 py-2 md:py-2.5 text-lg md:text-xl lg:text-2xl font-semibold font-sora bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] text-white border-[#4d9aff] shadow-[0px_4px_6px_#0000000d,0px_10px_15px_#0000001a] rounded-lg">
        Blog
      </Badge>

      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="flex flex-col items-center gap-4 md:gap-6 p-0">
          <h1 className="w-full max-w-[903px] font-sora font-semibold text-[#080808] text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-tight">
            {t.content.blogHero.title}
          </h1>

          <p className="w-full max-w-[903px] font-sora font-normal text-[#080808] text-lg md:text-xl lg:text-2xl text-center leading-relaxed">
            {t.content.blogHero.subtitle}
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
