import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {RouteProps} from './interfaces';
import LoginRoutes from './login.routes';
import {Home} from '../screens';

const Stack = createNativeStackNavigator();

const Routes: React.FC<RouteProps> = ({isLogged, key}) => {
  const {reset} = useNavigation();

  const resetNavigation = () => {
    reset({
      index: 0,
      routes: [{name: 'App'}],
    });
  };

  if (isLogged) {
    if (!key) {
      AsyncStorage.setItem('@pokedex', `${key}`).then(resetNavigation);
    } else {
      resetNavigation();
    }
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={LoginRoutes} />
      <Stack.Screen name="App" component={Home} />
    </Stack.Navigator>
  );
};

const map = (state: any) => {
  const key = AsyncStorage.getItem('@pokedex');
  return {
    isLogged: !!key || state.user.isLogged,
    key,
  };
};

export default connect(map)(Routes);
