import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import { t } from '@/lib/locales';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const FaqSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-6 pt-16 md:pt-32 lg:pt-[200px] pb-0 px-4 md:px-8 lg:px-[311px] relative w-full">
      <div className="flex flex-col max-w-[654px] items-start gap-6 py-8 relative">
        <h2 className="relative w-full font-sora font-semibold text-neutral-01100 text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight lg:leading-[60px]">
          {t.content.faq.title}
        </h2>

        <p className="relative w-full font-sora font-normal text-neutral-03 text-base md:text-lg text-center tracking-[0] leading-relaxed lg:leading-[18px]">
          <span className="font-light text-[#ada7c3] leading-6">
            {t.content.faq.subtitle}
            <br />
          </span>
          <span className="font-light text-white leading-6">Ask us here!</span>
        </p>
      </div>

      <div className="flex flex-col w-full max-w-[705px] items-start relative">
        <Accordion type="single" collapsible className="w-full">
          {t.content.faq.items.map((item: { question: string; answer?: string }, index: number) => (
            <AccordionItem
              key={`faq-${index}`}
              value={`item-${index}`}
              className="border-b border-[#ffffff26] pb-2 md:py-4"
            >
              <AccordionTrigger className="flex items-start md:items-center gap-4 md:gap-9 relative w-full text-left">
                <div className="flex-1 font-sora font-normal text-neutral-01100 text-base md:text-xl tracking-[0] leading-relaxed md:leading-8 break-all">
                  {item.question}
                </div>
              </AccordionTrigger>
              {item.answer && (
                <AccordionContent className="font-sora font-light text-[#807f8c] text-base md:text-lg tracking-[0] leading-relaxed md:leading-6 pt-4 md:pt-6">
                  {item.answer}
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Background decorative elements - hidden on mobile */}
      <div className="hidden 2xl:block absolute w-[665px] h-[400px] top-[62px] -left-px">
        <img
          className="absolute w-[665px] h-[200px] top-[200px] left-0"
          alt="Vector"
          src="/vector-300-1.svg"
        />
        <img
          className="absolute w-[664px] h-[200px] top-0 left-0"
          alt="Vector"
          src="/vector-301-1.svg"
        />
      </div>

      <div className="hidden 2xl:block absolute w-[665px] h-[400px] top-[62px] right-0 rotate-180">
        <div className="relative h-[401px]">
          <img
            className="absolute w-[665px] h-[201px] top-0 left-0 -rotate-180"
            alt="Vector"
            src="/vector-300.svg"
          />
          <img
            className="absolute w-[664px] h-[201px] top-[200px] left-0 -rotate-180"
            alt="Vector"
            src="/vector-301.svg"
          />
        </div>
      </div>
    </section>
  );
};