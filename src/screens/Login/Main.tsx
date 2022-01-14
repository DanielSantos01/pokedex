import React from 'react';

import {MainProps} from './interfaces';
import {Input, SubmitButton} from '../../components';
import {LOGIN_BACKGROUND_URL, POKEMON_TITLE_URL} from '../../constants';
import {
  Container,
  Image,
  InputsContainer,
  CardContent,
  Title,
  Description,
} from './styles';

const Main: React.FC<MainProps> = ({
  isLoading,
  handlePassword,
  handleLogin,
  handleButtonPress,
}) => {
  return (
    <Container source={{uri: LOGIN_BACKGROUND_URL}} resizeMode="cover">
      <Image
        resizeMode="contain"
        source={{
          uri: POKEMON_TITLE_URL,
        }}
      />

      <CardContent>
        <Title>Bem-vindo</Title>
        <Description>Insira os seus dados para acessar</Description>

        <InputsContainer>
          <Input
            placeholder="Insira seu login"
            label="Login"
            onTextChange={handleLogin}
          />

          <Input
            placeholder="Insira sua senha"
            label="senha"
            onTextChange={handlePassword}
            isPassword
          />
        </InputsContainer>

        <SubmitButton
          label="Login"
          style={{marginTop: 20}}
          isLoading={isLoading}
          onPress={handleButtonPress}
        />
      </CardContent>
    </Container>
  );
};

export default Main;
