import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Text from '../reusableComponents/Text';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const styles = StyleSheet.create({
  text: {
    padding: 10
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#333', 
 },
});

const AppBar = () => {
  const { data, loading, error } = useQuery(ME);

  console.log('Data:', data);
  if(loading) return <Text>Loading... </Text>;
  if(error) return <Text>Error: {error.message}</Text>

  const isLoggedIn = data && data.me;

  return(
    <TouchableWithoutFeedback>
      <View style={styles.navigation}>
        <ScrollView horizontal>
          <Link to="/">
            <Text color='white' style={styles.text}>Repositories</Text>
          </Link>
          {isLoggedIn ? (
            <Link to="/signout">
              <Text color='white' style={styles.text}>Sign Out</Text>
            </Link>
          ) : (
            <Link to="/signin">
              <Text color='white' style={styles.text}>Sign In</Text>
            </Link>
          )}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  ); 
};

export default AppBar;