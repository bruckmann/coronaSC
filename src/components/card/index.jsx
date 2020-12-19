import React from 'react';
import { CardDiv } from './styles';

const Card = ({ infos, values }) => (
  <CardDiv>
    <div className="values">
      <h1>{values}</h1>
    </div>
    <div className="infos">
      {infos}
    </div>
  </CardDiv>
);
export default Card;
