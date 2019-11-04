import { error } from '../error';

describe('error reducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = error(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a new error message', () => {
    const mockAction = {
      type: 'SET_ERROR',
      error: 'This errored'
    }
    const expected = 'This errored';
    const result = error('', mockAction);

    expect(result).toEqual(expected);
  });
});