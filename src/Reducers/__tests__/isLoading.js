import { isLoading } from '../isLoading';

describe('isLoading reducer', () => {
  it('should return the initial state', () => {
    const expected = false;
    const result = isLoading(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state boolean', () => {
    const mockAction = {
      type: 'IS_LOADING',
      isLoading: true
    }
    const expected = true;
    const result = isLoading(false, mockAction);

    expect(result).toEqual(expected);
  });
});