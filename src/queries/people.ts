import { gql } from '@apollo/client';

export const ALL_PERSON = gql`
  {
    allPeople {
      people {
        id
        name
        height
      }
    }
  }
`;
