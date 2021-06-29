import * as services  from '../services/api';
import axios from 'axios';


export const getuserApi = (Parameter) =>{
    let URL = services.Api + "users?page=" + Parameter;
     return axios.get(URL)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error
      });
}

export const LoginApi = (Parameter) => {
    let URL = services.Api + "login";
       return axios.post(URL, Parameter)
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error
        });
  }
  
  export const onLogoutApi = (Parameter) => {
    let URL = services.BASE_URL + "Logout";
    let headers = services.headers1
       return axios.PostWithHeader(URL, Parameter, { headers })
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error
        });
  }