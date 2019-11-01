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

export const setWinner = id => ({
  type: 'SET_WINNER',
  winnerId: id
});

export const setModal = bool => ({
  type: 'SET_MODAL',
  bool
})