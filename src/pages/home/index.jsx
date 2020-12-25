import React, { Component } from 'react';
import Header from '../../components/header';
import Jumbotron from '../../components/jumbtron';
import Card from '../../components/card';
import Footer from '../../components/footer';
import covidAPI from '../../services/covidAPI';

import { ContainerGrid, Date, ContainerFLex } from './styles';

export default class Home extends Component {
  state = {
    confirmedCases: '',
    deathNumber: '',
    suspectCases: '',
    error: '',
    date: '',
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
        date: request.data.datetime,
      });
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  render() {
    const {
      confirmedCases, suspectCases, deathNumber, date,
    } = this.state;

    return (
      <>
        <Header />
        <Jumbotron />
        <ContainerGrid>
          <Card infos="Número de casos confirmados" values={confirmedCases} />
          <Card infos="Número de mortes" values={deathNumber} />
          <Card infos="Número de casos suspeitos" values={suspectCases} />
        </ContainerGrid>
        <ContainerFLex>
          <Date>
            <h2>
              Estes dados são do dia:
              {' '}
              {date}
              {' '}
            </h2>
          </Date>
        </ContainerFLex>
        <Footer />
      </>
    );
  }
}
