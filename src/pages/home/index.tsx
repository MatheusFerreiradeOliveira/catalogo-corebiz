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
  SeparatorLine,
  CompanyName,
  Items,
  Advertisements,
  BlackWarning,
  BallPage,
  Ball,
  LogoImg,
  VtexLogoImg,
  StoreItems,
  ItemCard,
  WhiteSeparatorLine,
  ItemBody,
  OffTag,
} from './styles';
import TextField from '@material-ui/core/TextField';
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from '@material-ui/core';
import { useState } from 'react';
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { RiHeadphoneFill } from 'react-icons/ri';
import InsertUserData from '../../components/InsertUserData/InsertUserData';
import SuccessCreateUser from '../../components/SuccessCreateUser/SuccessCreateUser';
import axios from 'axios';
import { useEffect } from 'react';

interface InstallmentObject {
  quantity: number;
  value: number;
}
interface itemInterface {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number;
  price: number;
  installments: Array<InstallmentObject>;
}

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [switchInfoComponent, setSwitchInfoComponent] = useState(false);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [storeItems, setStoreItems] = useState([]);
  const [numItemsCart, setNumItemsCart] = useState(0);

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    console.log('chamou');
    axios
      .get('https://corebiz-test.herokuapp.com/api/v1/products')
      .then((response) => {
        setStoreItems(response.data);
        setFilteredItems(response.data);
      });
  }, []);

  const handleChangeSearchValue = (e: any) => {
    let searchValue = e.target.value.trim();

    if (!searchValue) {
      setFilteredItems(storeItems);
    } else {
      setFilteredItems(
        storeItems.filter((elem: itemInterface) => {
          let ans = elem.productName
            .toLowerCase()
            .includes(e.target.value.toLowerCase());

          return ans;
        })
      );
    }
  };

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const validadeEmail = (email: string) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validadeName = (name: string) => {
    return name.trim() !== '';
  };

  const handleSubmitInfo = () => {
    setIsValidEmail(validadeEmail(email));
    setIsValidName(validadeName(name));

    if (validadeEmail(email) && validadeName(name)) {
      axios
        .post('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
          email,
          name,
        })
        .then((response) => {
          setSwitchInfoComponent(true);
        });
    }
  };

  const handleCreateNewUser = () => {
    setName('');
    setEmail('');
    setSwitchInfoComponent(false);
  };

  const handleIncreaseItemsCart = () => {
    setNumItemsCart(numItemsCart + 1);
  };

  return (
    <>
      <Container>
        <ContainerHeader>
          <LogoImage />
          <SearchBar>
            <FormControl style={{ width: '100%' }}>
              <InputLabel style={{ fontSize: '13px' }} htmlFor="searchBarInput">
                O que está procurando?
              </InputLabel>
              <Input
                id="searchBarInput"
                type="text"
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
              <strong>{numItemsCart}</strong>
            </a>
          </ShoppingCart>
        </ContainerHeader>
        <ContainerBody>
          <Advertisements>
            <BlackWarning>
              <h2>Olá, o que você está buscando?</h2>
              <h1>Criar ou migrar seu e-commerce?</h1>
            </BlackWarning>
            <BallPage>
              <Ball className="orangeBall" />
              <Ball />
              <Ball />
              <Ball />
            </BallPage>
          </Advertisements>
          <Items>
            <StoreItems>
              <h1 className="title">Mais vendidos</h1>
              <WhiteSeparatorLine
                style={{ alignSelf: 'flex-start', margin: '0px 0px 10px 0px' }}
              />
              <div style={{ display: 'flex', width: '100%' }}>
                {filteredItems ? (
                  filteredItems.map((singleItem: itemInterface, index) => (
                    <ItemCard key={index}>
                      {index % 2 ? (
                        <OffTag>
                          <h1>OFF</h1>
                        </OffTag>
                      ) : null}
                      <img
                        className="itemImage"
                        src={`${singleItem.imageUrl}`}
                      ></img>
                      <ItemBody>
                        <h2>{singleItem.productName}</h2>

                        <div className="starts" style={{ display: 'flex' }}>
                          {Array.from({ length: 5 }).map((_, index) =>
                            index <= singleItem.stars ? (
                              <AiFillStar key={index} color="F8475F" />
                            ) : (
                              <AiOutlineStar key={index} color="F8475F" />
                            )
                          )}
                        </div>

                        <h1>
                          por R$ {Math.trunc(singleItem.price / 100)},
                          {singleItem.price % 100}
                        </h1>

                        {singleItem.installments.length > 0 ? (
                          <h3>
                            ou por {singleItem.installments[0].quantity}x de R${' '}
                            {Math.trunc(singleItem.installments[0].value / 100)}
                            ,{singleItem.installments[0].value % 100}
                          </h3>
                        ) : null}
                        <Button
                          className="infoButton"
                          variant="contained"
                          onClick={handleIncreaseItemsCart}
                        >
                          COMPRAR
                        </Button>
                      </ItemBody>
                    </ItemCard>
                  ))
                ) : (
                  <h1>No data</h1>
                )}
              </div>
            </StoreItems>
          </Items>
          {switchInfoComponent ? (
            <SuccessCreateUser handleCreateNewUser={handleCreateNewUser} />
          ) : (
            <InsertUserData
              name={name}
              email={email}
              handleChangeName={handleChangeName}
              handleChangeEmail={handleChangeEmail}
              isValidName={isValidName}
              isValidEmail={isValidEmail}
              handleSubmitInfo={handleSubmitInfo}
            />
          )}
        </ContainerBody>
        <ContainerFooter>
          <AddressInformations>
            <h1>Localização</h1>
            <SeparatorLine />
            <ul className="addressInfos">
              <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
              <li>Alphavile SP</li>
              <li>brasil@corebiz.ag</li>
              <li>+55 11 3090 1039</li>
            </ul>
          </AddressInformations>
          <ContactButtons>
            <Button
              style={{ justifyContent: 'space-between' }}
              className="button button1"
              variant="contained"
              startIcon={<HiMail size={25} />}
            >
              ENTRE EM CONTATO
            </Button>
            <Button
              style={{ justifyContent: 'space-between' }}
              className="button"
              variant="contained"
              startIcon={<RiHeadphoneFill size={25} />}
            >
              FALE COM O NOSSO CONSULTOR ONLINE
            </Button>
          </ContactButtons>
          <Companies>
            <CompanyName>
              <a>Created by</a>
              <LogoImg />
            </CompanyName>
            <CompanyName>
              <a>Powered by</a>
              <VtexLogoImg />
            </CompanyName>
          </Companies>
        </ContainerFooter>
      </Container>
    </>
  );
}

export default Home;
