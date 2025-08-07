import React from "react";
import { t } from '@/lib/locales';
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-8 md:gap-16 pt-16 md:pt-32 pb-0 px-4 md:px-8 lg:px-[65px] relative w-full">
      <div className="flex flex-col items-start gap-6">
        <h2 className="w-fit font-['Inter',Helvetica] font-normal text-white text-3xl md:text-4xl lg:text-5xl tracking-[-0.96px] leading-tight md:leading-6">
          {t.content.howItWorks.title}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start flex-wrap">
          {t.content.howItWorks.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <img
                className="w-6 h-[17px] flex-shrink-0"
                alt="Checkmark"
                src="/vector-3.svg"
              />
              <span className="font-sora font-normal text-[#807f8c] text-lg md:text-xl lg:text-2xl">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-8">
        {/* Steps */}
        <div className="flex flex-col items-start gap-0 flex-1">
          {t.content.howItWorks.steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full">
                <div className="relative w-[102px] h-[100px] flex-shrink-0">
                  <div className="w-[100px] h-[100px] rounded-[50px] border-[3px] border-solid border-[#4d9aff] flex items-center justify-center">
                    <span className="font-sora font-semibold text-white text-3xl md:text-4xl lg:text-5xl tracking-[-0.96px] leading-6">
                      {step.number}
                    </span>
                  </div>
                </div>

                <Card className="bg-transparent border-none flex-1">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-start justify-center gap-4 md:gap-5">
                      <h3 className="font-sora font-semibold text-white text-xl md:text-2xl tracking-[-0.48px]">
                        {step.title}
                      </h3>
                      <p className="max-w-none lg:max-w-[700px] font-sora font-normal text-white text-lg md:text-xl tracking-[-0.40px] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {index < t.content.howItWorks.steps.length - 1 && (
                <div className="flex w-[100px] items-center justify-center my-4">
                  <Separator
                    orientation="vertical"
                    className="h-12 md:h-20 bg-[#4d9aff] w-[1px]"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Illustration - Hidden on mobile and tablet */}
        <div className="hidden xl:block">
          <img className="relative -ml-3 max-w-full h-auto" alt="Frame" src="/frame-881.svg" />
        </div>
      </div>
    </section>
  );
};