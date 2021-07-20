import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Types from '../constant/RecentlyItemKeys';
import * as StorageKeys from '../constant/StorageKeys';

export const RecentlyItemStorageAction = () => {
  return async (dispatch) => {
    var itemget = await AsyncStorage.getItem(StorageKeys.RECENTLY_VIEW_ITEMS);
    const item  = JSON.parse(itemget);
    if(item!=null){
    dispatch({
      type: Types.STORE_ITEM,
      item
    });
   }
  }
}

export const addItemAction = (productitem) => {
  return async (dispatch) => {
    dispatch({
      type: Types.ADD_ITEM,
      item: productitem
    });
  }
}


export const removeItemAction = (index) => {
  return async (dispatch) => {
    dispatch({
      type: Types.REMOVE_ITEM,
      index: index
    });
  }
}