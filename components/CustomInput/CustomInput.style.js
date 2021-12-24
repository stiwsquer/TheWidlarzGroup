import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  label: {
    fontFamily: 'poopins-500',
    color: 'white',
    fontSize: 15,
    lineHeight: 22.5,
  },
  input: {
    backgroundColor: 'white',
    marginTop: 4,
    padding: 12,
    borderRadius: 10,
    flex: 1,
  },

  fieldContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  visionIcon: {
    backgroundColor: 'white',
    position: 'absolute',
    right: 10,
    padding: 5,
  },
  errorText: {
    fontFamily: 'poopins-400',
    color: '#FF445A',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  errorInput: {
    borderWidth: 2,
    borderColor: '#FF445A',
  },

  typingInput: {
    borderWidth: 2,
    borderColor: '#5603AD',
  },
});
export default styles;
