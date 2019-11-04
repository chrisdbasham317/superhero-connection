import { combatant2 } from '../combatant2';

describe('combatant2 reducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = combatant2(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a new name', () => {
    const mockAction = {
      type: 'SET_COMBATANT_2',
      name: 'Superman'
    }
    const expected = 'Superman';
    const result = combatant2('', mockAction);

    expect(result).toEqual(expected);
  });
});