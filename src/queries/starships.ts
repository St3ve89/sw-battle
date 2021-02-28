import { gql } from '@apollo/client';

export const ALL_STARSHIPS = gql`
  {
    allStarships {
      starships {
        id
        name
        hyperdriveRating
      }
    }
  }
`;
