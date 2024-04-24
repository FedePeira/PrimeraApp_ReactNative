import React from 'react';
import { View, TouchableWithoutFeedback  } from 'react-native';
import { Formik } from 'formik';
import Text from '../reusableComponents/Text';
import FormikTextInput from '../components/FormikTextInput';

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
 },
 button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
 },
 buttonText: {
    color: 'white',
    fontSize: 16,
 },
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <>
            <FormikTextInput name="name" placeholder="Nombre" />
            <FormikTextInput name="password" placeholder="Contraseña" />
            <TouchableWithoutFeedback style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableWithoutFeedback>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;