import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Types from '../constant/RecentlyItemKeys';
import * as StorageKeys from '../constant/StorageKeys';

export const RecentlyItemStorageAction = () => {

}
export const addItemAction = (productitem) => {
    return async (dispatch) => {
      dispatch({
        type: Types.ADD_ITEM,
        item: productitem
      });
    }
  }