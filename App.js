import Main from './src/screens/MainScreen';
import { NativeRouter } from 'react-router-native';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import Constants from 'expo-constants';
import AuthStorage from './src/utils/authStorage';
import createApolloClient from './src/utils/apolloClient';
import AuthStorageContext from './src/context/AuthStorageContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);
const appConfig = Constants.expoConfig;

const App = () => {
  console.log(appConfig);

  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;