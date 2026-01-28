/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                shopee: {
                    orange: '#ee4d2d',
                    'orange-dark': '#f05d40',
                    'orange-light': '#ffedeb',
                }
            },
        },
    },
    plugins: [],
}