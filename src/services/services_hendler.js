import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StorageKeys from '../constant/StorageKeys';
import axios from 'axios';


  export const Get = async (URL) => {
    return axios.get(URL)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error
      });
  }
  
  export const GetWithHeader = async (URL) => {
    var accessToken = await AsyncStorage.getItem(StorageKeys.AUTH_TOKEN);
    const auth_code = JSON.parse(accessToken);
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization' : auth_code
    }
    return axios.get(URL, { headers })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error
      });
  }

  export const Post = async (URL, Parameter) => {
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    return axios.post(URL, Parameter, { headers })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error
      });
  }
  
  export const PostWithHeader = async (URL, Parameter) => {
    var accessToken = await AsyncStorage.getItem(StorageKeys.AUTH_TOKEN);
    const auth_code = JSON.parse(accessToken);
    let headers = {
      'Content-Type': 'application/json',
      'Accept' : 'application/json',
      'Authorization' : auth_code
    }
    return axios.post(URL, Parameter, { headers })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error
      });
  }