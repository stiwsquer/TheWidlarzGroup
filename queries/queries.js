import { gql } from '@apollo/client';

export const GET_ROOMS = gql`
  {
    usersRooms {
      rooms {
        id
        name
      }
    }
  }
`;

export const GET_ROOM = gql`
  query GetRoom($roomId: String!) {
    room(id: $roomId) {
      id
      messages {
        body
        id
        insertedAt
        user {
          id
        }
      }
      name
      user {
        id
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
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

export const MESSAGE_ADDED = gql`
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

export const TYPING_USER = gql`
  subscription typing($roomId: String!) {
    typingUser(roomId: $roomId) {
      email
      firstName
      id
      lastName
      role
    }
  }
`;
