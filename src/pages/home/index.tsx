import {
  Container,
  ContainerHeader,
  ContainerBody,
  ContainerFooter,
  SearchBar,
  LogoImage,
  ShoppingCart,
  ProfileButton,
  AddressInformations,
  ContactButtons,
  Companies,
} from './styles';
import TextField from '@material-ui/core/TextField';
import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from '@material-ui/core';
import { useState } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

function Home() {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearchValue = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Container>
        <ContainerHeader>
          <LogoImage src="../../assets/images/logo.png" />
          <SearchBar>
            <FormControl style={{ width: '100%' }}>
              <InputLabel style={{ fontSize: '13px' }} htmlFor="searchBarInput">
                O que está procurando?
              </InputLabel>
              <Input
                id="searchBarInput"
                type="text"
                value={searchValue}
                onChange={(e) => handleChangeSearchValue(e)}
                endAdornment={
                  <InputAdornment position="end">
                    <AiOutlineSearch size={20} />
                  </InputAdornment>
                }
              />
            </FormControl>
          </SearchBar>
          <ProfileButton>
            <BsPerson size={20} />
            <a>Minha Conta</a>
          </ProfileButton>
          <ShoppingCart>
            <AiOutlineShoppingCart size={25} />
            <a className="notification">
              <strong>1</strong>
            </a>
          </ShoppingCart>
        </ContainerHeader>
        <ContainerBody>2</ContainerBody>
        <ContainerFooter>
          <AddressInformations>asd</AddressInformations>
          <ContactButtons>dsada</ContactButtons>
          <Companies>asdasda</Companies>
        </ContainerFooter>
      </Container>
    </>
  );
}

export default Home;
