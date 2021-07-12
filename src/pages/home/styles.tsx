import styled from 'styled-components';
import cardImg from '../../assets/images/cardImage.png';
import blackBackground from '../../assets/images/blackBackground.png';
import corebizLogo from '../../assets/images/logo.png';
import whiteLogo from '../../assets/images/whiteLogo.png';
import vtexLogo from '../../assets/images/vtexLogo.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  font-family: 'Nunito', sans-serif;
  background-color: black;
`;

export const ContainerHeader = styled.div`
  display: flex;
  height: 8%;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const ContainerFooter = styled.div`
  display: flex;
  height: 20%;
  width: 80%;
  background-color: black;
  align-self: center;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  background-color: white;
`;

export const SearchBar = styled.div`
  margin: 0px 20px 20px 20px;
  width: 40%;
  color: #7a7a7a;
`;

export const LogoImage = styled.div`
  margin: 0px 50px 0px 20px;
  width: 13vh;
  height: 3.1vh;
  background-image: url(${corebizLogo});
  background-size: 100% 100%;
`;

export const ShoppingCart = styled.div`
  margin: 0px 20px 0px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  .notification {
    border-radius: 50%;
    font-size: 10px;
    color: white;
    padding: 2px 5px 2px 5px;
    background-color: red;
    margin: 10px;
  }
`;

export const ProfileButton = styled.div`
  display: flex;
  margin: 0px 20px 0px 20px;
  align-items: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
`;

export const AddressInformations = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
  }

  .addressInfos {
    list-style: none;
    padding: 0;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
  }

  .addressInfos li {
    margin-bottom: 5px;
  }
`;

export const ContactButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .button {
    width: 195px;
    height: 38px;
    background: #ffffff;
    border-radius: 5px;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
  }

  .button1 {
    margin-bottom: 20px;
  }
`;

export const Companies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div + div {
    margin-left: 20px;
  }
`;

export const SeparatorLine = styled.div`
  width: 44.94px;
  border: 3px solid #ffffff;
  color: #ffffff;
`;

export const WhiteSeparatorLine = styled.div`
  width: 65px;
  border: 3.29723px solid #c0c0c0;
  color: #c0c0c0;
`;

export const CompanyName = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
  }

  img {
    background-image: './logo.png';
  }
`;

export const Items = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`;

export const Advertisements = styled.div`
  display: flex;
  height: 35%;
  width: 100%;
  position: relative;
  background-image: url(${blackBackground}), url(${cardImg});
  background-position: left top, right top;
  background-repeat: no-repeat;
  background-size: 55% 100%, 50% 100%;
`;

export const BlackWarning = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;

  font-style: normal;
  font-weight: bold;

  color: #ffffff;

  h1 {
    width: 27%;
    font-size: 25px;
    margin: 0px;
  }

  h2 {
    width: 27%;
    font-size: 15px;
    margin: 0px;
  }
`;

export const BallPage = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: center;
  height: 10%;
  bottom: 5%;

  .orangeBall {
    background-color: #f8475f;
  }
`;

export const Ball = styled.div`
  display: flex;
  background-color: #bdbdbd;
  border-radius: 50%;
  padding: 5px;
  margin: 5px 10px 10px 0px;
`;

export const LogoImg = styled.div`
  background-image: url(${whiteLogo});
  background-size: 100% 100%;
  width: 8vh;
  height: 2vh;
`;

export const VtexLogoImg = styled.div`
  background-image: url(${vtexLogo});
  background-size: 100% 100%;
  width: 6vh;
  height: 2vh;
`;

export const StoreItems = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    align-self: flex-start;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 27px;
    margin: 0px;
  }
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 28vh;
  margin: 0px 20px 0px 0px;
  position: relative;

  .itemImage {
    width: 100%;
    height: 100px;
  }
`;

export const OffTag = styled.div`
  width: 80px;
  height: 70px;
  position: absolute;
  right: 0px;
  top: 0px;
  color: white;
  display: flex;
  font-weight: bold;
  justify-content: flex-end;
  background: linear-gradient(
    to top right,
    transparent 0%,
    transparent 50%,
    #f8475f 50%,
    #f8475f 100%
  );

  h1 {
    font-size: 20px;
    margin: 5px;
  }
`;

export const ItemBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;

  .infoButton {
    width: 2rem;
    height: 1.5rem;
    font-size: 10px;
    background-color: black;
    padding-left: 2rem;
    padding-right: 2rem;
    color: white;
    text-transform: none;
    position: absolute;
    bottom: 0px;
  }

  h2 {
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0px;
  }

  h1 {
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 0px;
  }

  h3 {
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0px;
  }

  .singleStar {
    color: white;
    border-color: #f8475f;
  }

  :hover {
    background-color: #e6e8ea;
  }
`;
