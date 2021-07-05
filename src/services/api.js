import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StorageKeys from '../constant/StorageKeys';

export const NEW_BASE_URL = 'https://prayagnetworld301.wixsite.com/productzilla/_api/';
export const BASE_URL = 'https://www.wixapis.com/stores/v1/';

(async()=>{
    const accessToken = await AsyncStorage.getItem(StorageKeys.AUTH_TOKEN);
    const auth_code = JSON.parse(accessToken);
})



export const headers = {  
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

export const headers1= {
    'Content-Type': 'application/json',
    'Accept' : 'application/json',
    'Authorization' : ''
}