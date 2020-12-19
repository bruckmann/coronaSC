import React from 'react';
import { HeaderDiv } from './styles';
import bandeira from '../../assets/sc.png';

const Header = () => (
  <HeaderDiv>
    <h1>CoronaSC</h1>
    <img src={bandeira} alt="Bandeira do estado de Santa Catarina" />
  </HeaderDiv>
);

export default Header;
