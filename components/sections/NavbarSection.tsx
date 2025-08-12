'use client';

import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { LocalizedLink } from '../LocalizedLink';
import { t } from '@/lib/locales';
import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

interface NavbarSectionProps {
  theme?: 'dark' | 'light';
}

export const NavbarSection = ({ theme = 'dark' }: NavbarSectionProps): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  // Separate mobile dropdown open state (hover doesn't apply on touch devices)
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const pathname = usePathname();

  const isRouteActive = (route: keyof typeof t.routes) => {
    const target = t.routes[route]; // localized path e.g. '/', '/aboutus'
    if (!target) return false;
    if (target === '/') return pathname === '/' || pathname === '';
    // Normalize (strip trailing slash) for robust comparison
    const normTarget = target.replace(/\/$/, '');
    const normPath = pathname.replace(/\/$/, '');
    return normPath === normTarget || normPath.startsWith(normTarget + '/');
  };

  // Theme-aware styles
  const themeStyles = {
    nav: theme === 'light' 
      ? "bg-white/90" 
      : "bg-[#0e0c151f]",
    border: theme === 'light' 
      ? "border-b border-gray-200" 
      : "border-b border-[#ffffff1a]",
    logo: theme === 'light' ? "text-gray-900" : "text-white",
    dropdown: theme === 'light'
      ? "border-gray-200 border-b border-r border-l w-auto absolute -left-3.5 mx-auto bg-[#FFF] shadow-[0px_10px_20px_0px_rgba(200,200,200,0.30)] rounded-bl-[10px] rounded-br-[10px] hidden lg:flex top-[92px] pointer-events-none opacity-0 -mt-1.5"
      : "border-b border-[#ffffff1a] border-r border-l w-auto absolute -left-3.5 mx-auto bg-[#0D0C15] shadow-[0px_20px_20px_0px_rgba(0,0,0,0.70)] rounded-bl-[10px] rounded-br-[10px] hidden lg:flex top-[92px] pointer-events-none opacity-0 -mt-1.5",
    dropdownButton: theme === 'light'
      ? "bg-gray-100 border-gray-200 border-b border-r border-l border-t hover:bg-gray-200"
      : "bg-[#0D0C15]",
    dropdownText: theme === 'light'
      ? "text-gray-700"
      : "text-white",
    navLink: theme === 'light' 
      ? "text-gray-700 hover:text-[#4d9aff]" 
      : "text-white hover:text-[#4d9aff]",
    mobileButton: theme === 'light' ? "text-gray-900" : "text-white",
    mobileMenu: theme === 'light' 
      ? "bg-white/95 border-b border-gray-200 backdrop-blur-lg" 
      : "bg-[#0e0c15] border-b border-[#ffffff1a]",
    mobileLink: theme === 'light' 
      ? "text-gray-700 hover:text-[#4d9aff]" 
      : "text-white hover:text-[#4d9aff]"
  };

  //type RouteType = "about" | "services" | "blog" | "contact" | "automation" | "home";
  const navItems: { text: string; route: "home" | "services" | "blog" | "contact" | "about" | "automation"; hasDropdown: boolean }[] = [
    { text: t.content.navigation.home, route: "home", hasDropdown: false },
    { text: t.content.navigation.services, route: "services", hasDropdown: true },
    { text: t.content.navigation.blog, route: "blog", hasDropdown: false },
    //{ text: t.content.navigation.automation, route: "automation", hasDropdown: false },
    //{ text: t.content.navigation.about, route: "about", hasDropdown: false },
  ];

  return (
    <header className={`w-full h-[84px] top-0 left-0 sticky z-50 ${themeStyles.nav} ${themeStyles.border} backdrop-blur-lg backdrop-brightness-[100%]`}>
      <nav className="flex items-center justify-between py-0 relative h-full">
        <div className="flex w-full max-w-[1800px] items-center justify-between relative mx-auto px-4 md:px-6 lg:px-10">
          {/* Logo */}
          <div className="flex h-10 items-center gap-3 relative">
            <div className="relative w-12 h-12 mt-[-4.00px] mb-[-4.00px]">
              <div className="relative w-10 h-10 top-1 left-1">
                <img
                  className="absolute w-12 h-12 -top-1 -left-1 object-cover"
                  alt="Netlin small"
                  src="/netlin-small-1-2.png"
                />
              </div>
            </div>
            <div className={`relative w-fit font-['Montserrat',Helvetica] font-normal ${themeStyles.logo} text-lg md:text-[22px] text-center tracking-[0.77px] leading-5 whitespace-nowrap`}>
              <span className="font-extrabold tracking-[0.17px]">NETLIN</span>
              <span className="font-medium tracking-[0.17px]">TECH</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex max-w-none">
            <NavigationMenuList className="flex gap-8 xl:gap-[52px]">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  { !item.hasDropdown ? (
                  <NavigationMenuLink asChild>
                    <LocalizedLink route={item.route} className={`flex items-center px-0 py-8 font-sora font-semibold ${themeStyles.navLink} ${isRouteActive(item.route) ? 'text-[#4d9aff]' : ''} text-sm xl:text-base text-center tracking-[0.56px] leading-5 whitespace-nowrap transition-colors`}>
                      {item.text}
                    </LocalizedLink>
                  </NavigationMenuLink>
                  ) : (
                  <div
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => setIsServicesHovered(false)}
                    className="relative inline-block"
                  >
                    <NavigationMenuLink className={`flex items-center px-0 py-8 font-sora font-semibold ${themeStyles.navLink} ${isRouteActive('services') ? 'text-[#4d9aff]' : ''} text-sm xl:text-base text-center tracking-[0.56px] leading-5 whitespace-nowrap transition-colors cursor-pointer`}>
                      {item.text}
                      <ChevronDownIcon className={`ml-2 h-3.5 w-3.5 transition-transform duration-200 ${isServicesHovered ? "rotate-180" : ""}`} />
                    </NavigationMenuLink>

                    <div
                      style={{ transition: "all 0.5s ease" }}
                      className={`${themeStyles.dropdown} ${
                        isServicesHovered
                          ? " max-h-auto top-10 opacity-100 !pointer-events-auto "
                          : " "
                      }`}
                    >
                      <div className={`p-3 rounded-bl-[10px] rounded-br-[10px] flex items-center gap-[11px]`}>
                        <LocalizedLink route="automation">
              <div className={`${themeStyles.dropdownButton} h-[62px] min-w-[217px] cursor-pointer p-[18px] rounded-[14px] transition-all duration-300 hover:brightness-120 ${isRouteActive('automation') ? 'ring-2 ring-[#4d9aff] bg-[#4d9aff]/10' : ''}`}>
                            <div className="inline-flex justify-start items-center gap-3.5">
                              <div>
                                <img
                                  src="/assets/images/automatisierung.svg"
                                  alt="Automatisierung Icon"
                                />
                              </div>
                <div className={`${themeStyles.dropdownText} justify-start text-base font-semibold font-sora ${isRouteActive('automation') ? 'text-[#4d9aff]' : ''}`}>
                                {t.content.navigation.automation}
                              </div>
                            </div>
                          </div>
                        </LocalizedLink>
                        {/*
                        <LocalizedLink route="services">
                          <div className="h-[62px] min-w-[217px] cursor-pointer p-[18px] bg-[#181622] rounded-[14px] outline outline-offset-[-1px] transition-all duration-300 hover:brightness-120">
                            <div className="inline-flex justify-start items-center gap-3.5">
                              <div>
                                <img
                                  src="/assets/images/Webentwicklung.svg"
                                  alt="Webentwicklung Icon"
                                />
                              </div>
                              <div className="justify-start text-white text-base font-semibold font-sora">
                                {t.content.navigation.development}
                              </div>
                            </div>
                          </div>
                        </LocalizedLink>
                        <LocalizedLink route="services">
                          <div className="h-[62px] min-w-[109px] cursor-pointer p-[18px] bg-[#181622] rounded-[14px] outline outline-offset-[-1px] transition-all duration-300 hover:brightness-120">
                            <div className="inline-flex justify-start items-center gap-3.5">
                              <div>
                                <img src="/assets/images/searchSeo.svg" alt="SEO Icon" />
                              </div>
                              <div className="justify-start text-white text-base font-semibold font-sora">
                                {t.content.navigation.seo}
                              </div>
                            </div>
                          </div>
                        </LocalizedLink>
                        */}
                      </div>
                    </div>
                  </div>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex items-center">
            <LocalizedLink route="contact">
              <Button className="px-4 py-2 rounded border border-solid border-[#4d9aff] shadow-[0px_4px_6px_#0000000d,0px_10px_15px_#0000001a] bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] font-sora font-semibold text-white text-lg tracking-[0] leading-6">
                {t.content.navigation.contact}
              </Button>
            </LocalizedLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${themeStyles.mobileButton}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`absolute top-full left-0 right-0 ${themeStyles.mobileMenu} lg:hidden`}>
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="py-2">
                  {!item.hasDropdown ? (
                    <div className="flex items-center justify-between">
                      <LocalizedLink route={item.route}>
                        <span className={`font-sora font-semibold ${themeStyles.mobileLink} ${isRouteActive(item.route) ? 'text-[#4d9aff]' : ''} text-base transition-colors`}>
                          {item.text}
                        </span>
                      </LocalizedLink>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsServicesMobileOpen(o => !o)}
                      aria-expanded={isServicesMobileOpen}
                      aria-controls="mobile-services-dropdown"
                      className={`w-full flex items-center justify-between font-sora font-semibold ${themeStyles.mobileLink} ${isRouteActive('services') ? 'text-[#4d9aff]' : ''} text-base transition-colors`}
                    >
                      <span>{item.text}</span>
                      <ChevronDownIcon className={`h-4 w-4 transition-transform ${isServicesMobileOpen ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                  {item.hasDropdown && isServicesMobileOpen && (
                    <div
                      id="mobile-services-dropdown"
                      className="mt-3 pl-3 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2"
                    >
                      <LocalizedLink route="automation">
                        <div className={`${themeStyles.dropdownButton} flex items-center gap-3 px-4 py-3 rounded-lg ${isRouteActive('automation') ? 'ring-2 ring-[#4d9aff] bg-[#4d9aff]/10' : ''}`}> 
                          <img
                            src="/assets/images/automatisierung.svg"
                            alt="Automatisierung Icon"
                            className="w-6 h-6"
                          />
                          <span className={`${themeStyles.dropdownText} font-sora font-semibold text-sm ${isRouteActive('automation') ? 'text-[#4d9aff]' : ''}`}>{t.content.navigation.automation}</span>
                        </div>
                      </LocalizedLink>
                      {/** Future service items can be added here reusing the same pattern */}
                    </div>
                  )}
                </div>
              ))}
              <LocalizedLink route="contact">
                <Button className="w-full mt-4 px-4 py-2 rounded border border-solid border-[#4d9aff] shadow-[0px_4px_6px_#0000000d,0px_10px_15px_#0000001a] bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] font-sora font-semibold text-white text-lg tracking-[0] leading-6">
                  {t.content.navigation.contact}
                </Button>
              </LocalizedLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};