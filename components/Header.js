import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import SearchIcon from '../svg/SearchIcon';
import RoomsIcon from '../svg/RoomsIcon';
import PhoneIcon from '../svg/PhoneIcon';
import TWGIcon from '../svg/TWGIcon';
import LeftArrowIcon from '../svg/LeftArrowIcon';
import VideoCallIcon from '../svg/VideoCallIcon';
import { navigate } from '../navigation/RootNavigation';

export default function Header({ rooms }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        {rooms ? (
          <Text style={styles.title}>Rooms</Text>
        ) : (
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              // justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <TouchableNativeFeedback
              onPress={() => {
                navigate('Rooms');
              }}
            >
              <View style={{ padding: 8 }}>
                <LeftArrowIcon />
              </View>
            </TouchableNativeFeedback>

            <View style={{ marginHorizontal: 12 }}>
              <TWGIcon />
            </View>

            <View style={styles.des}>
              <Text style={styles.name}>The Widlarz Group</Text>
              <Text style={styles.active}>Active now</Text>
            </View>
          </View>
        )}
        <View style={styles.image}>
          <TouchableNativeFeedback>
            {rooms ? <SearchIcon /> : <PhoneIcon />}
          </TouchableNativeFeedback>
        </View>
        <View style={styles.image}>
          <TouchableNativeFeedback>
            {rooms ? <RoomsIcon /> : <VideoCallIcon />}
          </TouchableNativeFeedback>
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
    alignItems: 'center',
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
  des: {},
  name: {
    fontFamily: 'poopins-600',
    color: '#5603AD',
  },
  active: {
    fontFamily: 'poopins-400',
    color: 'white',
  },
});
