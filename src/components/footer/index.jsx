import React from 'react';
import { FcLike } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
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
      ,
      {' '}
      <a target="__blank" href="https://github.com/bruckmann/coronaSC">
        contribua com este projeto
        {' '}
        <GoMarkGithub />

      </a>
    </p>
  </Container>
);

export default Footer;
