import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { navigate } from '../navigation/RootNavigation';
import ProfileIcon from '../svg/ProfileIcon';
import { useQuery } from '@apollo/client';
import { GET_ROOM } from '../queries/queries';

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
          {item.name}
        </Text>
        <Text numberOfLines={1} style={styles.des}>
          {data.room.messages[0].body}
        </Text>
      </View>
      <Text style={styles.availableTime}>24 m ago</Text>
      <View style={styles.available}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginBottom: 12,
    width: '100%',
    minHeight: 100,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 14,
  },
  profilePicture: {
    backgroundColor: 'gray',
    width: 64,
    height: 64,
    borderRadius: 100,
    marginLeft: 15,
    marginRight: 15,
  },
  conversationName: {
    fontFamily: 'poopins-500',
    width: '70%',
  },
  des: { fontFamily: 'poopins-400', width: '80%' },
  availableTime: {
    position: 'absolute',
    right: 16,
    top: 8,
    color: 'rgba(0, 0, 0, 0.3)',
  },
  available: {
    position: 'absolute',
    right: 16,
    top: 12,
    backgroundColor: '#A8FF76',
    width: 12,
    height: 12,
    borderRadius: 100,
  },
});
