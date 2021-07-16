import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Types from '../constant/RecentlyItemKeys';
import * as StorageKeys from '../constant/StorageKeys';

const INITIAL_STATE =  {
  data: [],
};

const RecentlyItemReducer =  (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case Types.ADD_ITEM: {
      // AsyncStorage.setItem(StorageKeys.WISHLIST_DATA, JSON.stringify([...state.data, action.item]));
      return  {
        data: [...state.data, action.item]
      }
    } 
    default:
      return state
  }
}