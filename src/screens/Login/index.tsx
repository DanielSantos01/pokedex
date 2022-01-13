import React, {useState, useCallback} from 'react';
import {Toast} from '@ant-design/react-native';

import {Input, SubmitButton} from '../../components';
import {useAuth} from '../../hooks/auth';
import {LOGIN_BACKGROUND_URL, POKEMON_TITLE_URL} from '../../constants';
import {
  Container,
  Image,
  InputsContainer,
  CardContent,
  Title,
  Description,
} from './styles';

const Login: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const {logIn} = useAuth();

  const handleLogin = useCallback((data: string) => {
    setLogin(data);
  }, []);

  const handlePassword = useCallback((data: string) => {
    setPassword(data);
  }, []);

  const handleButtonPress = useCallback(async () => {
    if (!login) {
      Toast.info('O login é obrigatório');
      return;
    }

    if (!password) {
      Toast.info('A senha é obrigatória');
      return;
    }
    setLoading(true);
    await logIn({login, password});
    setLoading(false);
  }, [login, password, logIn]);

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

export default Login;
