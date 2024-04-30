import { gql } from 'apollo-boost';
import { RepositoryFieldsFragment } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
  ${RepositoryFieldsFragment}
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;
