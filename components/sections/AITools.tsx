"use client";

const logos = [
  {icon: "/dnologo.svg", url: "https://dno.de", name: "Digitaleneuordnung"},
  {icon: "/mdtradelogo.svg", url: "https://mdtrade.de", name: "MD Trade GmbH"},
  {icon: "/opennextlogo.png", url: "https://open-next.de", name: "Open Next GmbH"},
  {icon: "/fastsearchlogo.svg", url: "https://fastsearch.ch", name: "Fast Search AG"},

];

const LogoCard = ({ logoData }: { logoData: { icon: string; url: string; name: string } }) => (
  <a href={logoData.url} target="_blank" className="flex items-center px-8 2xl:px-12 gap-2 2xl:gap-[18px] shrink-0">
    <div className="">
      <img
        src={logoData.icon}
        alt={logoData.name}
        className="h-full"
      />
    </div>
  </a>
);

const AITools = () => {

  return (
    <div className="relative h-[80.88px] w-full mt-6 max-w-[1360px] px-6 mx-auto overflow-hidden">
      <div className="absolute top-0 left-0 w-[100px] xl:w-[267px] h-full bg-gradient-to-r from-[#0D0C14] to-[#0D0C14]/0 z-10" />
      <div className="absolute top-0 right-0 w-[100px] xl:w-[267px] h-full rotate-180 bg-gradient-to-r from-[#0D0C14] to-[#0D0C14]/0 z-10" />

      <div className="absolute top-[10px] left-0 h-[60px] flex w-max animationControl">
        {[...Array(6)].flatMap((_, i) =>
          logos.map((data, idx) => <LogoCard key={`${i}-${idx}`} logoData={data} />)
        )}
      </div>
    </div>
  );
};

export default AITools;
