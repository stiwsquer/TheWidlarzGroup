import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  textInput: {
    color: 'black',
    padding: 12,
    borderColor: 'white',
    backgroundColor: 'white',
    borderColor: '#5603AD',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  inputToolbar: {
    padding: 16,
    paddingEnd: 10,
    backgroundColor: '#B6DEFD',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  bubbleLeft: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderBottomLeftRadius: 0,
    padding: 12,
    marginBottom: 12,
    marginLeft: 52,
  },
  bubbleRight: {
    backgroundColor: '#993AFC',
    borderRadius: 12,
    borderBottomRightRadius: 0,
    padding: 12,
    marginBottom: 12,
    marginRight: 24,
  },
});

export default styles;
