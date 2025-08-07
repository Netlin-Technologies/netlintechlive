import React from "react";
import { t } from '@/lib/locales';
import { Card, CardContent } from "../ui/card";

export const ToolsOverviewSection = (): JSX.Element => {
  const automationTools = [
    {
      netlinImage: "/netlin-small-1-1.png",
      toolImage: "/pco6jc37-1.png",
      title: t.content.toolsOverview.tools[0].title,
      description: t.content.toolsOverview.tools[0].description,
    },
    {
      netlinImage: "/netlin-small-2.png",
      toolImage: "/brj1bgyt-1.png",
      title: t.content.toolsOverview.tools[1].title,
      description: t.content.toolsOverview.tools[1].description,
    },
    {
      netlinImage: "/netlin-small-2-1.png",
      toolImage: "/icon.svg",
      title: t.content.toolsOverview.tools[2].title,
      description: t.content.toolsOverview.tools[2].description,
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-start gap-6 pt-16 md:pt-32 pb-0 px-4 md:px-8 lg:px-[65px] relative w-full">
      {automationTools.map((tool, index) => (
        <Card
          key={`automation-tool-${index}`}
          className="flex flex-col items-start gap-6 md:gap-8 px-6 md:px-8 py-6 md:py-9 relative flex-1 bg-[#0c0b12] rounded-xl border border-solid border-[hsl(0,0,18%)]"
        >
          <CardContent className="p-0 w-full">
            <div className="inline-flex flex-wrap items-center gap-4 relative">
              <img
                className="relative w-8 md:w-11 h-[30px] md:h-[37px]"
                alt="Netlin small"
                src={tool.netlinImage}
              />
              <img
                className="relative w-3 h-3"
                alt="Vector"
                src="/vector-297.svg"
              />
              <img
                className="relative w-8 md:w-9 h-8 md:h-9 object-cover"
                alt={tool.title.split(" ").pop()}
                src={tool.toolImage}
              />
            </div>

            <div className="flex flex-col items-start gap-6 md:gap-8 w-full relative mt-6 md:mt-8">
              <h3 className="relative w-fit font-sora font-semibold text-white text-xl md:text-2xl tracking-[-0.48px] leading-[normal]">
                {tool.title}
              </h3>
              <p className="relative w-full font-sora font-normal text-[#807f8c] text-lg md:text-xl lg:text-2xl tracking-[-0.48px] leading-relaxed lg:leading-[normal]">
                {tool.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};