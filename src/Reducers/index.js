import { combineReducers } from 'redux';
import { heroes } from './heroes';
import { isLoading } from './isLoading';
import { error } from './error';
import { winner } from './winner';
import { combatant1 } from './combatant1';
import { combatant2 } from './combatant2';

 
const rootReducer = combineReducers({
  heroes,
  isLoading,
  error,
  winner,
  combatant1,
  combatant2
});


export default rootReducer;