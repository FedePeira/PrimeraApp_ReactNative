import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#333', 
 },
});

const AppBar = () => {
  return(
    <TouchableWithoutFeedback>
      <View style={styles.navigation}>
      <Link to="/">
          <Text color='white' style={styles.text}>Repositories</Text>
        </Link>
        <Link to="/signin">
          <Text color='white' style={styles.text}>Sign In</Text>
        </Link>
      </View>
    </TouchableWithoutFeedback>
  ); 
};

export default AppBar;