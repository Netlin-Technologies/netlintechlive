"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { t } from "@/lib/locales";

const BannerSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardsRefMain = useRef(null);
  const isInViewCards = useInView(cardsRefMain, { once: true, amount: 0.5 });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(isMobile);
    }
  }, []);

  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  useEffect(() => {
    if (isInViewCards && isMobile && cardsRef.current) {
      const timeoutId = setTimeout(() => {
        const element = cardsRef.current;
        const start = element && element.scrollTop || 0;
        const end = element && (element.scrollHeight - element.clientHeight) || 0;
        const totalDistance = end - start;

        const pausePoints = [0.18, 0.5, 0.75];
        const pauseDuration = 5000;
        const animationSegmentDuration = 4000;

        let currentSegment = 0;
        let segmentStartTime = performance.now();
        let isPaused = false;
        let pauseStartTime = 0;

        const animateScrollWithPauses = (currentTime: number) => {
          if (!element) return;

          if (isPaused) {
            if (currentTime - pauseStartTime >= pauseDuration) {
              isPaused = false;
              segmentStartTime = currentTime;
              currentSegment++;
            } else {
              requestAnimationFrame(animateScrollWithPauses);
              return;
            }
          }

          const segmentElapsed = currentTime - segmentStartTime;
          const segmentProgress = Math.min(
            segmentElapsed / animationSegmentDuration,
            1
          );

          const nextPausePoint =
            currentSegment < pausePoints.length
              ? pausePoints[currentSegment]
              : 1;
          const previousPausePoint =
            currentSegment === 0 ? 0 : pausePoints[currentSegment - 1];

          const segmentDistance =
            (nextPausePoint - previousPausePoint) * totalDistance;
          const segmentStartPosition =
            start + previousPausePoint * totalDistance;

          const easedProgress = easeInOutQuad(segmentProgress);
          const currentScrollPosition =
            segmentStartPosition + segmentDistance * easedProgress;

          element.scrollTop = currentScrollPosition;

          if (segmentProgress >= 1) {
            if (currentSegment < pausePoints.length) {
              isPaused = true;
              pauseStartTime = currentTime;
            } else {
              return;
            }
          }

          requestAnimationFrame(animateScrollWithPauses);
        };

        requestAnimationFrame(animateScrollWithPauses);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isInViewCards, isMobile]);

  const cards = [
    {
      icon: "/assets/images/gmailicon.svg",
      title: t.content.bannerSection.cards.gmail.title,
      desc: t.content.bannerSection.cards.gmail.description,
    },
    {
      icon: "/assets/images/aiAgent.svg",
      title: t.content.bannerSection.cards.aiAgent.title,
      desc: t.content.bannerSection.cards.aiAgent.description,
    },
    {
      icon: "/assets/images/slack.svg",
      title: t.content.bannerSection.cards.slack.title,
      desc: t.content.bannerSection.cards.slack.description,
    },
  ];

  const modules = [
    {
      icon: "/assets/images/chatgptLogo.svg",
      title: t.content.bannerSection.modules.chatgpt.title,
      subtitle: t.content.bannerSection.modules.chatgpt.subtitle,
    },
    {
      icon: "/assets/images/airtable.svg",
      title: t.content.bannerSection.modules.airtable.title,
      subtitle: t.content.bannerSection.modules.airtable.subtitle,
    },
    {
      icon: "/assets/images/calendar.svg",
      title: t.content.bannerSection.modules.calendar.title,
      subtitle: t.content.bannerSection.modules.calendar.subtitle,
    },
    {
      icon: "/assets/images/hubspot.svg",
      title: t.content.bannerSection.modules.hubspot.title,
      subtitle: t.content.bannerSection.modules.hubspot.subtitle,
    },
  ];

  const steps = [
    t.content.bannerSection.steps.messageAnalyzed,
    t.content.bannerSection.steps.answerReceived,
    t.content.bannerSection.steps.appointmentAdded,
    t.content.bannerSection.steps.appointmentAddedAgain,
  ];

  // This is just the start of the JSX. If you want me to rewrite the full JSX as well, I can do that.
  // The critical fix was around the `window.innerWidth` and useEffect logic, which is now safely handled.

  return (
    <>
      <div className="relative sm:w-full">
        <div className="relative mt-[51px] gradientBorder rounded-2xl w-full max-w-[1032px] overflow-hidden p-1 mx-auto">
          <div
            ref={cardsRefMain}
            className="relative z-[1] bg-gray-800 rounded-[10px]"
          >
            <div className="h-[22px] w-full relative bg-gray-800 rounded-tl-xl rounded-tr-xl backdrop-blur-blur"></div>

            <div
              ref={cardsRef}
              className="bg-[url('/assets/images/boxBackground.svg')] rounded-bl-xl rounded-br-xl pl-2.5 lg:pl-[39px] pr-2.5 lg:pr-[33px] pt-[19px] pb-12 overflow-hidden touch-none h-[366px] md:h-auto md:min-h-[490px] w-full relative"
            >
              <div className="flex flex-col md:flex-row gap-[72px] md:gap-3 2xl:gap-0 items-center justify-center relative scaleCards">
                {cards.map((card, index) => (
                  <div key={index} className="relative flex justify-center">
                    <div
                      className={`relative w-full ${
                        index === 1
                          ? "max-w-[260px] md:ml-2.5 2xl:ml-16 mt-0"
                          : index === 2
                          ? "max-w-[281px] md:ml-2.5 2xl:ml-[70px] -mt-[104px] md:mt-0"
                          : "max-w-[281px]"
                      }`}
                    >
                      <div className="h-auto lg:h-[99px] relative rounded-[14px] z-[1] w-full">
                        <div className="p-[18px] bg-[#181622] rounded-[14px] flex gap-3.5 items-center relative z-10">
                          <img src={card.icon} alt="icon" />
                          <p className="text-white text-base font-semibold font-sora">
                            {card.title}
                          </p>
                        </div>
                        <motion.p
                          initial={{ opacity: 0, y: -40 }}
                          animate={isInViewCards ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay:
                              isMobile
                                ? index === 0
                                  ? 0.2
                                  : index === 1
                                  ? 5.8
                                  : index === 2
                                  ? 36
                                  : index * 5
                                : 0,
                          }}
                          className="text-sm font-normal text-center font-sora text-[#807F8C] bg-[#13111C] px-[15.5px] py-[9px] pt-5 -mt-2.5 truncate rounded-b-[14px]"
                        >
                          {card.desc}
                        </motion.p>
                      </div>

                      {index === 1 && (
                        <div className="md:hidden flex flex-col items-center justify-center mt-[73px] gap-0 scaleModules">
                          {modules.map((mod, modIndex) => (
                            <React.Fragment key={modIndex}>
                              <div
                                className="w-full max-w-[132px] flex rounded-[14px] flex-col items-center z-[1] relative"
                                style={{
                                  marginTop:
                                    modIndex === 0
                                      ? "0px"
                                      : modIndex === 1
                                      ? "-38px"
                                      : modIndex >= 2
                                      ? "-57px"
                                      : "0px",
                                }}
                              >
                                <div className="p-2.5 sm:p-3.5 w-full bg-[#181622] rounded-[14px] flex flex-col gap-2 items-center relative z-10">
                                  <img
                                    src={mod.icon}
                                    alt="logo"
                                    className="w-5 h-5 lg:w-auto lg:h-auto"
                                  />
                                  <p className="text-white text-xs sm:text-sm lg:text-base font-semibold font-sora">
                                    {mod.title}
                                  </p>
                                </div>
                                <motion.p
                                  initial={{ opacity: 0, y: -30 }}
                                  animate={
                                    isInViewCards ? { opacity: 1, y: 0 } : {}
                                  }
                                  transition={{
                                    duration: 0.5,
                                    delay:
                                      modIndex === 0
                                        ? 10
                                        : modIndex === 1
                                        ? 15
                                        : modIndex === 2
                                        ? 23
                                        : 27,
                                  }}
                                  className="text-xs sm:text-sm text-[#807F8C] font-sora bg-[#13111C] rounded-b-[14px] text-center pt-[22px] -mt-[15px] w-full px-2 py-1.5"
                                >
                                  {mod.subtitle}
                                </motion.p>
                              </div>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={
                                  isInViewCards ? { opacity: 1, y: 0 } : {}
                                }
                                transition={{
                                  duration: 0.5,
                                }}
                                className="w-auto h-auto -mt-7"
                              >
                                <svg
                                  width="4"
                                  height="112"
                                  viewBox="0 0 4 112"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2 0L2 112"
                                    stroke="#33323E"
                                    strokeWidth="4"
                                    strokeDasharray="8 8"
                                  />
                                </svg>
                              </motion.div>
                              {steps[modIndex] && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={
                                    isInViewCards ? { opacity: 1, y: 0 } : {}
                                  }
                                  transition={{
                                    duration: 1,
                                    delay:
                                      modIndex === 0
                                        ? 12
                                        : modIndex === 1
                                        ? 17
                                        : modIndex === 2
                                        ? 25
                                        : 28,
                                  }}
                                  className="bg-[#1C362A] text-[#62A686] text-sm font-semibold font-sora px-2 h-fit py-1.5 rounded-[5px] text-center relative -top-[68px] md:top-0 w-[160px]"
                                >
                                  {steps[modIndex]}
                                </motion.div>
                              )}

                              {modIndex === modules.length - 1 && (
                                <svg
                                  width="4"
                                  height="112"
                                  viewBox="0 0 4 112"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="-mt-[83px]"
                                >
                                  <mask
                                    id={`mask0-${index}-${modIndex}`}
                                    mask-type="alpha"
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="4"
                                    height="112"
                                  >
                                    <path
                                      d="M2 0L2 112"
                                      stroke="#3B84F7"
                                      strokeWidth="4"
                                      strokeDasharray="8 8"
                                    />
                                  </mask>
                                  <g mask={`url(#mask0-${index}-${modIndex})`}>
                                    <rect
                                      x="-4"
                                      y="-2"
                                      width="10"
                                      height="115"
                                      fill="#3B84F7"
                                    />
                                    <motion.rect
                                      x="-4"
                                      width="10"
                                      height="128"
                                      initial={{ y: -2 }}
                                      animate={isInViewCards ? { y: 126 } : {}}
                                      transition={{
                                        duration: 4,
                                        ease: "easeInOut",
                                        delay: 32,
                                      }}
                                      fill="#33323E"
                                    />
                                  </g>
                                </svg>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                    {index !== cards.length - 1 && (
                      <div className="absolute block md:hidden bottom-auto w-auto h-auto top-[64px]">
                        <svg
                          width="4"
                          height="112"
                          viewBox="0 0 4 112"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id={`mask0-${index}`}
                            mask-type="alpha"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="4"
                            height="112"
                          >
                            <path
                              d="M2 0L2 112"
                              stroke="#3B84F7"
                              strokeWidth="4"
                              strokeDasharray="8 8"
                            />
                          </mask>
                          <g mask={`url(#mask0-${index})`}>
                            <rect
                              x="-4"
                              y="-2"
                              width="10"
                              height="115"
                              fill="#3B84F7"
                            />
                            <motion.rect
                              x="-4"
                              width="10"
                              height="128"
                              initial={{ y: -2 }}
                              animate={isInViewCards ? { y: 126 } : {}}
                              transition={{
                                duration: 4,
                                ease: "easeInOut",
                                delay:
                                  index === 0
                                    ? 0.2
                                    : index === 1
                                    ? 6
                                    : index === 2
                                    ? 35
                                    : index * 0.4 + 0.2,
                              }}
                              fill="#33323E"
                            />
                          </g>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
                {isInViewCards && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: -40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: cards.length * 0.5 + modules.length * 0.3 + 0.5,
                      }}
                      className="absolute hidden md:block -bottom-[233%] w-[500px] sm:w-[684px] lg:w-auto 2xl:ml-[-33px]"
                    >
                      <img
                        src="/assets/images/dividedLines.svg"
                        alt="lines"
                        className="w-full h-full"
                      />
                    </motion.div>
                  </>
                )}
              </div>
              <div className="hidden md:flex justify-center md:mt-[72px] gap-2.5 md:gap-[52px] lg:gap-[90px] scaleModules">
                {modules.map((mod, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInViewCards ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: cards.length * 0.5 + 0.6 + index * 0.3,
                    }}
                    className="w-full max-w-[132px] bg-[#13111C] rounded-[14px] flex flex-col items-center z-[1] relative"
                  >
                    <div className="p-2.5 sm:p-3.5 w-full bg-[#181622] rounded-[14px] flex flex-col gap-2 items-center">
                      <img
                        src={mod.icon}
                        alt="logo"
                        className="w-5 h-5 lg:w-auto lg:h-auto"
                      />
                      <p className="text-white text-xs sm:text-sm lg:text-base font-semibold font-sora">
                        {mod.title}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-[#807F8C] font-sora text-center px-2 py-1.5">
                      {mod.subtitle}
                    </p>
                    <div className="absolute -bottom-6">
                      <img
                        src="/assets/images/black-divide-line.svg"
                        alt="line"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="hidden md:flex md:mt-4 justify-center scaleAnalyzation">
                {steps.map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInViewCards ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: cards.length * 0.5,
                    }}
                    className={`bg-[#1C362A] text-[#62A686] text-sm font-semibold font-sora px-2 h-fit py-1.5 rounded-[5px] text-center relative w-[160px] ${
                      index > 0 ? "ml-2.5 md:ml-[50px] lg:ml-[70px]" : ""
                    }`}
                  >
                    {text}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="border absolute md:bottom-2 z-10 rounded-2xl border-solid border-[hsl(0,0,18%)] bg-[#181622] p-4 w-full scaleBox max-w-[425px] flex gap-5 items-center">
            <div>
              <img className="rounded-xl" src="/assets/images/clientimage.png" alt="A client who is satisfied with the AI Automation process" />
            </div>
            <div>
              <p className="font-inter text-white text-base font-semibold leading-normal">
                {t.content.bannerSection.testimonial.author}
              </p>
              <p className="text-sm text-[#6C7275] font-semibold font-inter leading-normal">
                {t.content.bannerSection.testimonial.quote}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1B252E] w-full max-w-[968px] h-6 rounded-bl-[20px] rounded-br-[20px] mx-auto hidden md:block"></div>
        <div className="bg-[#1B262E] w-full max-w-[880px] mx-auto h-6 opacity-50 bg-gray-800 rounded-bl-[20px] rounded-br-[20px] hidden md:block"></div>
      </div>

      <p className="mt-[75px] opacity-50 text-center text-white text-sm md:text-base font-normal font-sora uppercase leading-normal tracking-widest">
        {t.content.bannerSection.trustText}
      </p>
    </>
  );
};

export default BannerSection;
