export const combatant2 = (state = '', action) => {
  switch (action.type) {
    case 'SET_COMBATANT_2':
      return action.name;
    default:
      return state;
  }
}