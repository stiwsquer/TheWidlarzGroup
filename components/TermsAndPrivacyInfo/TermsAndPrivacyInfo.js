import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './TermsAndPrivacyInfo.style';
import { Linking } from 'react-native';

export default function TermsAndPrivacyInfo() {
  return (
    <View style={styles.terms}>
      <Text style={styles.terms1}>By signing up you agree with</Text>
      <View style={styles.terms2}>
        <Text
          onPress={() => {
            Linking.openURL('http://google.com');
          }}
          style={styles.termsAndPrivacy}
        >
          Terms and Conditions
        </Text>
        <Text style={{ color: 'white' }}> and </Text>
        <Text
          onPress={() => {
            Linking.openURL('http://google.com');
          }}
          style={styles.termsAndPrivacy}
        >
          Privacy Policy
        </Text>
      </View>
    </View>
  );
}
