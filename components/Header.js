import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SearchIcon from '../svg/SearchIcon';
import RoomsIcon from '../svg/SearchIcon';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.title}>Rooms</Text>
        <View style={styles.image}>
          <SearchIcon />
        </View>
        <View style={styles.image}>
          <RoomsIcon />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    width: '100%',
    height: 120,
    left: 0,
    top: 0,
    backgroundColor: '#B6DEFD',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 10,
    paddingHorizontal: 15,
    marginBottom: 36,
  },
  headerContent: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#5603AD',
    fontSize: 28,
    fontFamily: 'poopins-bold',
    flex: 1,
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 100,
    backgroundColor: 'white',
    marginHorizontal: 6,
  },
});
