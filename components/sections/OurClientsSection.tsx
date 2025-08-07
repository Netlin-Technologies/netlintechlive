import React from "react";
import { t } from '@/lib/locales';
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const OurClientsSection = (): JSX.Element => {
  const clients = [
    {
      name: t.content.ourClients.clients[0].name,
      website: t.content.ourClients.clients[0].website,
      description: t.content.ourClients.clients[0].description,
      logoSrc: "/group-835.png",
      imageSrc: "/backend-us-inners--01-1-4.svg",
    },
    {
      name: t.content.ourClients.clients[1].name,
      website: t.content.ourClients.clients[1].website,
      description: t.content.ourClients.clients[1].description,
      logoSrc: "/group-835-1.png",
      imageSrc: "/backend-us-inners--01-1-1.svg",
    },
    {
      name: t.content.ourClients.clients[2].name,
      website: t.content.ourClients.clients[2].website,
      description: t.content.ourClients.clients[2].description,
      logoSrc: "/group-836.png",
      logoBackground: "bg-[url(/krook2st-1.png)] bg-[100%_100%]",
      imageSrc: "/backend-us-inners--01-1.svg",
    },
    {
      name: t.content.ourClients.clients[3].name,
      website: t.content.ourClients.clients[3].website,
      description: t.content.ourClients.clients[3].description,
      logoSrc: "/group-836-1.png",
      logoBackground: "bg-[url(/krook2st-1-1.png)] bg-[100%_100%]",
      imageSrc: "/backend-us-inners--01-1-3.svg",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-8 md:gap-16 pt-16 md:pt-32 pb-0 px-4 md:px-8 lg:px-[65px] relative w-full">
      <header className="flex flex-col items-start gap-6">
        <h2 className="w-fit font-['Inter',Helvetica] font-normal text-white text-3xl md:text-4xl lg:text-5xl tracking-[-0.96px] leading-tight md:leading-6">
          {t.content.ourClients.title}
        </h2>
        <p className="w-full max-w-[1128px] font-sora font-normal text-[#807f8c] text-lg md:text-xl lg:text-2xl leading-relaxed">
          {t.content.ourClients.description}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {clients.map((client, index) => (
          <Card
            key={index}
            className="min-h-[280px] md:h-[313px] bg-[#0c0b12] rounded-xl overflow-hidden border border-solid border-[hsl(0,0,18%)] p-0"
          >
            <CardContent className="flex flex-col lg:flex-row items-start lg:items-center p-6 md:p-9 h-full relative">
              <div className="flex flex-col w-full lg:w-auto items-start justify-between h-full gap-4 lg:gap-0 z-10">
                <div className="flex flex-col items-start gap-4 md:gap-6">
                  <div className="flex flex-col items-start gap-1.5">
                    <h3 className="w-fit font-sora font-semibold text-white text-xl md:text-2xl">
                      {client.name}
                    </h3>
                    <p className="w-fit font-sora font-light text-white text-lg md:text-xl">
                      {client.website}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-2.5">
                    <div className="flex w-full items-center gap-2.5">
                      <p className="w-full lg:w-[421px] font-sora font-normal text-[#807f8c] text-lg md:text-xl leading-relaxed">
                        {client.description}
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full sm:w-auto px-4 py-2 rounded border border-solid border-[#4d9aff] shadow-[0px_4px_6px_#0000000d,0px_10px_15px_#0000001a] bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)]">
                  <span className="font-sora font-semibold text-white text-lg leading-6 whitespace-nowrap">
                    {t.content.ourClients.buttonText}
                  </span>
                </Button>
              </div>

              {/* Logo positioning - responsive */}
              {client.logoBackground ? (
                <div
                  className={`absolute w-[80px] md:w-[103px] h-[16px] md:h-[21px] top-4 right-4 lg:top-[-7px] lg:right-[100px] xl:right-[200px] ${client.logoBackground}`}
                >
                  <img
                    className="absolute w-full h-full top-0 left-0"
                    alt="Company logo"
                    src={client.logoSrc}
                  />
                </div>
              ) : (
                <img
                  className="absolute w-[80px] md:w-[100px] h-[32px] md:h-10 top-4 right-4 lg:-top-4 lg:right-[100px] xl:right-[200px]"
                  alt="Company logo"
                  src={client.logoSrc}
                />
              )}

              {/* Backend illustration - hidden on mobile, positioned responsively */}
              <img
                className="hidden lg:block absolute w-[250px] xl:w-[394px] h-[140px] xl:h-[214px] top-[74px] right-0 xl:right-[95px] opacity-60 xl:opacity-100"
                alt="Backend illustration"
                src={client.imageSrc}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};