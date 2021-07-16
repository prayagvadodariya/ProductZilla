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
    case Types.REMOVE_ITEM: {
      state.data.splice(action.index, 1);
      // let setdatastore = state.data
      // AsyncStorage.setItem(StorageKeys.USER_DATA, JSON.stringify(setdatastore))
      return  {
        data:  state.data
      }
    }  
    default:
      return state
  }
}

export default RecentlyItemReducer;