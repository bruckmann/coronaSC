import React from 'react';
import { FcLike } from 'react-icons/fc';
import { Container } from './styles';

const Footer = () => (
  <Container>
    <p>
      Feito com
      {' '}
      <FcLike />
      {' '}
      por
      {' '}
      <strong>Felipe Brückmann</strong>
    </p>
  </Container>
);

export default Footer;
