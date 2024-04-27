import Main from './src/screens/MainScreen';
import { NativeRouter } from 'react-router-native';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();
const App = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;