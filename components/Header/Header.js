import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import SearchIcon from '../../svg/SearchIcon';
import RoomsIcon from '../../svg/RoomsIcon';
import PhoneIcon from '../../svg/PhoneIcon';
import TWGIcon from '../../svg/TWGIcon';
import LeftArrowIcon from '../../svg/LeftArrowIcon';
import VideoCallIcon from '../../svg/VideoCallIcon';
import { navigate } from '../../navigation/RootNavigation';
import styles from './Header.style';

export default function Header({ rooms, name }) {
  return (
    <View style={[styles.header, { marginBottom: rooms ? 36 : 0 }]}>
      <View style={styles.headerContent}>
        {rooms ? (
          <Text style={styles.title}>Rooms</Text>
        ) : (
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
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
              <Text numberOfLines={1} style={styles.name}>
                {name}
              </Text>
              <Text numberOfLines={1} style={styles.active}>
                Active now
              </Text>
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
