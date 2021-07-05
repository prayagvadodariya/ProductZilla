import React, {useState,useEffect, Component} from 'react';
import * as services from '../services/services_hendler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StorageKeys from '../constant/StorageKeys';

const InitialLoadData = () => {
    
  useEffect (() => {
    services.getdynamicmodelApi().then(data => {
    AsyncStorage.setItem(StorageKeys.AUTH_TOKEN, JSON.stringify(data.apps['14f25924-5664-31b2-9568-f9c5ed98c9b1'].instance))
    console.log('check',data.apps['14f25924-5664-31b2-9568-f9c5ed98c9b1'].instance);
    })  
  },[])
  return null
}

export default InitialLoadData;