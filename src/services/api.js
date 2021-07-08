import * as servicesHandler from './services_hendler';

const NEW_BASE_URL = 'https://prayagnetworld301.wixsite.com/productzilla/_api/';
const BASE_URL = 'https://www.wixapis.com/stores/v1/';


export const getdynamicmodelApi = () => {
    let URL = NEW_BASE_URL + 'v2/dynamicmodel';
     return servicesHandler.Get(URL)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error
      });
}

export const loginApi = (Parameter) => {
    let URL = NEW_BASE_URL + 'wix-sm-webapp/v1/auth/login';
       return servicesHandler.Post(URL, Parameter)
        .then(response => {
          return response;
        })
        .catch(error => {
          return error
        });
  }

export const onCollectionsApi = () => {
    let URL = BASE_URL + "collections/query";
       return servicesHandler.PostWithHeader(URL)
        .then(response => {
          return response;
        })
        .catch(error => {
          return error
        });
}

export const onProductsApi = (Parameter) => {
  let URL = BASE_URL + "products/query";
     return servicesHandler.PostWithHeader(URL, Parameter)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error
      });
}

export const onProductsDetailsApi = (Parameter) => {
  let URL = BASE_URL + "products/" + Parameter;
     return servicesHandler.GetWithHeader(URL)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error
      });
}



