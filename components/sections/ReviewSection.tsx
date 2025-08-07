"use client";
import { useRef } from "react";
import { t } from '@/lib/locales';

const ReviewCard = ({
  name,
  text,
  image,
  onHoverStart,
  onHoverEnd,
}: {
  name: string;
  text: string;
  image: string;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) => (
  <>
    <div
      className="shrink-0 border border-[#282828] rounded-[14px] w-[503px] h-[240px] bg-[#13111C] mx-3 cursor-pointer overflow-hidden"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <div className="border-b border-[#282828] px-6 py-4 flex gap-3.5 items-center bg-[#181622]">
        <img className="w-8 h-8 rounded-full" src={image} alt="profile" />
        <p className="text-white text-lg font-semibold font-sora">
          {name}
        </p>
      </div>
      <div className="px-6 py-5 pt-[25px]">
        <p className="text-lg font-sora text-[#807F8C] leading-6">{text}</p>
      </div>
    </div>
    <svg
      width="76"
      height="5"
      viewBox="0 0 76 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.5"
        y1="2.25"
        x2="75.5"
        y2="2.25"
        stroke="#33323E"
        strokeWidth="4"
        strokeDasharray="8 8"
      />
    </svg>
  </>
);

const ReviewSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const pauseAnimation = () => {
    containerRef.current?.classList.add("paused");
  };

  const resumeAnimation = () => {
    containerRef.current?.classList.remove("paused");
  };

  return (
    <section className="xl:m-36 m-32">
      <h2 className="font-sora font-semibold text-white text-center text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl leading-normal mb-5 md:mb-[42px]">
        {t.content.reviews.title}
      </h2>
      <div className=" overflow-hidden relative">
        <div className="relative h-[240px] w-full">
          <div className="absolute top-0 left-0 w-15 sm:w-30 lg:w-[267px] h-full bg-gradient-to-r from-[#0D0C14] to-[#0D0C14]/0 z-10" />
          <div className="absolute top-0 right-0 w-15 sm:w-30 lg:w-[267px] h-full rotate-180 bg-gradient-to-r from-[#0D0C14] to-[#0D0C14]/0 z-10" />

          <div
            ref={containerRef}
            className="flex w-max items-center animationControl2"
          >
            {[...Array(9)].flatMap((_, i) =>
              t.content.reviews.items.map((review, idx) => (
                <ReviewCard
                  key={`${review.text}${i}-${idx}`}
                  name={review.name}
                  text={review.text}
                  image={review.image}
                  onHoverStart={pauseAnimation}
                  onHoverEnd={resumeAnimation}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;