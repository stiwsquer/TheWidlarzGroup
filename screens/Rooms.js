import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Header from '../components/Header';
import RoomListItem from '../components/RoomListItem';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../queries/queries';

export default function Rooms() {
  const { loading, error, data } = useQuery(GET_ROOMS);
  if (loading) return null;
  if (error) return null;

  return (
    <View style={styles.container}>
      <Header rooms={true} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={data.usersRooms.rooms}
        renderItem={({ item }) => <RoomListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
});
