import React, {useState, useCallback} from 'react';
import {connect, useDispatch} from 'react-redux';
import {Toast} from '@ant-design/react-native';

import {AUTH_URL} from '../../constants';
import {appHttpHelper} from '../../services';
import {logIn} from '../../redux/user';
import Main from './Main';

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
    <Main
      handleButtonPress={handleButtonPress}
      handleLogin={handleLogin}
      handlePassword={handlePassword}
      isLoading={isLoading}
    />
  );
};

const map = (state: any) => ({
  login: state.user.login,
});

export default connect(map)(Login);
