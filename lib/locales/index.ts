// Placeholder modularization entry point.
// TODO: Incrementally move large page-specific blocks from ../locales.ts into
// separate files (e.g. customerService.ts, marketing.ts) and compose here.
// For now we just re-export existing symbols to keep backward compatibility.
// Transitional re-export plus modular augmentation.
export * from '../locales';

import { homeEn } from './home.en';
import { homeDe } from './home.de';

// Helper to deep merge minimal modular chunks back into the main translation object at runtime.
export function withModularAdditions<T extends any>(base: T, locale: string): T {
	const patch = locale === 'de' ? homeDe : homeEn;
	if (base && (base as any).content) {
		(base as any).content.homeHero = {
			...(patch as any).homeHero,
			...((base as any).content.homeHero || {})
		};
	}
	return base;
}