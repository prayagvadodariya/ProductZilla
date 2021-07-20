import { combineReducers } from 'redux';
import recentlyItemReducer from './recentlyItemReducer';
import wishlistItemReducer from './wishlistItemReducer';

const rootReducer = combineReducers({
  recentlyItemReducer,
  wishlistItemReducer,
});

export default rootReducer;

