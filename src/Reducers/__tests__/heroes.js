import { heroes } from '../heroes';

describe('heroes reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = heroes(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a new array of heroes', () => {
    const mockHeroes = [{name: 'Superman'}, {name: 'Superboy'}]
    const mockAction = {
      type: 'SET_HEROES',
      heroes: mockHeroes
    }
    const expected = mockHeroes;
    const result = heroes([], mockAction);

    expect(result).toEqual(expected);
  });
});