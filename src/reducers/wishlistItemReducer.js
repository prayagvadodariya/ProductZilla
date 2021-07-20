import AsyncStorage from '@react-native-async-storage/async-storage';
import { objectOf } from 'prop-types';
import * as Types from '../constant/ActionKeys';
import * as StorageKeys from '../constant/StorageKeys';


const INITIAL_STATE =  {
  data: [],
};

const wishlistItemReducer =  (state = INITIAL_STATE, action) => {
 
  switch (action.type) {
    case Types.WISH_LIST_STORE: {
      
      return {
        data: [...state.data, ...action.item]
        }
      }
    case Types.ADD_TO_WISHLIST: {
      AsyncStorage.setItem(StorageKeys.WISHLIST_ITEMS, JSON.stringify([...state.data, action.item]));
      return  {
        data: [...state.data, action.item]
      }
    } 
    case Types.REMOVE_FROM_WISHLIST: {
      state.data.splice(action.index, 1);
      let setdatastore = state.data
     
      AsyncStorage.setItem(StorageKeys.WISHLIST_ITEMS, JSON.stringify(setdatastore))
      return  {
        data:  state.data
      }
    } 
    case Types.EDIT_FROM_WISHLIST: {
      console.log("updateok",action.index);
      {
        var temp = state.data
         let  index = action.index
          let  oldItem = state.data.findIndex((em) => em.id=== index);
           let clonedItem = Object.freeze(({}, oldItem, action.item));
           let setdatastore = temp.slice(0, index).
           concat([clonedItem]).
           concat(temp.slice(index + 1))

           
            AsyncStorage.setItem(StorageKeys.WISHLIST_ITEMS, JSON.stringify(setdatastore))
        return ({}, state, {
            data: temp.slice(0, index).
                concat([clonedItem]).
                concat(temp.slice(index + 1)),
                     
                
        } );
      }
    } 
    default:
      return state
  }
};

export default wishlistItemReducer