import React from 'react';
import {View, SafeAreaView, ScrollView, Alert} from 'react-native';
import Button from '../reusableComponents/Button';
import Text from '../reusableComponents/Text';
import theme from '../theme';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../reusableComponents/Input';
import useSignIn from '../hooks/useSignIn';
import AuthStorage from '../utils/authStorage';

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Please enter a uniqued name.'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .required('Please enter your password')
});

const SignInScreen = () => {
  const [signIn, result, errorMessage] = useSignIn();

  const onSubmit = async(values, resetForm) => {
    const { username, password } = values;
    console.log('Username:', username)
    console.log('Password:', password)
    
    try { 
      const { data } = await signIn({ username, password });
      console.log('Data Sign in Screen:', data)
      if (data && data.accessToken) {
        await AuthStorage.setAccessToken(data.accessToken);
      }
    } catch(e) {
      console.log(e);
      Alert.alert('Error: ', e.message);
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
                <Button title="Log In" onPress={() => onSubmit(values, resetForm)}/>
                <Text> Don't have account? Register </Text>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      )}
    </Formik>
 );
};

export default SignInScreen;