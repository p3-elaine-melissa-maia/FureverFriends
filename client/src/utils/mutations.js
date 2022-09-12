import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $fullname: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      fullname: $fullname
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// export const ADD_POST = gql`
//   mutation addPost($userId: ID!, $img: String!, $caption: String!) {
//     addPost($userId: userId, $img: img, $caption: caption) {
//       _id
//       username
//       img
//       caption
//     }
//   }
// `;

