import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { navigate } from '../../navigation/RootNavigation';
import ProfileIcon from '../../svg/ProfileIcon';
import { useQuery } from '@apollo/client';
import { GET_ROOM } from '../../gql/queries';
import { styles } from './RoomListItem.style';

export default function RoomListItem({ item }) {
  const roomId = item.id;
  const { loading, error, data } = useQuery(GET_ROOM, {
    variables: {
      roomId,
    },
  });
  if (loading) return null;
  if (error) return null;
  const room = data.room;

  return (
    <TouchableOpacity
      onPress={() => {
        navigate('Room', { room });
      }}
      style={styles.card}
    >
      <View style={styles.profilePicture}>
        <ProfileIcon />
      </View>
      <View>
        <Text numberOfLines={1} style={styles.conversationName}>
          {room.name}
        </Text>
        <Text numberOfLines={1} style={styles.des}>
          {room.messages[0].body}
        </Text>
      </View>
      <Text style={styles.availableTime}>24 m ago</Text>
      <View style={styles.available}></View>
    </TouchableOpacity>
  );
}
