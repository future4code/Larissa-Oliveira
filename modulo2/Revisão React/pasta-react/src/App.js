import React, { useState } from 'react';
import theme from './Constants/Theme';
import { ThemeProvider } from '@material-ui/core/styles'
import Routers from './Router/Routers'
import Header from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';



const App = () => {

  const token = localStorage.getItem('token')
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
        <Routers setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
