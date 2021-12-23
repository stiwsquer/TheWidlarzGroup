import React, { useState, useEffect, useMemo } from 'react';
import { Text, TextInput, View, TouchableNativeFeedback } from 'react-native';
import { styles } from './CustomInput.style';
import VisionIcon from '../../svg/VisionIcon';
import VisionLowIcon from '../../svg/VisionLowIcon';
import debounce from 'lodash.debounce';

const CustomInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [typing, setTyping] = useState(false);
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];
  const password = name === 'password';

  const handleChange = async () => {
    setTyping(false);
  };

  const debouncedHandleChange = useMemo(() => debounce(handleChange, 400), []);

  useEffect(() => {
    return () => {
      debouncedHandleChange.cancel();
    };
  }, []);

  return (
    <>
      <View style={styles.field} {...inputProps}>
        <Text style={styles.label}>
          {name === 'email' ? 'e-mail address' : name}
        </Text>
        <View style={styles.fieldContainer}>
          <TextInput
            style={[
              styles.input,
              hasError && styles.errorInput,
              typing && styles.typingInput,
            ]}
            onChangeText={(text) => {
              setTyping(true);
              debouncedHandleChange();
              return onChange(name)(text);
            }}
            // onChangeText={(text) => onChange(name)(text)}
            value={value}
            onBlur={() => {
              setFieldTouched(name);
              onBlur(name);
            }}
            secureTextEntry={password && !showPassword}
          />

          {password ? (
            <TouchableNativeFeedback
              onPress={() => setShowPassword((prev) => !prev)}
            >
              <View style={styles.visionIcon}>
                {showPassword ? <VisionLowIcon /> : <VisionIcon />}
              </View>
            </TouchableNativeFeedback>
          ) : null}
        </View>

        {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
      </View>
    </>
  );
};

export default CustomInput;
