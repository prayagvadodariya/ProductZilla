import * as services  from '../services/api';
import axios from 'axios';


export const getdynamicmodelApi = () => {
    let URL = services.NEW_BASE_URL + 'v2/dynamicmodel';
     return axios.get(URL)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error
      });
}

export const LoginApi = (Parameter) => {
    let URL = services.NEW_BASE_URL + 'wix-sm-webapp/v1/auth/login';
       return axios.post(URL, Parameter)
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error
        });
  }
  
  export const onCollectionsApi = (Parameter) => {
    let URL = services.BASE_URL + "collections/query";
    let headers = services.headers1
       return axios.post(URL, Parameter, { headers })
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error
        });
  }