import { winner } from '../winner';

describe('winner reducer', () => {
  it('should return the initial state', () => {
    const expected = null;
    const result = winner(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a new name', () => {
    const mockAction = {
      type: 'SET_WINNER',
      name: 'Superman'
    }
    const expected = 'Superman';
    const result = winner(null, mockAction);

    expect(result).toEqual(expected);
  });
});