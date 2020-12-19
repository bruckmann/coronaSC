import styled from 'styled-components';

export const CardDiv = styled.div`
  width: 250px;
  height: 120px;
  display: grid;
  grid-template-rows: 60% 40%;
  background-color: #d93455;
  margin: auto;
  margin-bottom: 60px;
  color:  #edfff5;
  border-radius: 8px;
  .values {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  .infos {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #994653;
    font-weight: bold;
  }
`;
