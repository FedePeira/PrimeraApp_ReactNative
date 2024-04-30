import React, { useContext } from 'react';
import {View, SafeAreaView, ScrollView, Alert} from 'react-native';
import Button from '../reusableComponents/Button';
import Text from '../reusableComponents/Text';
import theme from '../theme';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../reusableComponents/Input';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Please enter a uniqued name.'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .required('Please enter your password')
});

const SignIn = () => {
  const [signInUser, result, errorMessage] = useSignIn();
  const history = useHistory();
  const client = useApolloClient(); 

  const onSubmit = async(values, resetForm) => {
    const { username, password } = values;
    console.log('Username:', username)
    console.log('Password:', password)
    
    try { 
      await signInUser({ username, password });
      await client.resetStore();
      history.push('/'); 
    } catch(e) {
      console.log(e);
      Alert.alert('Error: ', errorMessage);
      resetForm({ values: { username: '', password: '' } });
    }
 }

 return (
    <Formik 
      initialValues={{
        username: '',
        password: ''
      }}
      validationSchema={SignUpSchema}
      onSubmit={onSubmit}
    >
      {({values, errors, touched, handleChange, resetForm}) => (
        <ScrollView>
          <SafeAreaView style={{backgroundColor: theme.colors.white, flex: 1}}>
            <View style={{paddingTop: 50, paddingHorizontal: 20}}>
              <Text color="primary" fontSize="title" fontWeight="bold">
                Sign In
              </Text>
              <Text color="grey" fontSize="subheading" style={{ marginVertical: 10 }}>
                Enter Your Details to Login
              </Text>

              <View style={{marginVertical: 20}}>
                <Input 
                 label="Username"
                 placeholder="Enter your username"
                 onChangeText={handleChange('username')}
                 value={values.username}
                 iconName="email-outline"
                 error={errors.username}
                 touched={touched.username}
                />
                <Input 
                 label="Password"
                 placeholder="Enter your password"
                 onChangeText={handleChange('password')}
                 value={values.password}
                 iconName="lock-outline"
                 error={errors.password}
                 touched={touched.password}
                 password={true}
                />
                <Button title="Sign In" onPress={() => onSubmit(values, resetForm)}/>
                <Text> Don't have account? Register </Text>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      )}
    </Formik>
 );
};

export default SignIn;