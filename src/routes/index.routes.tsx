import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import LoginRoutes from './login.routes';
import {Home} from '../screens';
import {useAuth} from '../hooks/auth';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  const {loggedIn} = useAuth();
  const {reset} = useNavigation();
  console.log(loggedIn);
  if (loggedIn) {
    reset({
      index: 0,
      routes: [{name: 'App'}],
    });
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={LoginRoutes} />
      <Stack.Screen name="App" component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
