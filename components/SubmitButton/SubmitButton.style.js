import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#5603AD',
    elevation: 3,
  },
  pressedButton: {
    backgroundColor: '#390273',
  },
  disabledButton: {
    backgroundColor: '#BFC1CC',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'poopins-600',
    fontSize: 16,
    alignSelf: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
