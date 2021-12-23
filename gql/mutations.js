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
