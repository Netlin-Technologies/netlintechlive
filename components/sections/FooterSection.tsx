import React from "react";
import { t } from '@/lib/locales';
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

interface FooterSectionProps {
  theme?: 'dark' | 'light';
}

export const FooterSection = ({ theme = 'dark' }: FooterSectionProps): JSX.Element => {
  // Theme-aware styles
  const themeStyles = {
    background: theme === 'light' ? "bg-gray-50" : "",
    heading: theme === 'light' ? "text-gray-900" : "text-neutral-01100",
    description: theme === 'light' ? "text-gray-600" : "text-[#bbbbbb]",
    separator: theme === 'light' ? "border-gray-300" : "border-[#ffffff1a]",
    logo: theme === 'light' ? "text-gray-900" : "text-white",
    copyright: theme === 'light' ? "text-gray-600" : "text-neutral-04100",
    categoryTitle: theme === 'light' ? "text-gray-700" : "text-[#ffffffbf]",
    categoryLink: theme === 'light' ? "text-gray-600 hover:text-gray-900" : "text-[#ffffff80] hover:text-white"
  };

  const footerNavigation = t.content.footer.categories;

  return (
    <footer className={`w-full flex flex-col items-start gap-8 md:gap-16 pt-16 md:pt-32 pb-0 px-0 relative ${themeStyles.background}`}>
      <div className="w-full flex flex-col items-start gap-2.5 py-16 md:py-32 lg:py-[151px] relative">
        {theme === 'dark' && (
          <div className="absolute w-full h-full top-0 left-0 bg-[url(/group-792.png)] bg-cover bg-center opacity-50 md:opacity-100">
           
          </div>
        )}

        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">
          <Card className="flex flex-col items-center justify-center gap-6 md:gap-8 relative mx-auto max-w-[995px] bg-transparent border-none">
          <CardContent className="flex flex-col items-center gap-6 relative w-full p-0">
            {theme === 'dark' && (
              <img
                className="hidden md:block absolute w-[200px] md:w-[297px] h-[8px] md:h-[11px] top-[100px] md:top-[120px] left-1/2 transform -translate-x-1/2"
                alt="Vector"
                src="/vector-2-1.svg"
              />
            )}

            <h2 className={`relative w-full font-sora font-semibold ${themeStyles.heading} text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center tracking-[0] leading-tight lg:leading-[72px]`}>
              Ready To Stop Doing And Start Scaling?
            </h2>

            <p className={`relative w-full font-sora font-normal ${themeStyles.description} text-lg md:text-xl lg:text-2xl text-center tracking-[0] leading-relaxed lg:leading-8`}>
              NETLIN is not for everyone. NETLIN is for the most SERIOUS
              business owners when efficiency & scale matters. NETLIN is for
              operations-heavy businesses ready to eliminate manual work
              forever.
            </p>
          </CardContent>

          <div className="flex items-center justify-center relative w-full">
            <Button className="w-full sm:w-auto p-4 bg-neutral-01100 rounded-lg font-sora font-bold text-neutral-08 text-lg md:text-xl lg:text-2xl text-center tracking-[0.84px] leading-5">
              Request A Free Automation Audit
            </Button>
          </div>
        </Card>
        </div>
      </div>

      <div className="w-full">
        <Separator className={`${themeStyles.separator}`} />
        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between py-10 w-full items-start relative gap-8 lg:gap-0">
          <div className="inline-flex flex-col gap-6 md:gap-8 items-start relative">
            <div className="flex w-auto h-10 items-center gap-3 relative">
              <div className="relative w-10 md:w-12 h-10 md:h-12">
                <img
                  className="w-full h-full object-cover"
                  alt="Netlin small"
                  src="/netlin-small-1-2.png"
                />
              </div>

              <div className={`relative w-fit font-montserrat font-normal ${themeStyles.logo} text-xl md:text-2xl text-center tracking-[0.84px] leading-5 whitespace-nowrap`}>
                <span className="font-extrabold tracking-[0.20px]">NETLIN</span>
                <span className="font-light tracking-[0.20px]">TECH</span>
              </div>
            </div>

            <div className="flex gap-8">
              <a href="https://www.linkedin.com/company/netlintech" target="_blank" className="flex justify-center items-center p-3 bg-[#161722] rounded-full hover:bg-[#302A46] cursor-pointer transition-all duration-300">
                <img
                  className="w-4 h-4"
                  alt="LinkedIn"
                  src="/linkedin.svg"
                />
              </a>
               <a href="https://www.instagram.com/netlintech" target="_blank" className="flex justify-center items-center p-3 bg-[#161722] rounded-full hover:bg-[#302A46] cursor-pointer transition-all duration-300">
                <img
                  className="w-4 h-4"
                  alt="LinkedIn"
                  src="/instagram.svg"
                />
              </a>
              <a href="https://www.facebook.com/netlintech" target="_blank" className="flex justify-center items-center p-3 bg-[#161722] rounded-full hover:bg-[#302A46] cursor-pointer transition-all duration-300">
                <img
                  className="w-4 h-4"
                  alt="LinkedIn"
                  src="/facebook.svg"
                />
              </a>
            </div>

            <div className="inline-flex items-center relative">
              <div className={`relative w-fit font-sora font-normal ${themeStyles.copyright} text-sm tracking-[0] leading-5 whitespace-nowrap`}>
                © 2025 Netlin Technologies
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-wrap w-full lg:w-[933px] gap-8 lg:gap-[64px] items-start relative">
            {footerNavigation.map((category, index) => (
              <div
                key={`category-${index}`}
                className="inline-flex flex-col items-start justify-center gap-4 md:gap-6 relative"
              >
                <div className={`relative w-fit font-sora font-bold ${themeStyles.categoryTitle} text-xs text-center tracking-[0.42px] leading-5 whitespace-nowrap`}>
                  {category.title}
                </div>

                <div className="inline-flex flex-col items-start gap-3 md:gap-4 relative">
                  {category.links.map((link, linkIndex) => (
                    <div
                      key={`link-${index}-${linkIndex}`}
                      className={`relative w-fit font-sora font-semibold ${themeStyles.categoryLink} text-xs text-center tracking-[0.42px] leading-5 whitespace-nowrap transition-colors cursor-pointer`}
                    >
                      {link}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};