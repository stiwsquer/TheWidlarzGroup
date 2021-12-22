import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Header from '../components/Header';
import RoomListItem from '../components/RoomListItem';

export default function Rooms() {
  const data = ['dsf', 'sfd', 'sdf'];
  return (
    <View style={styles.container}>
      <Header rooms={true} />
      <FlatList
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.5}
        // onEndReached={() => fetchData(value, nextPage, searchLimit)}
        data={data}
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
