import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  font-family: 'Nunito', sans-serif;
`;

export const ContainerHeader = styled.div`
  display: flex;
  height: 12%;
  justify-content: center;
  align-items: center;
`;

export const ContainerFooter = styled.div`
  display: flex;
  height: 22%;
  background-color: black;
  justify-content: center;
  color: white;
`;

export const ContainerBody = styled.div`
  display: flex;
  height: 70%;
  background-color: purple;
`;

export const SearchBar = styled.div`
  margin: 0px 20px 20px 20px;
  width: 40%;
  color: #7a7a7a;
`;

export const LogoImage = styled.img`
  margin: 0px 20px 0px 20px;
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
    padding: 3px 5px 3px 5px;
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
  margin: 0px 20% 0px 0px;
`;

export const ContactButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20% 0px 0px;
`;

export const Companies = styled.div``;
