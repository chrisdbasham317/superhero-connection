export const heroes = (state = [], action) => {
  switch (action.type) {
    case 'SET_HEROES':
      return action.heroes;
    default:
      return state;
  }
}