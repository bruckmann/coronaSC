import React, { Component } from 'react';
import Header from '../../components/header';
import Jumbotron from '../../components/jumbtron';
import Card from '../../components/card';
import Footer from '../../components/footer';
import covidAPI from '../../services/covidAPI';

import { Container } from './styles';

export default class Home extends Component {
  state = {
    confirmedCases: '',
    deathNumber: '',
    suspectCases: '',
  }

  componentDidMount() {
    this.getCovidData();
  }

  async getCovidData() {
    try {
      const request = await covidAPI.get('/uf/sc');
      this.setState({
        deathNumber: request.data.deaths,
        confirmedCases: request.data.cases,
        suspectCases: request.data.suspects,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { confirmedCases, suspectCases, deathNumber } = this.state;

    return (
      <>
        <Header />
        <Jumbotron />
        <Container>
          <Card infos="Número de casos confirmados" values={confirmedCases} />
          <Card infos="Número de mortes" values={deathNumber} />
          <Card infos="Número de casos suspeitos" values={suspectCases} />
        </Container>
        <Footer />
      </>
    );
  }
}
