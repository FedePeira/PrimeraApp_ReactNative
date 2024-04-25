import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import RepositoryList from '../components/RepositoryListComponent';
import AppBar from '../components/AppBarComponent';
import { Route, Switch } from 'react-router-native';
import SignInScreen from './SignInScreen';

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
          <SignInScreen/>
        </Route>
      </Switch>
    </SafeAreaView>
  );
};

export default Main;