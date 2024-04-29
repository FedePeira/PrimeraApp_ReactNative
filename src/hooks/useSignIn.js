import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutation';

const useSignIn = () => {
  const [signIn, result] = useMutation(AUTHORIZE);
  const [errorMessage, setErrorMessage] = useState('');

  const signInUser = async({ username, password }) => {
    console.log('Password:', password)
    console.log('Username:', username)
    try {
        const { data } = await signIn({ variables: { username, password } })
        console.log('Data:', data);
        console.log('Access Token:', data.authenticate.accessToken);
        if (data && data.accessToken) {
          await AuthStorage.setAccessToken(data.authenticate.accessToken);
          apolloClient.resetStore();
        }
        setErrorMessage('');
        return data;
    } catch(error) {
        console.error('Error signing in', error);
        setErrorMessage('Failed to sign in. Please check your credentials and try again.');
        throw error;
    }
  }

  return [ signInUser, result, errorMessage ];
};

export default useSignIn;