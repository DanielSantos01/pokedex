import React from 'react';
import {Provider} from 'react-redux';
import {QueryClientProvider, QueryClient} from 'react-query';
import {Provider as AntDedignProvider} from '@ant-design/react-native';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux';
import Routes from './src/routes/index.routes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AntDedignProvider>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </AntDedignProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
