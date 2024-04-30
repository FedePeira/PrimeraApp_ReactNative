import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
 constructor(namespace = 'auth') {
    this.namespace = namespace;
 }

 async getAccessToken() {
    try {
      console.log('Obteniendo Token...')
      const value = await AsyncStorage.getItem(`${this.namespace}:accessToken`);
      return value
    } catch (error) {
      console.error(error);
    }
 }

 async setAccessToken(accessToken) {
    try {
      console.log('Seteando Token...')
      await AsyncStorage.setItem(`${this.namespace}:accessToken`, accessToken);
    } catch (error) {
      console.error(error);
    }
 }

 async removeAccessToken() {
    try {
      console.log('Borrando Token...')
      await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
    } catch (error) {
      console.error(error);
    }
 }
}

export default AuthStorage;