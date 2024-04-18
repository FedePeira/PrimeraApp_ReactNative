import React from 'react';
import { View, StyleSheet,TouchableWithoutFeedback, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333', 
    height: 50, 
  },
  text: {
    color: '#fff', 
    lineHeight: 50 
  }
});

const AppBar = () => {
  return(
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.text}>Repositories</Text>
      </View>
    </TouchableWithoutFeedback>
  ); 
};

export default AppBar;