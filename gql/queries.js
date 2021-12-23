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
