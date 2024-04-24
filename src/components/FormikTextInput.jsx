import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import TextInput from '../reusableComponents/TextInput';
import Text from '../reusableComponents/Text';

const styles = StyleSheet.create({
 input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
 },
 errorText: {
    color: 'red',
    marginBottom: 10,
 },
});

const FormikTextInput = ({ name, ...props}) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return(
    <>
      <TextInput
          style={styles.input}
          onChangeText={value => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          error={showError}
          {...props}
      />
      {showError && <Text styles={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;