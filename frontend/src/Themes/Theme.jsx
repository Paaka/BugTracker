import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        white: "#FFFDF9",
        persianGreen: "#06B49A",
        btnBlue:"#6dabe4",
        lightBlue: "#AFDBD2",
        onyx: "#36313D"
      },
      fonts:{
        montserrat:{
            name:'Montserrat',
            serif:'sans-serif',
            weights:{
                extraLight:200,
                light:300,
                regular:400,
                medium:500,
                semiBold:600,
                bold:700,
            }
        },
        raleway:{
            name:'Raleway, sans-serif',
            weights:{
                light:300,
                regular:400,
                medium:500,
            },
        },
      },
      fontSizes: {
        small: "1.4em",
        medium: "1.8em",
        large: "2.2em",
        extraLarge: "3em"
      }, 
      fontWeights: {
            extraLight:200,
            light:300,
            regular:400,
            medium:500,
            semiBold:600,
            bold:700,
      },
};

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;