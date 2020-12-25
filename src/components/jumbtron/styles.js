import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  min-height: 40vh;
  max-height: 45vh;
  display: grid;
  grid-template-columns: 60% 40%;
  background-color: #d93455;
  border-radius: 8px;
  margin: auto;
  margin-top: 60px;
  .textDiv {
    display: flex;
    padding: 10px;
    align-items: center;
    text-align: center;
    color: #edfff5;
  }
  .imgDiv {
    background: url('https://source.unsplash.com/collection/10476432/400x500') no-repeat center center;
    border-radius: 8px;
    animation-name: opacity ;
    animation-duration: 1500ms;
    animation-timing-function: ease-in;
  }

  @keyframes opacity {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
  }

`;
