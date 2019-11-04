import * as actions from './index';

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    };
    const result = actions.isLoading(true);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of HAS_ERRORED', () => {
    const expectedAction = {
      type: 'HAS_ERRORED',
      error: 'This errored'
    };
    const result = actions.hasErrored('This errored');

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_HEROES', () => {
    const mockHeroes = [{name: 'superman'}, {name:'superboy'}]
    const expectedAction = {
      type: 'SET_HEROES',
      heroes: mockHeroes
    };
    const result = actions.setHeroes(mockHeroes);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_WINNER', () => {
    const expectedAction = {
      type: 'SET_WINNER',
      name: 'Superman'
    };
    const result = actions.setWinner('Superman');

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_COMBATANT_1', () => {
    const expectedAction = {
      type: 'SET_COMBATANT_1',
      name: "Superman"
    };
    const result = actions.setCombatant1("Superman");

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_COMBATANT_2', () => {
    const expectedAction = {
      type: 'SET_COMBATANT_2',
      name: "Superman"
    };
    const result = actions.setCombatant2("Superman");

    expect(result).toEqual(expectedAction);
  });

  
});