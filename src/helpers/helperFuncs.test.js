import { getDefaultHeroes } from './helperFuncs';

describe('getDefaultHeroes', () => {
  it('should return a reduced array of heroes', () => {
    const mockHeroes = [
      {
        id: 38,
        name: 'Chris'
      },
      {
        id: 39,
        name: 'Not Chris'
      },
      {
        id: 60,
        name: 'Superman'
      },
      {
        id: 63,
        name: 'Superman'
      },
      {
        id: 70,
        name: 'Superman'
      },
      {
        id: 76,
        name: 'Superman'
      },
      {
        id: 93,
        name: 'Superman'
      },
      {
        id: 95,
        name: 'Superman'
      },
      {
        id: 98,
        name: 'Superman'
      },
      {
        id: 204,
        name: 'Superman'
      },
      {
        id: 230,
        name: 'Superman'
      },
      {
        id: 459,
        name: 'Superman'
      },
      {
        id: 413,
        name: 'Superman'
      },
      {
        id: 387,
        name: 'Superman'
      },
      {
        id: 265,
        name: 'Superman'
      },
      {
        id: 289,
        name: 'Superman'
      },
      {
        id: 298,
        name: 'Superman'
      },
      {
        id: 306,
        name: 'Superman'
      },
      {
        id: 579,
        name: 'Superman'
      },
      {
        id: 601,
        name: 'Superman'
      },
      {
        id: 632,
        name: 'Superman'
      },
      {
        id: 644,
        name: 'Superman'
      },
      {
        id: 642,
        name: 'Superman'
      },
      {
        id: 686,
        name: 'Superman'
      }
    ];
    expect(mockHeroes.length).toEqual(24);
    const result = getDefaultHeroes(mockHeroes);
    expect(result.length).toEqual(23);
  });
});
