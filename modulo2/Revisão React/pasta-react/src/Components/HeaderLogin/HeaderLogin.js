import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './Styled';
import { goToReceitas, goToLogin } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'

import logo2 from '../../Assets/Logo2.png'
import { LogoImage, LogoImage2 } from './Styled'


const HeaderLogin = () => {
  const history = useHistory()
  return (
    <AppBar position="static">
      <StyledToolbar>
        <LogoImage2 src={logo2}  onClick={() => goToReceitas(history)} />
        <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default HeaderLogin