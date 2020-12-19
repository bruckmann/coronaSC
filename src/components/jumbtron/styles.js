import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  height: 50vh;
  display: grid;
  grid-template-columns: 60% 40%;
  background-color: #d93455;
  border-radius: 8px;
  margin: auto;
  margin-top: 60px;
  .textDiv {
    display: flex;
    padding: 10px;
    text-align:center;
    align-items: center;
    color: #edfff5;
  }
  .imgDiv {
    background: url('https://source.unsplash.com/collection/9683639/400x500') no-repeat center center;
    border-radius: 8px;
  }
`;
