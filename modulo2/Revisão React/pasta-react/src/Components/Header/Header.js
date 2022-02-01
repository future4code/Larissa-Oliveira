import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './Styled';
import { goToHome, goToLogin } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import logo2 from '../../Assets/Logo2.png'
import { LogoImage2 } from './Styled'


const Header = ({rightButtonText, setRightButtonText}) => {
  const token = localStorage.getItem("token")
  const history = useHistory()
  
  
  const logout =() => {
    localStorage.removeItem("token")
  }
  
  const rightButtonAction = () => {
    if(token){
      logout()
      setRightButtonText("Login")
      goToLogin(history)
    }else{
      goToLogin(history)
    }
  }
  return (
    <AppBar position="static">
      <StyledToolbar>
        <LogoImage2 src={logo2} onClick={() => goToHome(history)} />
        <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header