import React, { useState } from 'react';
import {View, SafeAreaView, TextInput, StyleSheet, ScrollView} from 'react-native';
import Button from '../reusableComponents/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../reusableComponents/Text';
import theme from '../theme';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../reusableComponents/Input';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Please enter a uniqued name.'),
  password: Yup.string()
    .min(8)
    .required('Please enter your password')
});

const styles = StyleSheet.create({
  inputContainer: {
    height: 55,
    backgroundColor: theme.colors.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});


const SignInScreen = () => {
  const [inputs, setInputs] = React.useState({
    name: '',
    password: '',
  });

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  return (
      <Formik 
      initialValues={{
        name: '',
        password: ''
      }}
      validationSchema={SignUpSchema}
      onSubmit={values => {
        console.log(values)
      }}
      >
        {({values, errors, touched, handleChange, setFieldTouched, handleSubmit}) =>(
        <ScrollView>
          <SafeAreaView style={{backgroundColor: theme.colors.white, flex: 1}}>
            <View style={{paddingTop: 50, paddingHorizontal: 20}}>
              {/* Titulo de Login */}
              <Text color="primary" fontSize="title" fontWeight="bold">
                Sign In
              </Text>
              <Text color="grey" fontSize="subheading" style={{ marginVertical: 10 }}>
                Enter Your Details to Login
              </Text>

              {/* Text Input */}
              <View style={{marginVertical: 20}}>
                <Input 
                  label="Name"
                  placeholder="Enter your name"
                  onChangeText={text => handleOnchange(text, 'name')}
                  value={values.name}
                  iconName="email-outline"
                  error={errors.name}
                  touched={touched.name}
                />
                <Input 
                  label="Password"
                  placeholder="Enter your password"
                  onChangeText={text => handleOnchange(text, 'password')}
                  value={values.password}
                  iconName="lock-outline"
                  error={errors.password}
                  touched={touched.password}
                  password
                />

                <Button title="Log In"/>
                {/* Register */}
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