import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginBottom: 12,
    width: '100%',
    minHeight: 100,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 14,
  },
  profilePicture: {
    backgroundColor: 'gray',
    width: 64,
    height: 64,
    borderRadius: 100,
    marginLeft: 15,
    marginRight: 15,
  },
  conversationName: {
    fontFamily: 'poopins-500',
    width: '70%',
  },
  des: { fontFamily: 'poopins-400', width: '80%' },
  availableTime: {
    position: 'absolute',
    right: 16,
    top: 8,
    color: 'rgba(0, 0, 0, 0.3)',
  },
  available: {
    position: 'absolute',
    right: 16,
    top: 12,
    backgroundColor: '#A8FF76',
    width: 12,
    height: 12,
    borderRadius: 100,
  },
});
export default styles;
