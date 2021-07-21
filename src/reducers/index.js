import { combineReducers } from 'redux';
import recentlyItemReducer from './recentlyItemReducer';
import wishlistItemReducer from './wishlistItemReducer';
import cartItemReducer from './cartItemReducer';

const rootReducer = combineReducers({
  recentlyItemReducer,
  wishlistItemReducer,
  cartItemReducer
});

export default rootReducer;

