import { t } from '@/lib/locales';
import { LocalizedLink } from '../LocalizedLink';

const HeroSection = () => {
  // Defensive programming: ensure all required strings exist before using split
  const subtitle = t.content?.homeHero?.subtitle || '';
  const savings = t.content?.homeHero?.savings || '';
  const reduction = t.content?.homeHero?.reduction || '';
  
  return (
    <div className="pt-7 xl:pt-12 w-full max-w-[992px] mx-auto relative">
      <div className="relative z-10">
        <h1 className="text-center justify-start text-white text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-semibold font-sora leading-normal xl:leading-[72px]">
          {t.content?.homeHero?.title || ''}
        </h1>
        <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[522px] mx-auto">
          <img src="/assets/images/curveLine.svg" alt="line" />
        </div>
        <div className=" mt-3 pt-px text-center justify-start text-base md:text-xl xl:text-2xl font-sora leading-normal xl:leading-8">
          <span className="text-[#C6D5DD] font-normal">
            {savings && subtitle ? subtitle.split(savings)[0] : subtitle}
          </span>
          <span className="text-[#C6D5DD] font-bold">{savings}</span>
          <span className="text-[#C6D5DD] font-normal">
            {savings && reduction && subtitle ? subtitle.split(savings)[1]?.split(reduction)[0] : ''}
          </span>
          <span className="text-[#C6D5DD] font-bold">{reduction}</span>
          <span className="text-[#C6D5DD] font-normal">
            {reduction && subtitle ? subtitle.split(reduction)[1] : ''}
          </span>
        </div>
        <div className="gap-4 mt-8 flex flex-wrap md:gap-8 items-center justify-center">
          <LocalizedLink
            route="contact"
            className="px-4 h-10 py-2 pt-2.5 bg-gradient-to-r from-blue-500 to-blue-800 rounded shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-blue-400 inline-flex justify-center items-center gap-2.5 cursor-pointer transition-all duration-300 hover:brightness-120"
          >
            <p className="justify-start text-white text-lg font-semibold font-sora leading-normal">
              {t.content.homeHero.automateButton}
            </p>
          </LocalizedLink>
          <LocalizedLink
            route="automation"
            className="px-4 h-10 py-2 pt-2.5 bg-gradient-to-r from-neutral-500/60 to-neutral-400/60 rounded shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-neutral-400/60 inline-flex justify-center items-center gap-2.5 cursor-pointer transition-all duration-300 hover:brightness-120"
          >
            <p className="justify-start text-white text-lg font-semibold font-sora leading-normal">
              {t.content.homeHero.howItWorksButton}
            </p>
          </LocalizedLink>
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#003066] to-[#005ED3] h-[250px] absolute bottom-0 w-full blur-[300px]"></div>
      <div className="bg-gradient-to-br from-[#003066] to-[#005ED3] absolute w-[500px] h-[300px] md:h-[200px] -bottom-[296px] md:-bottom-[58px] right-0 rounded-full blur-[86px] z-auto md:z-[5]"></div>
    </div>
  );
};

export default HeroSection;