/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'rtf-blue': '#00f3ff',
                'rtf-green': '#00ff9d',
                'rtf-dark': '#0a0a0a',
                'rtf-card': '#1a1a1a',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // We might need to import fonts later
            }
        },
    },
    plugins: [],
}
