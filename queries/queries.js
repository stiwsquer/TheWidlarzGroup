import { gql } from '@apollo/client';

export const GET_ROOMS = gql`
  {
    usersRooms {
      user {
        email
        firstName
        lastName
        id
        role
      }
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
