import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { navigate } from '../navigation/RootNavigation';
import ProfileIcon from '../svg/ProfileIcon';

export default function RoomListItem({ item }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('Room', { item });
      }}
      style={styles.card}
    >
      <View style={styles.profilePicture}>
        <ProfileIcon />
      </View>
      <View>
        <Text style={styles.conversationName}>The one with Ron</Text>
        <Text style={styles.des}>Ron sent a photo.</Text>
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
  },
  des: { fontFamily: 'poopins-400' },
  availableTime: {
    position: 'absolute',
    right: 16,
    top: 8,
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
