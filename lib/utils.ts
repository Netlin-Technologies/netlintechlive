import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSiteUrl(locale: string | undefined) {
  const lc = (locale || 'en').toLowerCase()
  return lc === 'de' ? 'https://netlintech.de' : 'https://netlintech.com'
}