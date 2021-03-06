import { gql } from '@apollo/client';

export const SEND_MESSAGE_MUTATION = gql`
  mutation newMessage($body: String!, $roomId: String!) {
    sendMessage(body: $body, roomId: $roomId) {
      id
      body
      insertedAt
      user {
        id
        firstName
        email
        lastName
        role
      }
    }
  }
`;

export const TYPING_USER_MUTATION = gql`
  mutation typingMutation($roomId: String!) {
    typingUser(roomId: $roomId) {
      email
      firstName
      id
      lastName
      role
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation loginMutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        email
        firstName
        id
        lastName
        role
      }
    }
  }
`;

export const REGISTER_USER_MUTATION = gql`
  mutation registerMutation(
    $email: String!,
    $firstName: String!,
    $lastName: String!,
    $password: String!,
    $passwordConfirmation: String!
  ) {
    registerUser(
      email: $email,
      firstName: $firstName,
      lastName: $lastName,
      password: $password,
      passwordConfirmation: $passwordConfirmation
    ) {
      email
      firstName
      id
      lastName
      role
    }
  }
`;
