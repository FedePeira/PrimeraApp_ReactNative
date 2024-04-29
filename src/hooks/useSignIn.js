import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutation';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const [errorMessage, setErrorMessage] = useState('');

  const signIn = async({ username, password }) => {
    console.log('Password:', password)
    console.log('Username:', username)
    try {
        const { data } = await mutate({ variables: { credentials: { username, password } } })
        console.log(data);
        setErrorMessage('');
        return data;
    } catch(error) {
        console.error('Error signing in', error);
        setErrorMessage('Failed to sign in. Please check your credentials and try again.');
        throw error;
    }
  }

  return [ signIn, result, errorMessage ];
};

export default useSignIn;