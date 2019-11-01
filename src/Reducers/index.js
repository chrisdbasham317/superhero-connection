import { combineReducers } from 'redux';
import { heroes } from './heroes';
import { isLoading } from './isLoading';
import { error } from './error';
import { winner } from './winner';
 
const rootReducer = combineReducers({
  heroes,
  isLoading,
  error,
  winner
});


export default rootReducer;