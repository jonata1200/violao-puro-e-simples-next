import type { Config } from "tailwindcss";
import { colors } from "./src/design-system/tokens/colors";
import { spacing } from "./src/design-system/tokens/spacing";
import { typography } from "./src/design-system/tokens/typography";

// Gerar safelist dinamicamente para gradientes usados em BenefitsSection
const gradientColors = ['blue', 'purple', 'green', 'primary'] as const;
const generateSafelist = () => {
	const safelist: string[] = [];
	gradientColors.forEach(color => {
		safelist.push(`from-${color}-500/20`, `to-${color}-600/20`);
	});
	return safelist;
};

// Converter cores numéricas para formato de string (Tailwind requer strings como chaves)
const convertColorKeys = (colorObj: Record<number | string, string>) => {
	const result: Record<string, string> = {};
	Object.entries(colorObj).forEach(([key, value]) => {
		result[String(key)] = value;
	});
	return result;
};

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/design-system/**/*.{js,ts,jsx,tsx,mdx}",
	],
	safelist: [
		// Classes de gradiente usadas dinamicamente em BenefitsSection
		...generateSafelist(),
	],
	theme: {
    	extend: {
    		backgroundImage: {
    			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		// Usar spacing do design system
    		spacing: spacing,
    		// Usar tipografia do design system
    		fontFamily: typography.fontFamily,
    		fontSize: typography.fontSize,
    		fontWeight: typography.fontWeight,
    		lineHeight: typography.lineHeight,
    		letterSpacing: typography.letterSpacing,
    		colors: {
    			// Cores do design system (convertidas para formato Tailwind)
    			primary: {
    				...convertColorKeys(colors.primary),
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			success: convertColorKeys(colors.success),
    			warning: convertColorKeys(colors.warning),
    			error: convertColorKeys(colors.error),
    			info: convertColorKeys(colors.info),
    			gray: convertColorKeys(colors.gray),
    			// Variáveis CSS do tema (necessárias para sistema de temas)
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
export default config;