import React, { useState, useEffect, useMemo } from 'react';
import { Animated, View } from 'react-native';
import { styles } from './TypingIndicator.style';
import { TypingAnimation } from 'react-native-typing-animation';
import TWGIcon from '../../svg/TWGIcon';
import { TYPING_USER_SUBSCRIPTION } from '../../gql/subscriptions';
import debounce from 'lodash.debounce';
import { useSubscription } from '@apollo/client';

export default function TypingIndicator({ roomId, userId }) {
  const [isTyping, setIsTyping] = useState(false);

  const { data, loading, error } = useSubscription(TYPING_USER_SUBSCRIPTION, {
    variables: { roomId },
  });

  useEffect(() => {
    if (!loading && !error && data) {
      if (data.typingUser.id !== userId) {
        setIsTyping(true);
        debouncedHandleChange();
      }
    }
  }, [data]);

  useEffect(() => {
    return () => {
      debouncedHandleChange.cancel();
    };
  }, []);

  const handleChange = async () => {
    setIsTyping(false);
  };

  const debouncedHandleChange = useMemo(() => debounce(handleChange, 300), []);

  if (loading) return null;
  if (error) return null;

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
