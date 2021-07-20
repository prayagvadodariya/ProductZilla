import React, {useState,useEffect, Component} from 'react';
import * as services from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StorageKeys from '../constant/StorageKeys';
import { connect } from 'react-redux';
import {recentlyItemStorageAction} from '../actions/recentlyItemAction';
import {wishlistStorageAction} from '../actions/wishlistItemAction'

const InitialLoadData = (props) => {
    
  useEffect (() => {
    services.getdynamicmodelApi().then(data => {
    AsyncStorage.setItem(StorageKeys.AUTH_TOKEN, JSON.stringify(data.apps['14f25924-5664-31b2-9568-f9c5ed98c9b1'].instance))
    })
    props.recentlyItemStorageAction();
    props.wishlistStorageAction();
  },[])
  return null
 }

const mapDispatchToProps = (dispatch) => ({
  recentlyItemStorageAction: () => dispatch(recentlyItemStorageAction()),
  wishlistStorageAction: () => dispatch(wishlistStorageAction()),
});

export default connect(null, mapDispatchToProps) (InitialLoadData);