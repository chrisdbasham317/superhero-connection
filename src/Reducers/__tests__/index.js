import * as actions from '../../Actions';
import rootReducer from '../index';
import { createStore } from 'redux';


describe('rootReducer', () => {
  it('should handle global store', () => {
    const store = createStore(rootReducer, {});
    const expected = { heroes: [], isLoading: true, error: '', winner: null, combatant1: '', combatant2: '' };
    const action = actions.isLoading(true, { type: 'IS_LOADING', isLoading: false });
    store.dispatch(action);
    const result = store.getState();
    expect(result).toEqual(expected);
  });
});