export const combatant2 = (state = null, action) => {
  switch (action.type) {
    case 'SET_COMBATANT_2':
      return action.id;
    default:
      return state;
  }
}