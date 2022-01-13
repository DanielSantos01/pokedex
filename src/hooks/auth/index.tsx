import React, {useContext, useCallback, useState} from 'react';
import {Toast} from '@ant-design/react-native';
import {AUTH_URL} from '../../constants';
import {appHttpHelper} from '../../services';

import {AuthContextData, LoginProps} from './interfaces';
import {AuthContext} from './utils';

export const AuthProvider: React.FC = ({children}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const logIn = useCallback(async ({login, password}: LoginProps) => {
    const {statusCode, body} = await appHttpHelper.post<any>({
      url: AUTH_URL,
      body: {
        login,
        password,
      },
    });

    console.log(body, statusCode, statusCode !== 200 || !body.length);
    if (statusCode !== 200 || !body.length) {
      Toast.info(
        'Não foi possível realizar o login. Verifique os dados e tente novamente',
      );
      return;
    }

    setLoggedIn(true);
  }, []);

  return (
    <AuthContext.Provider value={{logIn, loggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context: AuthContextData = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used whithin an AuthProvider');
  }

  return context;
}
