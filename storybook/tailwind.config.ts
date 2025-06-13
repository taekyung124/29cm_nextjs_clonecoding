// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./.storybook/**/*.{ts,js,tsx,jsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-geist-sans)', 'sans-serif'],
				mono: ['var(--font-geist-mono)', 'monospace'],
			},
		},
	},
	plugins: [],
};

export default config;
