import { combatant1 } from '../combatant1';

describe('combatant1 reducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = combatant1(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a new name', () => {
    const mockAction = {
      type: 'SET_COMBATANT_1',
      name: 'Superman'
    }
    const expected = 'Superman';
    const result = combatant1('', mockAction);

    expect(result).toEqual(expected);
  });
});