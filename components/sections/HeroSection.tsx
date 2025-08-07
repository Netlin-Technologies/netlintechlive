import React from "react";
import { t } from '@/lib/locales';
import { Button } from "../ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start justify-center gap-1 pt-16 md:pt-32 lg:pt-[200px] pb-0 px-4 md:px-8 lg:px-[65px] relative w-full">
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12 relative w-full">
        {/* Content */}
        <div className="flex flex-col items-start gap-6 relative flex-1 max-w-none lg:max-w-[903px]">
          <div className="flex h-[38px] items-center gap-2.5 relative w-full">
            <div className="inline-flex items-center gap-2.5 p-1.5 relative rounded-[5px] border border-solid border-[#4d9aff] shadow-[inset_0px_1px_6.5px_#00000040] bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)]">
              <img
                className="relative w-[26px] h-[26px]"
                alt="Ellipse"
                src="/ellipse-262.svg"
              />
            </div>
            <div className="relative w-fit font-sora font-semibold text-white text-xl md:text-2xl tracking-[0] leading-[normal]">
              {t.content.hero.badge}
            </div>
          </div>

          <h1 className="relative w-full font-sora font-semibold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-tight lg:leading-[normal]">
            {t.content.hero.title}
          </h1>

          <p className="relative w-full font-sora font-normal text-lg md:text-xl lg:text-2xl tracking-[0] leading-relaxed lg:leading-[normal]">
            <span className="text-[#ffffffcc]">
              {t.content.hero.description.split('...')[0]}...{" "}
            </span>
            <span className="font-semibold text-white">
              {t.content.hero.description.split('... ')[1]}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative w-full">
            <Button className="w-full sm:w-auto h-auto px-6 py-3 rounded border border-solid border-[#4d9aff] shadow-[0px_4px_6px_#0000000d,0px_10px_15px_#0000001a] bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] font-sora font-semibold text-white text-lg tracking-[0] leading-6">
              {t.content.hero.freeAnalysisButton}
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto h-auto px-6 py-3 rounded border border-solid border-[#555555] shadow-[0px_4px_6px_#0000000d,0px_10px_15px_#0000001a] bg-[linear-gradient(90deg,rgba(36,36,36,1)_0%,rgba(79,79,79,1)_100%)] font-sora font-semibold text-white text-lg tracking-[0] leading-6"
            >
              {t.content.hero.howItWorksButton}
            </Button>
          </div>
        </div>

        {/* Hero Images - Hidden on mobile, visible on larger screens */}
        <div className="hidden lg:block relative w-[663px] h-[479px] flex-shrink-0">
          <img
            className="absolute w-[438px] h-[214px] top-[57px] left-0"
            alt="Backend us inners"
            src="/automationgraphic2.svg"
          />
          <img
            className="absolute w-[336px] h-[127px] top-[273px] left-[45px]"
            alt="Frame"
            src="/automationgraphic3.svg"
          />
          <svg className="absolute w-[344px] h-[479px] top-0 left-[319px]" width="246" height="341" viewBox="0 0 246 341" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="240" height="335" rx="3" fill="#0C0B12"/>
            <rect x="3" y="3" width="240" height="335" rx="3" stroke="#33323E" strokeWidth="0.75"/>
            <rect x="11.5" y="11.5" width="223" height="35" rx="2.5" stroke="#33323E"/>
            <path d="M75.7095 20.5C76.4617 20.5 77.0714 21.1033 77.0714 21.8476V23.8171H81.681C82.491 23.8171 83.1476 24.4668 83.1476 25.2683V36.0488C83.1476 36.8503 82.491 37.5 81.681 37.5H69.319C68.509 37.5 67.8524 36.8503 67.8524 36.0488V25.2683C67.8524 24.4668 68.509 23.8171 69.319 23.8171H74.3476V21.8476C74.3476 21.1033 74.9574 20.5 75.7095 20.5ZM67.2238 27.5488V34.8049H65.3381C64.8752 34.8049 64.5 34.4336 64.5 33.9756V28.378C64.5 27.9201 64.8752 27.5488 65.3381 27.5488H67.2238ZM85.6619 27.5488C86.1247 27.5488 86.5 27.9201 86.5 28.378V33.9756C86.5 34.4336 86.1247 34.8049 85.6619 34.8049H83.7762V27.5488H85.6619ZM71.4143 32.3171C71.2986 32.3171 71.2048 32.4099 71.2048 32.5244V33.9756C71.2048 34.0901 71.2986 34.1829 71.4143 34.1829H73.719C73.8348 34.1829 73.9286 34.0901 73.9286 33.9756V32.5244C73.9286 32.4099 73.8348 32.3171 73.719 32.3171H71.4143ZM74.5571 32.3171C74.4414 32.3171 74.3476 32.4099 74.3476 32.5244V33.9756C74.3476 34.0901 74.4414 34.1829 74.5571 34.1829H76.6524C76.7681 34.1829 76.8619 34.0901 76.8619 33.9756V32.5244C76.8619 32.4099 76.7681 32.3171 76.6524 32.3171H74.5571ZM77.4905 32.3171C77.3748 32.3171 77.281 32.4099 77.281 32.5244V33.9756C77.281 34.0901 77.3748 34.1829 77.4905 34.1829H79.7952C79.911 34.1829 80.0048 34.0901 80.0048 33.9756V32.5244C80.0048 32.4099 79.911 32.3171 79.7952 32.3171H77.4905ZM72.2524 27.1341C71.6738 27.1341 71.2048 27.5982 71.2048 28.1707V28.7927C71.2048 29.3652 71.6738 29.8293 72.2524 29.8293H72.881C73.4595 29.8293 73.9286 29.3652 73.9286 28.7927V28.1707C73.9286 27.5982 73.4595 27.1341 72.881 27.1341H72.2524ZM78.3286 27.1341C77.75 27.1341 77.281 27.5982 77.281 28.1707V28.7927C77.281 29.3652 77.75 29.8293 78.3286 29.8293H78.9571C79.5357 29.8293 80.0048 29.3652 80.0048 28.7927V28.1707C80.0048 27.5982 79.5357 27.1341 78.9571 27.1341H78.3286Z" fill="white"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="8" letterSpacing="0em"><tspan x="94.5" y="31.72">Choose your systems</tspan></text>
            <rect x="11.25" y="63.25" width="223.5" height="0.5" rx="0.25" stroke="#33323E" strokeWidth="0.5"/>
            <rect x="11.5" y="80.5" width="223" height="25" rx="2.5" fill="#12101E"/>
            <rect x="11.5" y="80.5" width="223" height="25" rx="2.5" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="8" letterSpacing="0em"><tspan x="19" y="95.72">Automated Lead Generation</tspan></text>
            <rect x="196.715" y="88" width="20" height="10" rx="5" fill="#02D27D"/>
            <circle cx="211.715" cy="93" r="4" fill="white"/>
            <ellipse cx="225.858" cy="90.1429" rx="1.14286" ry="1.14285" fill="white"/>
            <ellipse cx="225.858" cy="93.0022" rx="1.14286" ry="1.14285" fill="white"/>
            <ellipse cx="225.858" cy="95.8538" rx="1.14286" ry="1.14285" fill="white"/>
            <rect x="11.5" y="112.5" width="223" height="25" rx="2.5" fill="#12101E"/>
            <rect x="11.5" y="112.5" width="223" height="25" rx="2.5" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="8" letterSpacing="0em"><tspan x="19" y="127.72">Automated SEO Blog Generator</tspan></text>
            <rect x="196.715" y="120" width="20" height="10" rx="5" fill="#252234"/>
            <circle cx="201.715" cy="125" r="4" fill="white"/>
            <ellipse cx="225.858" cy="122.143" rx="1.14286" ry="1.14285" fill="white"/>
            <ellipse cx="225.858" cy="125.002" rx="1.14286" ry="1.14285" fill="white"/>
            <ellipse cx="225.858" cy="127.854" rx="1.14286" ry="1.14285" fill="white"/>
            <rect x="11.5" y="144.5" width="223" height="25" rx="2.5" fill="#12101E"/>
            <rect x="11.5" y="144.5" width="223" height="25" rx="2.5" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="8" letterSpacing="0em"><tspan x="19" y="159.72">Lead Follow-Up System</tspan></text>
            <rect x="196.715" y="152" width="20" height="10" rx="5" fill="#252234"/>
            <circle cx="201.715" cy="157" r="4" fill="white"/>
            <ellipse cx="225.858" cy="154.143" rx="1.14286" ry="1.14285" fill="white"/>
            <ellipse cx="225.858" cy="157.002" rx="1.14286" ry="1.14285" fill="white"/>
            <ellipse cx="225.858" cy="159.854" rx="1.14286" ry="1.14285" fill="white"/>
            <rect x="11.5" y="176.5" width="223" height="25" rx="2.5" fill="#12101E"/>
            <rect x="11.5" y="176.5" width="223" height="25" rx="2.5" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="8" letterSpacing="0em"><tspan x="19" y="191.72">Personal AI Agents</tspan></text>
            <rect x="196.715" y="184" width="20" height="10" rx="5" fill="#02D27D"/>
            <circle cx="211.715" cy="189" r="4" fill="white"/>
            <ellipse cx="225.858" cy="186.143" rx="1.14286" ry="1.14285" fill="white"/>
            <ellipse cx="225.858" cy="189.002" rx="1.14286" ry="1.14285" fill="white"/>
            <ellipse cx="225.858" cy="191.854" rx="1.14286" ry="1.14285" fill="white"/>
            <rect x="11.5" y="208.5" width="223" height="25" rx="2.5" fill="#12101E"/>
            <rect x="11.5" y="208.5" width="223" height="25" rx="2.5" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="8" letterSpacing="0em"><tspan x="19" y="223.72">AI Customer Support</tspan></text>
            <rect x="196.715" y="216" width="20" height="10" rx="5" fill="#02D27D"/>
            <circle cx="211.715" cy="221" r="4" fill="white"/>
            <ellipse cx="225.858" cy="218.143" rx="1.14286" ry="1.14285" fill="white"/>
            <ellipse cx="225.858" cy="221.002" rx="1.14286" ry="1.14285" fill="white"/>
            <ellipse cx="225.858" cy="223.854" rx="1.14286" ry="1.14285" fill="white"/>
            <rect x="11.5" y="240.5" width="223" height="25" rx="2.5" fill="#12101E"/>
            <rect x="11.5" y="240.5" width="223" height="25" rx="2.5" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="8" letterSpacing="0em"><tspan x="19" y="255.72">Automated CV Screening</tspan></text>
            <rect x="196.715" y="248" width="20" height="10" rx="5" fill="#252234"/>
            <circle cx="201.715" cy="253" r="4" fill="white"/>
            <ellipse cx="225.858" cy="250.143" rx="1.14286" ry="1.14285" fill="white"/>
            <ellipse cx="225.858" cy="253.002" rx="1.14286" ry="1.14285" fill="white"/>
            <ellipse cx="225.858" cy="255.854" rx="1.14286" ry="1.14285" fill="white"/>
            <rect x="11.5" y="272.5" width="223" height="25" rx="2.5" fill="#12101E"/>
            <rect x="11.5" y="272.5" width="223" height="25" rx="2.5" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="8" letterSpacing="0em"><tspan x="19" y="287.72">Automated Content Generation</tspan></text>
            <rect x="196.715" y="280" width="20" height="10" rx="5" fill="#252234"/>
            <circle cx="201.715" cy="285" r="4" fill="white"/>
            <ellipse cx="225.858" cy="282.143" rx="1.14286" ry="1.14285" fill="white"/>
            <ellipse cx="225.858" cy="285.002" rx="1.14286" ry="1.14285" fill="white"/>
            <ellipse cx="225.858" cy="287.854" rx="1.14286" ry="1.14285" fill="white"/>
            <rect x="11.5" y="304.5" width="223" height="25" rx="2.5" fill="#12101E"/>
            <rect x="11.5" y="304.5" width="223" height="25" rx="2.5" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="8" letterSpacing="0em"><tspan x="19" y="319.72">Erspart</tspan></text>
            <rect x="218.5" y="308.5" width="12" height="17" rx="0.5" fill="#252234" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="9" letterSpacing="0em"><tspan x="221" y="319.56">&#x20ac;</tspan></text>
            <rect x="204.5" y="308.5" width="12" height="17" rx="0.5" fill="#252234" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="9" letterSpacing="0em"><tspan x="208" y="319.56">1</tspan></text>
            <rect x="190.5" y="308.5" width="12" height="17" rx="0.5" fill="#252234" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="9" letterSpacing="0em"><tspan x="194" y="319.56">5</tspan></text>
            <rect x="176.5" y="308.5" width="12" height="17" rx="0.5" fill="#252234" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="9" letterSpacing="0em"><tspan x="180" y="319.56">3</tspan></text>
            <rect x="162.5" y="308.5" width="12" height="17" rx="0.5" fill="#252234" stroke="#33323E"/>
            <text fill="#807F8C" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="9" letterSpacing="0em"><tspan x="167" y="319.56">.</tspan></text>
            <rect x="148.5" y="308.5" width="12" height="17" rx="0.5" fill="#252234" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="9" letterSpacing="0em"><tspan x="152" y="319.56">2</tspan></text>
            <rect x="134.5" y="308.5" width="12" height="17" rx="0.5" fill="#252234" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="9" letterSpacing="0em"><tspan x="138" y="319.56">5</tspan></text>
            <rect x="120.5" y="308.5" width="12" height="17" rx="0.5" fill="#252234" stroke="#33323E"/>
            <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="9" letterSpacing="0em"><tspan x="124" y="319.56">7</tspan></text>
          </svg>
        </div>
      </div>
    </section>
  );
};