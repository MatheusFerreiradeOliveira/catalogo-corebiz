import { Button, FormControl, TextField } from '@material-ui/core';
import React from 'react';
import { Container } from './styles';

interface Data {
  handleCreateNewUser: any;
}

function SuccessCreateUser(props: Data) {
  let { handleCreateNewUser } = props;

  return (
    <Container>
      <h3 id="boldTitle">Seu e-mail foi cadastrado com sucesso!</h3>
      <h3>A partir de agora você receberá as novidades e ofertas exclusivas</h3>
      <Button
        className="infoButton"
        variant="contained"
        onClick={handleCreateNewUser}
      >
        Cadastrar novo e-mail
      </Button>
    </Container>
  );
}

export default SuccessCreateUser;
