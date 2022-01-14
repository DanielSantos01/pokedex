/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {RouteProps} from './interfaces';
import LoginRoutes from './login.routes';
import {Home} from '../screens';
import { Alert } from 'react-native';

const Stack = createNativeStackNavigator();

const Routes: React.FC<RouteProps> = ({isLogged}) => {
  const {reset} = useNavigation();

  const resetNavigation = () => {
    reset({
      index: 0,
      routes: [{name: 'App'}],
    });
  };

  const checkToken = useCallback(async () => {
    const token = await AsyncStorage.getItem('@pokedex');
    if (isLogged && !token) {
      await AsyncStorage.setItem('@pokedex', 'token_bonitinho');
      resetNavigation();
      return;
    }

    if (token) {
      resetNavigation();
    }
  }, [resetNavigation, isLogged]);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={LoginRoutes} />
      <Stack.Screen name="App" component={Home} />
    </Stack.Navigator>
  );
};

const map = (state: any) => {
  return {
    isLogged: state.user.isLogged,
  };
};

export default connect(map)(Routes);
