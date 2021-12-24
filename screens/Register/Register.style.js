import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 1000,
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

  form: {
    position: 'absolute',
    top: 154,
    bottom: 0,
    width: '80%',
  },

  field: {
    marginTop: 16,
  },
});
export default styles;
