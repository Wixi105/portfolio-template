/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,html}"],
  theme: {
    extend: {
      screens:{
        "xs": "375px"
      },
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        wixi: "#0f141b",
        'primary-50': 'rgb(var(--primary-50))',
        'primary-100': 'rgb(var(--primary-100))',
        'primary-200': 'rgb(var(--primary-200))',
        'primary-300': 'rgb(var(--primary-300))',
        'primary-400': 'rgb(var(--primary-400))',
        'primary-500': 'rgb(var(--primary-500))',
        'primary-600': 'rgb(var(--primary-600))',
        'primary-700': 'rgb(var(--primary-700))',
        'primary-800': 'rgb(var(--primary-800))',
        'primary-900': 'rgb(var(--primary-900))',
        'primary-950': 'rgb(var(--primary-950))',
        'surface-0': 'rgb(var(--surface-0))',
        'surface-50': 'rgb(var(--surface-50))',
        'surface-100': 'rgb(var(--surface-100))',
        'surface-200': 'rgb(var(--surface-200))',
        'surface-300': 'rgb(var(--surface-300))',
        'surface-400': 'rgb(var(--surface-400))',
        'surface-500': 'rgb(var(--surface-500))',
        'surface-600': 'rgb(var(--surface-600))',
        'surface-700': 'rgb(var(--surface-700))',
        'surface-800': 'rgb(var(--surface-800))',
        'surface-900': 'rgb(var(--surface-900))',
        'surface-950': 'rgb(var(--surface-950))'
      },
      typography: ({ theme }) => ({
        white: {
          css: {
            '--tw-prose-body': theme('colors.gray.200'),
            '--tw-prose-headings': theme('colors.gray.200'),
            '--tw-prose-lead': theme('colors.gray.300'),
            '--tw-prose-links': theme('colors.green.500'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.gray.400'),
            '--tw-prose-bullets': theme('colors.gray.600'),
            '--tw-prose-hr': theme('colors.gray.700'),
            '--tw-prose-quotes': theme('colors.gray.100'),
            '--tw-prose-quote-borders': theme('colors.gray.700'),
            '--tw-prose-captions': theme('colors.gray.400'),
            '--tw-prose-code': theme('colors.gray.200'),
            '--tw-prose-pre-code': theme('colors.gray.200'),
            '--tw-prose-pre-bg': theme('colors.gray.800'),
            '--tw-prose-th-borders': theme('colors.gray.700'),
            '--tw-prose-td-borders': theme('colors.gray.600'),
            '--tw-prose-invert-body': theme('colors.gray.800'),
            '--tw-prose-invert-headings': theme('colors.black'),
            '--tw-prose-invert-lead': theme('colors.gray.600'),
            '--tw-prose-invert-links': theme('colors.black'),
            '--tw-prose-invert-bold': theme('colors.black'),
            '--tw-prose-invert-counters': theme('colors.gray.500'),
            '--tw-prose-invert-bullets': theme('colors.gray.300'),
            '--tw-prose-invert-hr': theme('colors.gray.200'),
            '--tw-prose-invert-quotes': theme('colors.gray.800'),
            '--tw-prose-invert-quote-borders': theme('colors.gray.200'),
            '--tw-prose-invert-captions': theme('colors.gray.500'),
            '--tw-prose-invert-code': theme('colors.black'),
            '--tw-prose-invert-pre-code': theme('colors.gray.200'),
            '--tw-prose-invert-pre-bg': 'rgb(255 255 255 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.gray.300'),
            '--tw-prose-invert-td-borders': theme('colors.gray.200'),
          },
        },
      }),
    },
  },
  plugins: [
      require('@tailwindcss/typography')
  ],
};

// npx tailwindcss -i ./src/assets/main.css -o ./src/assets/output.css --watch