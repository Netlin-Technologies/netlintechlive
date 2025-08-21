"use client";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { t } from "@/lib/locales";

// fewer columns to prevent overflow and overlap
const COLS_DESKTOP = 28;
const COLS_MOBILE = 24;

// ---------- building blocks ----------
const FlapDigit = ({ value, delay = 0 }: { value: string; delay?: number }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldAnimate(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="flap-char-container overflow-hidden relative w-[28px] md:w-[32px] lg:w-[38px] xl:w-[42px] h-[44px] md:h-[48px] xl:h-[56px] text-lg md:text-xl xl:text-[30px] bg-gradient-to-br from-[#1a1925] to-[#100F17] border border-[#2C3146] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora shadow-lg hover:shadow-xl hover:border-[#4a4e6b] transition-all duration-300 hover:scale-105"
      style={{ perspective: "800px" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${value}-${delay}`}
          initial={shouldAnimate ? { y: "-100%", opacity: 0, rotateX: -90 } : { y: "0%", opacity: 1, rotateX: 0 }}
          animate={{ y: "0%", opacity: 1, rotateX: 0 }}
          exit={{ y: "100%", opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 12 }}
          className="absolute w-full h-full flex items-center justify-center md:pt-[2px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {value}
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[10px]" />
    </div>
  );
};

function padRow(cols: number): string[] {
  return Array(cols).fill(" ");
}
function placeAt(target: string[], startCol: number, seq: string[]) {
  for (let i = 0; i < seq.length && startCol + i < target.length; i++) {
    target[startCol + i] = seq[i];
  }
}
function placeAtRight(target: string[], endCol: number, seq: string[]) {
  const start = Math.max(0, endCol - seq.length + 1);
  for (let i = 0; i < seq.length && start + i < target.length; i++) {
    target[start + i] = seq[i];
  }
}

const Row = ({
  cols,
  chars,
  delayStart = 0,
  delayStep = 35,
  rowRef,
}: {
  cols: number;
  chars: string[];
  delayStart?: number;
  delayStep?: number;
  rowRef?: React.RefObject<HTMLDivElement>;
}) => {
  const cells = useMemo(() => {
    const out = padRow(cols);
    for (let i = 0; i < Math.min(cols, chars.length); i++) out[i] = chars[i];
    return out;
  }, [chars, cols]);

  return (
    <div
      ref={rowRef}
      className="grid gap-2 justify-center px-2"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, auto))` }}
    >
      {cells.map((ch, i) => (
        <FlapDigit key={i} value={ch} delay={delayStart + i * delayStep} />
      ))}
    </div>
  );
};

