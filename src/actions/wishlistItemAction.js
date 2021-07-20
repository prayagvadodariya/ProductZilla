import AsyncStorage from '@react-native-async-storage/async-storage';
import { InteractionManager } from 'react-native';
import * as Types from '../constant/ActionKeys';
import * as StorageKeys from '../constant/StorageKeys';

export const wishlistStorageAction = () => {

  return async (dispatch) => {
    var itemget = await AsyncStorage.getItem(StorageKeys.WISHLIST_ITEMS);
    const item  = JSON.parse(itemget);
    // console.log('itemgeterok',item);
    if(item!=null){
    dispatch({
      type: Types.WISH_LIST_STORE,
      item
    });
   }
  }
  
}

  export const addToWishlist = (id) => {
    return async (dispatch) => {
      dispatch({
        type: Types.ADD_TO_WISHLIST,
        item: id
      });
    }
  }


  export const removeFromWishlist = (Id) => {
    return async (dispatch) => {
      dispatch({
        type: Types.REMOVE_FROM_WISHLIST,
        index: Id
      });
    }
  }
