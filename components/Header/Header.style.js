import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    position: 'relative',
    width: '100%',
    height: 120,
    left: 0,
    top: 0,
    backgroundColor: '#B6DEFD',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 10,
    paddingHorizontal: 15,
  },
  headerContent: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#5603AD',
    fontSize: 28,
    fontFamily: 'poopins-bold',
    flex: 1,
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 100,
    backgroundColor: 'white',
    marginHorizontal: 6,
  },
  des: {},
  name: {
    fontFamily: 'poopins-600',
    color: '#5603AD',
    width: '50%',
  },
  active: {
    fontFamily: 'poopins-400',
    color: 'white',
    width: '50%',
  },
});
