import React from 'react';
import { View } from 'react-native';
import Text from './Text';

const RepositoryItem = ({ repository }) => {

  return (
    <View >
        <Text fontWeight="bold" fontSize="subheading">Full name: {repository.fullName}</Text>
        <Text fontWeight="bold" fontSize="subheading">Description: {repository.description}</Text>
        <Text fontWeight="bold" fontSize="subheading">Language: {repository.language}</Text>
        <Text fontWeight="bold" fontSize="subheading">Stars: {repository.stargazersCount}</Text>
        <Text fontWeight="bold" fontSize="subheading">Forks: {repository.forksCount}</Text>
        <Text fontWeight="bold" fontSize="subheading">Reviews: {repository.reviewCount}</Text>
        <Text fontWeight="bold" fontSize="subheading">Rating: {repository.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;