import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Redirect, Switch, Link } from 'react-router-native';
import SignIn from './SignIn';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  appBarContainer: {
    paddingTop: 50,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    paddingTop: 50,
 },
});

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBarContainer}>
        <AppBar/>
      </View>
      <Switch>
        <Route path="/" exact>
          <RepositoryList/>
        </Route>
        <Route path="/signin">
          <SignIn/>
        </Route>
      </Switch>
    </SafeAreaView>
  );
};

export default Main;