module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            minWidth: {
                15: '15em'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
