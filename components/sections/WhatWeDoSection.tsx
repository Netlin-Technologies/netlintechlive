import { CheckIcon } from "lucide-react";
import React from "react";
import { t } from '@/lib/locales';
import { Button } from "../ui/button";
import { Card, CardTitle } from "../ui/card";

export const WhatWeDoSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-8 md:gap-16 pt-16 md:pt-32 lg:pt-[200px] pb-0 px-4 md:px-8 lg:px-[65px] relative w-full">
      <div className="flex flex-col items-start gap-6">
        <h2 className="w-fit font-['Inter',Helvetica] font-normal text-white text-3xl md:text-4xl lg:text-5xl tracking-[-0.96px] leading-tight md:leading-6">
          {t.content.whatWeDo.title}
        </h2>
        <p className="w-full max-w-[1174px] font-sora font-normal text-[#807f8c] text-lg md:text-xl lg:text-2xl leading-relaxed">
          {t.content.whatWeDo.description}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Business Systems Card */}
        <Card className="flex flex-col min-h-[400px] lg:h-[479px] items-start justify-between p-6 md:p-9 flex-1 bg-[#0c0b12] rounded-xl overflow-hidden border-[hsl(0,0,18%)] relative">
          <div className="flex flex-col items-start gap-6 z-10">
            <CardTitle className="font-sora font-semibold text-white text-xl md:text-2xl">
              {t.content.whatWeDo.businessSystems.title}
            </CardTitle>

            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-2.5">
                {t.content.whatWeDo.businessSystems.items.map((system: string, index: number) => (
                  <div
                    key={`system-${index}`}
                    className="flex w-full items-center gap-2.5"
                  >
                    <div className="relative w-6 h-6 flex-shrink-0">
                      <CheckIcon className="absolute w-[18px] h-[13px] top-[5px] left-[3px] text-white" />
                    </div>
                    <span className="font-sora font-normal text-[#807f8c] text-lg md:text-xl">
                      {system}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex w-full items-center gap-2.5">
                <span className="font-sora font-normal text-[#807f8c] text-lg md:text-xl">
                  {t.content.whatWeDo.businessSystems.moreText}
                </span>
              </div>
            </div>
          </div>

          <Button className="px-4 py-2 rounded border border-solid border-[#4d9aff] shadow-[0px_4px_6px_#0000000d,0px_10px_15px_#0000001a] bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] z-10">
            <span className="font-sora font-semibold text-white text-lg leading-6 whitespace-nowrap">
              {t.content.whatWeDo.businessSystems.buttonText}
            </span>
          </Button>

          <img
            className="hidden md:block lg:hidden 2xl:block absolute w-[300px] md:w-[400px] lg:w-[478px] h-[300px] md:h-[400px] lg:h-[478px] top-0 right-0"
            alt="Business systems illustration"
            src="/group-833.png"
          />
        </Card>

        {/* Business Processes Card */}
        <Card className="flex flex-col min-h-[400px] lg:h-[479px] items-start justify-between p-6 md:p-9 flex-1 bg-[#0c0b12] rounded-xl border-[hsl(0,0,18%)] relative">
          <div className="flex flex-col items-start gap-6 z-10">
            <CardTitle className="font-sora font-semibold text-white text-xl md:text-2xl">
              {t.content.whatWeDo.businessProcesses.title}
            </CardTitle>

            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-2.5">
                {t.content.whatWeDo.businessProcesses.items.map((process: string, index: number) => (
                  <div
                    key={`process-${index}`}
                    className="flex w-full items-center gap-2.5"
                  >
                    <div className="relative w-6 h-6 flex-shrink-0">
                      <CheckIcon className="absolute w-[18px] h-[13px] top-[5px] left-[3px] text-white" />
                    </div>
                    <span className="font-sora font-normal text-[#807f8c] text-lg md:text-xl">
                      {process}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex w-full items-center gap-2.5">
                <span className="font-sora font-normal text-[#807f8c] text-lg md:text-xl">
                  {t.content.whatWeDo.businessProcesses.moreText}
                </span>
              </div>
            </div>
          </div>

          <Button className="px-4 py-2 rounded border border-solid border-[#4d9aff] shadow-[0px_4px_6px_#0000000d,0px_10px_15px_#0000001a] bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] z-10">
            <span className="font-sora font-semibold text-white text-lg leading-6 whitespace-nowrap">
              {t.content.whatWeDo.businessProcesses.buttonText}
            </span>
          </Button>

          {/* Complex SVG illustration - simplified for mobile */}
          <div className="hidden md:block lg:hidden 2xl:block absolute w-[300px] md:w-[400px] lg:w-[514px] h-[250px] md:h-[300px] lg:h-[366px] top-[51px] right-0">
            <div className="absolute w-[250px] md:w-[300px] lg:w-[380px] h-[200px] md:h-[280px] lg:h-[349px] top-0 right-0">
              <div className="absolute w-full h-full top-0 left-0">
                <div className="relative h-full">
                  <svg className="absolute w-[300px] md:w-[400px] lg:w-[478px] h-[300px] md:h-[400px] lg:h-[478px] -top-16 right-0" width="495" height="367" viewBox="0 0 495 367" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M103 349H123.052C134.883 349 145.609 342.046 150.439 331.246L203.269 213.091C211.318 195.089 229.195 183.5 248.914 183.5H494.5" stroke="url(#paint0_linear_3740_14506)" strokeWidth="2"/>
                    <path d="M102 349.5H123.029C144.104 349.5 163.635 338.442 174.478 320.37L193.522 288.63C204.365 270.558 223.896 259.5 244.971 259.5H264.5" stroke="url(#paint1_linear_3740_14506)" strokeWidth="2"/>
                    <path d="M103 350L494 350" stroke="url(#paint2_linear_3740_14506)" strokeWidth="2"/>
                    <path d="M280 183.5V183.5C295.454 183.5 309.405 174.244 315.413 160.006L367.026 37.6759C376.404 15.4487 398.182 1 422.307 1H494.5" stroke="url(#paint3_linear_3740_14506)" strokeWidth="2"/>
                    <rect x="0.5" y="331.5" width="102.996" height="34.9965" rx="17.4983" fill="#161722"/>
                    <rect x="0.5" y="331.5" width="102.996" height="34.9965" rx="17.4983" stroke="#33323E"/>
                    <path d="M21.8017 351.702C20.8343 352.93 19.4632 353.775 17.9319 354.087C16.4006 354.399 14.8081 354.159 13.437 353.409C12.066 352.659 11.0052 351.447 10.4428 349.989C9.8804 348.531 9.85288 346.92 10.3651 345.444C10.8773 343.967 11.8961 342.72 13.2407 341.923C14.5853 341.127 16.1687 340.832 17.7098 341.092C19.2509 341.352 20.65 342.15 21.6589 343.343C22.6677 344.537 23.221 346.05 23.2205 347.612C23.2202 348.079 23.1711 348.543 23.0738 348.999" stroke="#33323E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.332 352.328L26.0004 356.997" stroke="#33323E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                    <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="12" fontWeight="600" letterSpacing="0em"><tspan x="35.9961" y="353.08">ANALYZE</tspan></text>
                    <rect x="264.5" y="238.5" width="177" height="34.5" rx="17.25" fill="#161722"/>
                    <rect x="264.5" y="238.5" width="177" height="34.5" rx="17.25" stroke="#33323E"/>
                    <path d="M276.5 259C277.605 259 278.5 259.895 278.5 261C278.5 262.105 277.605 263 276.5 263C275.395 263 274.5 262.105 274.5 261C274.5 259.895 275.395 259 276.5 259ZM286.5 248.5C287.605 248.5 288.5 249.395 288.5 250.5C288.5 251.605 287.605 252.5 286.5 252.5C285.395 252.5 284.5 251.605 284.5 250.5C284.5 249.395 285.395 248.5 286.5 248.5Z" stroke="#33323E"/>
                    <path d="M278.5 261C281.5 261 286.5 260 286.5 252.5M276.5 259V248" stroke="#33323E" strokeWidth="2"/>
                    <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Sora" fontSize="12" fontWeight="600" letterSpacing="0em"><tspan x="299" y="259.83">AUTOMATE PROCESS</tspan></text>
                    <defs>
                    <linearGradient id="paint0_linear_3740_14506" x1="494" y1="351.5" x2="113.5" y2="351.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.121371" stopColor="#33323E"/>
                    <stop offset="0.123673" stopColor="white"/>
                    <stop offset="0.562522" stopColor="white"/>
                    <stop offset="0.606979" stopColor="#33323E"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_3740_14506" x1="264" y1="349.5" x2="113.5" y2="349.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.102136" stopColor="#33323E"/>
                    <stop offset="0.108514" stopColor="white"/>
                    <stop offset="0.723162" stopColor="#33323E"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_3740_14506" x1="231.337" y1="346" x2="102.572" y2="346" gradientUnits="userSpaceOnUse">
                    <stop offset="0.102136" stopColor="#33323E"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_3740_14506" x1="387" y1="36" x2="320" y2="168.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.747021" stopColor="#33323E"/>
                    <stop offset="0.756613" stopColor="white"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};