import { createTheme } from '@mui/material/styles';
import { primaryColor, secondaryColor, tertiaryColor,quaternaryColor, quinaryColor } from './Colors'

const theme = createTheme({
    palette: {
      primary: {
        main: secondaryColor,
        context: primaryColor
      },
      secondary: {
        light: secondaryColor,
        main: quinaryColor,
        contrastText: tertiaryColor,
      },
      text: {
        primary: quinaryColor
    }
    },
  });
  
  export default theme;