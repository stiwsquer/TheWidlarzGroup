import { gql } from '@apollo/client';

export const MESSAGE_ADDED_SUBSCRIPTION = gql`
  subscription newMessage($roomId: String!) {
    messageAdded(roomId: $roomId) {
      body
      id
      insertedAt
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

export const TYPING_USER_SUBSCRIPTION = gql`
  subscription typingSubscription($roomId: String!) {
    typingUser(roomId: $roomId) {
      email
      firstName
      id
      lastName
      role
    }
  }
`;
