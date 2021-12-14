import React from 'react';
import theme from './Constants/Theme';
import { ThemeProvider } from '@material-ui/core/styles'
import Routers from './Router/Routers'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
