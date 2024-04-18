import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  appBarContainer: {
    paddingTop: 50,
  },
});

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBarContainer}>
        <AppBar />
      </View>
      <RepositoryList />
    </SafeAreaView>
  );
};

export default Main;