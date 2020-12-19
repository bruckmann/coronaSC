import React from 'react';
import { CardDiv } from './styles';

const Card = ({ infos }) => (
  <CardDiv>
    <div className="values">
      <h1>50</h1>
    </div>
    <div className="infos">
      {infos}
    </div>
  </CardDiv>
);
export default Card;
