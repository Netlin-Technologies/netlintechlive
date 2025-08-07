"use client";

import { ReactNode, useState, useTransition } from "react";

type Option = {
  value: string;
  label: string;
};

type Props = {
  children: ReactNode; // children will be a list of <option> elements
  defaultValue: string;
  label: string;
  onLocaleChange: (locale: string) => void;
};

const getSymbol: Record<string, string> = {
  en: "🇺🇸 EN",
  de: "🇩🇪 DE",
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
  onLocaleChange,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  // Extract options from children
  const options: Option[] = Array.isArray(children)
    ? children.map((child: any) => ({
        value: child.props.value,
        label: child.props.children,
      }))
    : [];

  function handleSelect(opt: Option) {
    setSelected(opt.value);
    setOpen(false);
    startTransition(() => {
      onLocaleChange(opt.value);
    });
  }

  return (
    <div
      className={`relative font-sora text-white uppercase text-xs md:text-base font-semibold bg-[#181622] rounded-[5px] md:rounded-[10px] w-fit ${
        isPending ? "transition-opacity opacity-30 pointer-events-none" : ""
      }`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <p className="sr-only">{label}</p>
      <div className="p-2.5 cursor-pointer"> {getSymbol[selected]} </div>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-0">
          <ul className=" bg-[#181622] z-10 mt-1 rounded-md border-none overflow-hidden shadow-md">
            {options
              .filter((opt) => opt.value !== selected)
              .map((opt) => (
                <li
                  key={opt.value}
                  onClick={() => handleSelect(opt)}
                  className={`px-1 justify-center py-2 cursor-pointer hover:bg-gray-700 flex ${
                    selected === opt.value ? "bg-gray-800" : ""
                  }`}
                >
                  {opt.label}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
