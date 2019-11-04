export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = msg => ({
  type: 'HAS_ERRORED',
  error: msg
});

export const setHeroes = heroes => ({
  type: 'SET_HEROES',
  heroes
});

export const setWinner = name => ({
  type: 'SET_WINNER',
  name
});

export const setCombatant1 = name => ({
  type: 'SET_COMBATANT_1',
  name
});

export const setCombatant2 = name => ({
  type: 'SET_COMBATANT_2',
  name
});