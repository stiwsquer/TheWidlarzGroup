import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B6DEFD',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    position: 'absolute',
    fontFamily: 'poopins-700',
    color: '#5603AD',
    fontSize: 28,
    lineHeight: 42,
    width: '100%',
    top: 76,
    left: 16,
  },

  description: {
    fontFamily: 'poopins-700',
    color: 'white',
    flex: 1,
    left: 16,
    top: 142,
    width: '80%',
    fontSize: 22,
    lineHeight: 33,
    position: 'absolute',
  },

  form: {
    position: 'absolute',
    top: 244,
    bottom: 0,
    width: '80%',
  },

  signUp: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '15%',
    justifyContent: 'center',
  },

  signUpText1: {
    fontFamily: 'poopins-400',
    color: 'white',
  },

  signUpText2: {
    fontFamily: 'poopins-600',
    color: '#5603AD',
    marginLeft: 12,
  },
});
