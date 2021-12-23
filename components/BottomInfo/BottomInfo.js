import React from 'react';
import { View, Text } from 'react-native';
import { navigate } from '../../navigation/RootNavigation';
import { styles } from './BottomInfo.style';

export default function BottomInfo({
  question,
  linkText,
  route,
  inLineStyles,
  ...infoProps
}) {
  return (
    <View style={[styles.text, inLineStyles]} {...infoProps}>
      <Text style={styles.question}>{question}</Text>
      <Text
        onPress={() => {
          navigate(route);
        }}
        style={styles.link}
      >
        {linkText}
      </Text>
    </View>
  );
}
