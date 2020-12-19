import React from 'react';
import Header from '../../components/header';
import Jumbotron from '../../components/jumbtron';
import Card from '../../components/card';
import Footer from '../../components/footer';

import { Container } from './styles';

const Home = () => (
  <>
    <Header />
    <Jumbotron />
    <Container>
      <Card infos="Número de casos confirmados" />
      <Card infos="Número de mortes" />
      <Card infos="Número de casos suspeitos" />
    </Container>
    <Footer />
  </>
);

export default Home;
