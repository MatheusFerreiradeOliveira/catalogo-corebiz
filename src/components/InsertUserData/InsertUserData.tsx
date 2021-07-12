import { Button, FormControl, TextField } from '@material-ui/core';
import React from 'react';
import { Promotions } from './styles';

interface UserData {
  name: string;
  email: string;
  handleChangeName: any;
  handleChangeEmail: any;
  isValidName: boolean;
  isValidEmail: boolean;
  handleSubmitInfo: any;
}

function InsertUserData(props: UserData) {
  let {
    name,
    email,
    handleChangeEmail,
    handleChangeName,
    isValidName,
    isValidEmail,
    handleSubmitInfo,
  } = props;

  return (
    <Promotions>
      <h1>Participe de nossas news com promoções e novidades!</h1>
      <FormControl className="infoButtons">
        <TextField
          id="nameInput"
          className="infoInput"
          label="Digite seu nome"
          type="text"
          variant="outlined"
          value={name}
          onChange={handleChangeName}
          error={!isValidName}
          helperText={!isValidName ? 'Preencha com seu nome completo' : null}
          FormHelperTextProps={{
            style: { margin: '0px', backgroundColor: 'transparent' },
          }}
          size="small"
        />
        <TextField
          id="emailInput"
          className="infoInput"
          label="Digite seu email"
          type="email"
          variant="outlined"
          value={email}
          onChange={handleChangeEmail}
          size="small"
          error={!isValidEmail}
          helperText={!isValidEmail ? 'Preencha com um email válido' : null}
          FormHelperTextProps={{
            style: { margin: '0px', backgroundColor: 'transparent' },
          }}
        />
        <Button
          className="infoButton"
          variant="contained"
          onClick={handleSubmitInfo}
        >
          Eu quero!
        </Button>
      </FormControl>
    </Promotions>
  );
}

export default InsertUserData;
