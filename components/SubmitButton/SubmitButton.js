import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './SubmitButton.style';

export default function SubmitButton({
  handleSubmit,
  isValid,
  text,
  ...buttonProps
}) {
  const [buttonPressed, setButtonPressed] = useState(false);
  return (
    <View style={styles.buttonContainer} {...buttonProps}>
      <Pressable
        style={[
          styles.button,
          buttonPressed && styles.pressedButton,
          !isValid && styles.disabledButton,
        ]}
        onPress={handleSubmit}
        onPressOut={() => setButtonPressed(false)}
        onPressIn={() => setButtonPressed(true)}
        title="Submit"
        disabled={!isValid}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
}
