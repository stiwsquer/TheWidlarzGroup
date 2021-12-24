import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  animated: {
    marginBottom: 10,
    width: 67,
    height: 32,
    borderRadius: 12,
    borderBottomLeftRadius: 0,
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginBottom: 52,
  },
  icon: {
    transform: [{ scale: 0.55 }],
  },
});
export default styles;
