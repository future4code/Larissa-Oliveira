import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secondaryColor, tertiaryColor,quaternaryColor, quinaryColor } from './Colors'

const theme = createMuiTheme({
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