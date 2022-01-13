import React, {useState, useCallback} from 'react';
import {useQuery} from 'react-query';
import {connect, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Toast} from '@ant-design/react-native';

import {Input, SubmitButton} from '../../components';
import {
  AUTH_URL,
  LOGIN_BACKGROUND_URL,
  POKEMON_TITLE_URL,
} from '../../constants';
import {appHttpHelper} from '../../services';
import {
  Container,
  Image,
  InputsContainer,
  CardContent,
  Title,
  Description,
} from './styles';
import {logIn} from '../../redux/user';

const Login: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleLogin = useCallback((data: string) => {
    setLogin(data);
  }, []);

  const handlePassword = useCallback((data: string) => {
    setPassword(data);
  }, []);

  const signIn = useCallback(async () => {
    setLoading(true);
    const {statusCode, body} = await appHttpHelper.post<any>({
      url: AUTH_URL,
      body: {
        login,
        password,
      },
    });

    setLoading(false);
    if (statusCode !== 200 || !body.length) {
      Toast.info(
        'Não foi possível realizar o login. Verifique os dados e tente novamente',
      );
      return;
    }

    const {login: userName} = body[0];

    dispatch(logIn({login: userName, isLogged: true}));
    return body;
  }, [login, password, dispatch]);

  const handleButtonPress = useCallback(async () => {
    if (!login) {
      Toast.info('O login é obrigatório');
      return;
    }

    if (!password) {
      Toast.info('A senha é obrigatória');
      return;
    }

    await signIn();
  }, [login, password, signIn]);

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

const map = state => ({
  login: state.user.login,
});

export default connect(map)(Login);
