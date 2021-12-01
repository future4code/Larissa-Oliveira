import React from 'react';
import {HeaderContainer, Logo, Icon} from './Styled'
import peopleIcon from '../../img/people.png'
import logo from '../../img/logo.png'

export default function Header(props) {
  return (
      <HeaderContainer page={props.myPage}>
        <Logo src={logo}/>
        <Icon src={peopleIcon} onClick={props.switchPages}/>
      </HeaderContainer>
  );
}