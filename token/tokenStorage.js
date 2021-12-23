import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('loginUser');
    const data = jsonValue != null ? JSON.parse(jsonValue) : null;
    if (data) {
      const {
        loginUser: { token },
      } = data;
      console.log(token);
      return token;
    }
    return null;
  } catch (e) {
    console.error(e);
  }
};

export const storeLoginUser = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('loginUser', jsonValue);
  } catch (e) {
    console.error(e);
  }
};
