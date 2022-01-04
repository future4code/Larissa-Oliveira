import { createTheme } from '@mui/material/styles';
import { primaryColor, secondaryColor, tertiaryColor,quaternaryColor, quinaryColor } from './Colors'

const theme = createTheme({
    palette: {
      primary: {
        main: secondaryColor,
        context: primaryColor
        
      },
      secondary: {
        light: quaternaryColor,
        main: quaternaryColor,
        context: quaternaryColor,
        contrastText: quaternaryColor,
      },
      text: {
        primary: quaternaryColor,
    }
    },
  });
  
  export default theme;