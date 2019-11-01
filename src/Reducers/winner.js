export const winner = (state = null, action) => {
  switch (action.type) {
    case 'SET_WINNER':
      return action.winnerId;
    default:
      return state;
  }
}