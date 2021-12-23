import React from 'react';
import { Animated, View } from 'react-native';
import { styles } from './TypingIndicator.style';
import { TypingAnimation } from 'react-native-typing-animation';
import TWGIcon from '../../svg/TWGIcon';

export default function TypingIndicator({ isTyping }) {
  return (
    <>
      {isTyping ? (
        <View style={styles.container}>
          <View style={styles.icon}>
            <TWGIcon />
          </View>
          <Animated.View style={styles.animated}>
            <TypingAnimation
              style={{ position: 'relative', top: 5, left: 17 }}
              dotRadius={5}
              dotMargin={12}
              dotColor={'#B6DEFD'}
            />
          </Animated.View>
        </View>
      ) : null}
    </>
  );
}
