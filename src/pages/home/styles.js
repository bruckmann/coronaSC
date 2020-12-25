import styled from 'styled-components';

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1000px;
  margin: 60px auto auto auto;
`;

export const ContainerFLex = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 60px;
`;

export const Date = styled.div`
  display: flex;
  background-color: #d93455;
  width: 100%;
  height: 100px;
  border-radius: 8px;
  color: #edfff5;
  align-items: center;
  justify-content: center;
`;
