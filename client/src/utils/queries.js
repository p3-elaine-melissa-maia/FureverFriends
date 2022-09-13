import { gql } from '@apollo/client';

// export const QUERY_USER = gql`
//   {
//     user {
//       firstName
//       lastName
//       orders {
//         _id
//         purchaseDate
//         products {
//           _id
//           name
//           description
//           price
//           quantity
//           image
//         }
//       }
//     }
//   }
// `;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      fullname
      posts
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      posts
    }
  }
`;

export const QUERY_POSTS = gql`
  query posts($postId: ID!) {
    post(profileId: $postId) {
      _id
      username
      fullname
      posts
    }
  }
`;