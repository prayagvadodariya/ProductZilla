import AsyncStorage from '@react-native-async-storage/async-storage';
import { InteractionManager } from 'react-native';
import * as Types from '../constant/ActionKeys';
import * as StorageKeys from '../constant/StorageKeys';

export const cartStorageAction = () => {

  return async (dispatch) => {
    var itemget = await AsyncStorage.getItem(StorageKeys.CART_ITEMS);
    const item  = JSON.parse(itemget);
    if(item!=null){
    dispatch({
      type: Types.CART_STORE,
      item
    });
   }
  }
}

  export const addToCart = (cardItem) => {
    return async (dispatch) => {
      dispatch({
        type: Types.ADD_TO_CART,
        item: cardItem
      });
    }
  }

  export const removeFromCart = (Id) => {
    return async (dispatch) => {
      dispatch({
        type: Types.REMOVE_FROM_CART,
        index: Id
      });
    }
  }

  export const editFromCart = (editItem, id) => {
    return async (dispatch) => {
      dispatch({
        type: Types.EDIT_FROM_CART,
        item: editItem,
        index: id
      })
    }
  }