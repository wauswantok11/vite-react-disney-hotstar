export default {
    content: [
        "./index.html",
        ["./src/**/*.{js,ts,jsx,tsx}"],
    ],
    theme: {
        extends: {},
    },
    plugins: [
        require('tailwindcss-no-scrollbar')
    ],
}