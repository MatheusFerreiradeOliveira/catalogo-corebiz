import styled from 'styled-components';

export const Promotions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  height: 15%;
  width: 100%;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  text-align: left;

  h1 {
    margin: 0px;
    margin-bottom: 5px;
  }

  .infoButtons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;

    .infoButton {
      background-color: black;
      padding-left: 2rem;
      padding-right: 2rem;
      color: white;
      height: 4.8vh;
      text-transform: none;
    }

    .infoInput {
      background-color: #ffffff;
      margin-right: 15px;
    }
  }
`;
