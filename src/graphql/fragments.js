import { gql } from '@apollo/client';

export const RepositoryFieldsFragment = gql`
 fragment RepositoryFields on Repository {
    id
    name
    ownerName
    createdAt
    fullName
    reviewCount
    ratingAverage
    forksCount
    stargazersCount
    description
    language
    ownerAvatarUrl
 }
`;
