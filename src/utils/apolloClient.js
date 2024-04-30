import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = (authStorage) => {
  return new ApolloClient({
    request: async(operation) => {
      try {
        const accessToken = await authStorage.getAccessToken();
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });
      } catch(e) {
        console.log('Error en Apollo Client:', e);
      }
    },
    uri: 'http://192.168.1.33:4000/graphql',
    cache: new InMemoryCache(),
    onResetStore: () => {
      console.log('resetStore ha sido llamado y ha completado su ejecución.');
   },
  });
};

export default createApolloClient;