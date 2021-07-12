import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: center;
  background-color: #f2f2f2;
  height: 15%;
  margin-top: 5px;
  margin-bottom: 5px;

  #boldTitle {
    font-weight: bold;
    margin: 0px;
    font-size: 14px;
  }

  h3 {
    font-size: 12px;
    font-style: normal;
    letter-spacing: 0em;
    text-align: center;
    margin: 0px 0px 10px 0px;
  }

  .infoButton {
    background-color: black;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 4.8vh;
    color: white;
    text-transform: none;
  }
`;
