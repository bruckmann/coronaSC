import styled from 'styled-components';

export const CardDiv = styled.div`
  width: 250px;
  height: 120px;
  display: grid;
  grid-template-rows: 60% 40%;
  background-color: #d93455;
  margin: auto;
  margin-bottom: 45px;
  color:  #edfff5;
  border-radius: 8px;
  animation-name: up;
  animation-duration: 600ms;
  animation-timing-function: ease-in-out;  
  .values {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    animation-name: opacity ;
    animation-duration: 1500ms;
    animation-timing-function: ease-in;
  }
  .infos {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #994653;
    font-weight: bold;
  }

  @keyframes up {
    from {
        opacity: 0;
        transform: translateY(25px)
    }
    
    to {
        opacity: 1;
    }
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
