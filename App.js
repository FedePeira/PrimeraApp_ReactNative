import Main from './src/screens/MainScreen';
import { NativeRouter } from 'react-router-native';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import Constants from 'expo-constants';

import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();
const appConfig = Constants.expoConfig;

const App = () => {
  console.log(appConfig);

  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;