// ---------- Cards ----------
const MetricCard = ({
  title,
  value,
  unit,
  delay = 0,
  description,
}: {
  title: string;
  value: string;
  unit: string;
  delay?: number;
  description?: string;
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      className="relative bg-gradient-to-br from-[#1a1925] to-[#100F17] border border-[#2C3146] rounded-2xl p-6 hover:border-[#4a4e6b] transition-all duration-300 hover:shadow-xl hover:scale-105 group"
    >
      <div className="text-center">
        <h3 className="text-[#807F8C] text-sm font-medium mb-2 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-3xl font-bold text-white">{value}</span>
          <span className="text-lg text-blue-400 font-semibold">{unit}</span>
        </div>
        {description && (
          <p className="text-xs text-[#807F8C] group-hover:text-white/80 transition-colors duration-300">
            {description}
          </p>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    </motion.div>
  );
};

// ---------- Main ----------
const BannerInfo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);
  const [number6, setNumber6] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const targetValues = {
    num1: 847532,
    num2: 318,
    num3: 98374,
    num4: 847532,
    num5: 318,
    num6: 98374,
  };

  useEffect(() => {
    setIsClient(true);
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted) {
          setIsVisible(true);
          setAnimationStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isClient, animationStarted]);

  useEffect(() => {
    if (!isVisible || !isClient) return;

    const delay = 800;
    const duration = 2500;
    let rafId: number | null = null;
    let start: number | null = null;

    const timeoutId = setTimeout(() => {
      const step = (ts: number) => {
        if (start === null) start = ts;
        const elapsed = ts - start;
        const p = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);

        setNumber1(Math.floor(targetValues.num1 * eased));
        setNumber2(Math.floor(targetValues.num2 * eased));
        setNumber3(Math.floor(targetValues.num3 * eased));
        setNumber4(Math.floor(targetValues.num4 * eased));
        setNumber5(Math.floor(targetValues.num5 * eased));
        setNumber6(Math.floor(targetValues.num6 * eased));

        if (p < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isVisible, isClient]);

  const formatNumber = useCallback((num: number, target: number) => {
    const formatted = num.toLocaleString("de-DE");
    const targetLength = target.toString().length;
    const currentLength = formatted.replace(/[.,]/g, "").length;
    const zerosNeeded = Math.max(0, targetLength - currentLength);
    return "0".repeat(zerosNeeded) + formatted;
  }, []);

  const formatted1 = formatNumber(number1, targetValues.num1);
  const formatted2 = formatNumber(number2, targetValues.num2);
  const formatted3 = formatNumber(number3, targetValues.num3);
  const formatted4 = formatNumber(number4, targetValues.num4);
  const formatted5 = formatNumber(number5, targetValues.num5);
  const formatted6 = formatNumber(number6, targetValues.num6);

  if (!isClient) return null;

  const cols = isMobile ? COLS_MOBILE : COLS_DESKTOP;

  // anchors
  const leftStart = 1;             // start label near left edge
  const rightEnd = cols - 2;       // keep 2 cells as right padding

  const word1 = (t.content.bannerInfo.animatedWords.word1 || "SAVED").split("");
  const word2 = (t.content.bannerInfo.animatedWords.word2 || "WORKFLOWS").split("");
  const word3 = (t.content.bannerInfo.animatedWords.word3 || "RESOLVED").split("");

  const num1Arr = formatted4.split("").concat(["", "", "€", ""]);
  const num2Arr = formatted5.split("").concat(["", "S", "t", "k"]);
  const num3Arr = formatted6.split("").concat(["", "","h",""]);

  const makeRow = (leftText: string[], rightText: string[]) => {
    const row = padRow(cols);
    placeAt(row, leftStart, leftText);
    placeAtRight(row, rightEnd, rightText);
    return row;
  };

  const rowEmptyTop = padRow(cols);
  const row1 = makeRow(word1, num1Arr);
  const row2 = makeRow(word2, num2Arr);
  const row3 = makeRow(word3, num3Arr);
  const rowEmptyBottom = padRow(cols);

  return (
    <div ref={sectionRef} className="mt-10 md:mt-20 xl:mt-[140px] overflow-hidden">
      {/* header */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-10"
      >
        <motion.h4
          className="text-white lg:text-5xl text-3xl font-semibold font-sora px-5 mb-4"
          initial={{ scale: 0.9 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t.content.bannerInfo.title}
        </motion.h4>
        <motion.p
          className="lg:text-2xl text-lg font-normal font-sora text-[#807F8C] px-5"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t.content.bannerInfo.subtitle}
        </motion.p>

        <motion.div
          className="flex justify-center items-center gap-4 mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">{t.content.bannerInfo.ticker1}</span>
          </div>
          <div className="w-1 h-4 bg-[#2C3146]"></div>
          <div className="flex items-center gap-2 text-blue-400">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">99+ {t.content.bannerInfo.ticker2}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* quick stats for mobile */}
      <div className="lg:hidden px-5 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard title="Money Saved" value={formatted4} unit="€" delay={0.6} description="Total cost savings achieved" />
          <MetricCard title="Workflows Automated" value={formatted5} unit="St." delay={0.7} description="Processes streamlined" />
          <MetricCard title="Time Resolved" value={formatted6} unit="h  " delay={0.8} description="Hours saved monthly" />
        </div>
      </div>

      {/* flip board */}
      <div className="relative w-fit mx-auto mt-6 hidden lg:block">
        <div className="flex flex-col font-sora w-full gap-4"> {/* consistent vertical gap */}
          <Row cols={cols} chars={rowEmptyTop} delayStart={0} delayStep={12} />
          <Row cols={cols} chars={row1} delayStart={400} delayStep={22} />
          <Row cols={cols} chars={row2} delayStart={800} delayStep={22} />
          <Row cols={cols} chars={row3} delayStart={1200} delayStep={22} />
          <Row cols={cols} chars={rowEmptyBottom} delayStart={1500} delayStep={12} />
        </div>

        {/* side fades, thinner and non-blocking */}
        <div className="pointer-events-none absolute hidden lg:block -top-4 -left-[24px] w-8 lg:w-[96px] 2xl:w-[160px] h-full min-h-[320px] bg-gradient-to-r from-[#0D0C14] via-[#0D0C14] to-transparent blur-[14px] md:blur-[18px] xl:blur-[26px] 2xl:blur-[18px] z-10" />
        <div className="pointer-events-none absolute hidden lg:block -top-4 -right-[24px] w-8 lg:w-[96px] 2xl:w-[160px] h-full min-h-[320px] rotate-180 bg-gradient-to-r from-[#0D0C14] via-[#0D0C14] to-transparent blur-[14px] md:blur-[18px] xl:blur-[26px] 2xl:blur-[18px] z-10" />
      </div>

      {/* CTA */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="text-center mt-12 px-5 hidden"
      >
        <p className="text-[#807F8C] text-lg mb-6">Ready to see these results for your business?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
          >
            Get Your Free Analysis
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-[#2C3146] text-white font-semibold rounded-xl hover:border-[#4a4e6b] hover:bg-[#1a1925] transition-all duration-300"
          >
            View Case Studies
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default BannerInfo;
