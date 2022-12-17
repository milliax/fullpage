/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            backgroundSize: {
                "400": "400%"
            },
            keyframes: {
                "move-bg": {
                    "0%, 100%": {
                        "background-postion": "0%"
                    },
                    "50%": {
                        "background-position": "50%"
                    },
                }
            }

        },
    },
    plugins: [],
}
