export const isLoading = bool => ({
  type: 'IS_LOADING',
  bool
});

export const hasErrored = msg => ({
  type: 'HAS_ERRORED',
  msg
});

export const setHeroes = heroes => ({
  type: 'SET_HEROES',
  heroes
})