/* eslint-disable no-multi-spaces, key-spacing */

module.exports = {
    mode: 'jit',
    content: [
        'src/**/*.jsx',
    ],
    theme: {
        fontFamily: {
            display: ['Poppins', 'Helvetica', 'sans-serif'],
            body: ['Poppins', 'Helvetica', 'sans-serif'],
        },
        fontSize: {
            xs: ['0.75rem',      '1.5'],
            sm: ['0.875rem',     '1.57'],
            base: ['1rem',       '1.63'],
            lg: ['1.125rem',     '1.61'],
            xl: ['1.25rem',      '1.2'],
            '2xl': ['1.5rem',    '1.25'],
            '3xl': ['1.875rem',  '1.25'],
            '4xl': ['2.5rem',   '1.25'],
            '5xl': ['2.5rem',      '1.25'],
        },
        extend: {
            colors: {
              gray: {
                100: '#E7F0FC',
                300: '#565656',
                400: '#757575',
                500: '#959595',
                600: '#A4A4A4',
              },
              blue: {
                100: '#F4F9FF',
                500: '#2639ED',
              },
            },
            margin: {
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
                '-1/12': '-8.333333%',
                '-2/12': '-16.666667%',
                '-3/12': '-25%',
                '-4/12': '-33.333333%',
                '-5/12': '-41.666667%',
                '-6/12': '-50%',
                '-7/12': '-58.333333%',
                '-8/12': '-66.666667%',
                '-9/12': '-75%',
                '-10/12': '-83.333333%',
                '-11/12': '-91.666667%',
            },
            flex: {
                '1/1': '0 0 100%',
                '1/12': '0 0 8.333333%',
                '2/12': '0 0 16.666667%',
                '3/12': '0 0 25%',
                '4/12': '0 0 33.333333%',
                '5/12': '0 0 41.666667%',
                '6/12': '0 0 50%',
                '7/12': '0 0 58.333333%',
                '8/12': '0 0 66.666667%',
                '9/12': '0 0 75%',
                '10/12': '0 0 83.333333%',
                '11/12': '0 0 91.666667%',
            },
            minWidth: {
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
            },
        },
    },
    plugins: [],
};
