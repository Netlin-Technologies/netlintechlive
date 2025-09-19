import React from "react";
import { t } from '@/lib/locales';
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { LocalizedLink } from '../LocalizedLink';

interface FooterSectionProps {
  theme?: 'dark' | 'light';
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
}

export const FooterSection = ({ theme = 'dark', ctaTitle, ctaDescription, ctaButtonText }: FooterSectionProps): JSX.Element => {
  // Theme-aware styles
  const themeStyles = {
    background: theme === 'light' ? "bg-gray-50" : "",
    heading: theme === 'light' ? "text-gray-900" : "text-neutral-01100",
    description: theme === 'light' ? "text-gray-600" : "text-[#bbbbbb]",
    separator: theme === 'light' ? "border-gray-300" : "border-[#ffffff1a]",
    logo: theme === 'light' ? "text-gray-900" : "text-white",
    copyright: theme === 'light' ? "text-gray-600" : "text-neutral-04100",
    categoryTitle: theme === 'light' ? "text-gray-700" : "text-[#ffffffbf]",
    categoryLink: theme === 'light' ? "text-gray-600 hover:text-gray-900" : "text-[#ffffff80] hover:text-white",
    buttonStyle: theme === 'light' ? "px-4 py-2 text-xl tracking-[0] leading-6" : "w-full sm:w-auto p-4 bg-neutral-01100 rounded-lg font-sora font-bold text-lg md:text-xl lg:text-2xl text-center tracking-[0.84px] leading-5",
    circleBackground: theme === 'light' ? "border-gray-200 border-t border-b bg-[radial-gradient(circle,_#cbd5e1_1px,_transparent_1px)] bg-[length:20px_20px]" : "border-t border-[#ffffff1a] bg-[radial-gradient(circle,_#ffffff1a_1px,_transparent_1px)] bg-[length:20px_20px]",
    socialLink: theme === 'light' ? "bg-gray-200 rounded-full hover:bg-gray-300" : "bg-[#161722] rounded-full hover:bg-[#302A46]",
    dropdownBg: theme === 'light' ? "bg-white" : "bg-[#0f1017]",
    dropdownBorder: theme === 'light' ? "border-gray-200" : "border-[#ffffff1a]",
    dropdownShadow: theme === 'light' ? "shadow-lg" : "shadow-[0_10px_25px_rgba(0,0,0,0.35)]",
    dropdownItem: theme === 'light' ? "text-gray-700 hover:text-gray-900 hover:bg-gray-50" : "text-[#ffffffbf] hover:text-white hover:bg-[#1b1c29]",
    subLink: theme === 'light' ? "text-gray-600 hover:text-gray-900" : "text-[#ffffff80] hover:text-white",
    bullet: theme === 'light' ? "bg-[#3d89f9]" : "bg-[#4d9aff]",
    bulletRing: theme === 'light' ? "ring-1 ring-[#3d89f955]" : "ring-1 ring-[#4d9aff55]",
  };

  const footerNavigation = t.content.footer.categories;
  // Define sub-links for the "Automation" service (can be expanded later)
  const automationSubLinks: Array<{ route: keyof typeof t.routes; name: string }> = [
    { route: 'customer_service_automation', name: t.content.navigation.customer_service_automation },
  ];

  return (
    <footer className={`w-full flex flex-col items-start pb-0 px-0 relative ${themeStyles.background}`}>
      <div className={`w-full flex flex-col items-start gap-2.5 py-16 md:py-32 lg:py-24 relative ${themeStyles.circleBackground}`}>
        {/*theme === 'dark' && (
          <div className="absolute w-full h-full top-0 left-0 bg-[url(/group-792.png)] bg-cover bg-center opacity-50 md:opacity-100">
           
          </div>
        )*/}

        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8 relative mx-auto max-w-[995px] bg-transparent border-none">
          <div className="flex flex-col items-center gap-6 relative w-full p-0">
            {theme === 'dark' && (
              <img
                className="hidden md:block absolute w-[200px] md:w-[297px] h-[8px] md:h-[11px] top-[100px] md:top-[120px] left-1/2 transform -translate-x-1/2"
                alt="Vector"
                src="/vector-2-1.svg"
              />
            )}

            <p className={`relative w-full font-sora font-semibold ${themeStyles.heading} text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center tracking-[0] leading-tight lg:leading-[72px]`}>
              {ctaTitle ?? t.content.footer.ctaSection.title}
            </p>

            <p className={`relative w-full font-sora font-normal ${themeStyles.description} text-lg md:text-xl lg:text-2xl text-center tracking-[0] leading-relaxed lg:leading-8`}>
              {ctaDescription ?? t.content.footer.ctaSection.description}
            </p>
          </div>

          <div className="flex items-center justify-center relative w-full">
            <LocalizedLink
              route="contact"
            >
              <Button variant="primaryGradient" className={`${themeStyles.buttonStyle} !whitespace-pre-wrap !h-full !leading-6`}>
                {ctaButtonText ?? t.content.footer.ctaSection.buttonText}
              </Button>
            </LocalizedLink>
          </div>
        </div>
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
              <a href="https://www.linkedin.com/company/netlintech" target="_blank" className={`flex justify-center items-center p-3 ${themeStyles.socialLink} cursor-pointer transition-all duration-300`}>
                <img
                  className="w-4 h-4"
                  alt="LinkedIn"
                  src="/linkedin.svg"
                />
              </a>
               <a href="https://www.instagram.com/netlintech" target="_blank" className={`flex justify-center items-center p-3 ${themeStyles.socialLink} cursor-pointer transition-all duration-300`}>
                <img
                  className="w-4 h-4"
                  alt="Instagram"
                  src="/instagram.svg"
                />
              </a>
              <a href="https://www.facebook.com/netlintech" target="_blank" className={`flex justify-center items-center p-3 ${themeStyles.socialLink} cursor-pointer transition-all duration-300`}>
                <img
                  className="w-4 h-4"
                  alt="Facebook"
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-wrap w-auto gap-10 md:gap-12 lg:gap-[80px] items-start relative">
            {footerNavigation.map((category, index) => (
              <div
                key={`category-${index}`}
                className="inline-flex flex-col items-start justify-center gap-4 md:gap-6 relative group min-w-[180px]"
              >
                <div className={`relative w-fit font-sora font-bold ${themeStyles.categoryTitle} text-xs text-center tracking-[0.42px] leading-5 whitespace-nowrap`}>
                  {category.title}
                </div>

                <div className="inline-flex flex-col items-start gap-3 md:gap-4 relative">
                  {category.links.map((footerLink, linkIndex) => {
                    const isAutomation = footerLink.route === 'automation';
                    if (!isAutomation) {
                      return (
                        <LocalizedLink
                          route={footerLink.route as keyof typeof t.routes}
                          key={`link-${index}-${linkIndex}`}
                          className={`relative w-fit font-sora font-semibold ${themeStyles.categoryLink} text-xs text-center tracking-[0.42px] leading-5 whitespace-nowrap transition-colors cursor-pointer`}
                        >
                          {footerLink.name}
                        </LocalizedLink>
                      );
                    }

                    // Automation with inline hoverable sub-list (no separate button)
                    return (
                      <div key={`link-${index}-${linkIndex}`} className="relative">
                        <LocalizedLink
                          route={footerLink.route as keyof typeof t.routes}
                          className={`relative w-fit font-sora font-semibold ${themeStyles.categoryLink} text-xs text-center tracking-[0.42px] leading-5 whitespace-nowrap transition-colors cursor-pointer`}
                        >
                          {footerLink.name}
                        </LocalizedLink>
                        {/* Inline sub-list under Automation with smooth animation; remains open on group hover */}
                        <ul
                          className="mt-1 pl-3 space-y-1 overflow-hidden max-h-0 opacity-0 translate-y-[-4px] transition-all duration-200 ease-out group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0"
                        >
                          {automationSubLinks.map((sub, subIdx) => (
                            <li key={`auto-sub-${subIdx}`}>
                              <LocalizedLink
                                route={sub.route}
                                className={`relative inline-flex items-center gap-2 font-sora font-medium ${themeStyles.subLink} text-[11px] tracking-[0.3px] leading-5 whitespace-nowrap transition-colors cursor-pointer group/sub`}
                              >
                                <span
                                  className={`inline-block w-1.5 h-1.5 rounded-full opacity-80 ${themeStyles.bullet} ${themeStyles.bulletRing} transition-transform duration-200 group-hover/sub:scale-110`}
                                />
                                {sub.name}
                              </LocalizedLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
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