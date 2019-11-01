export const combatant1 = (state = null, action) => {
  switch (action.type) {
    case 'SET_COMBATANT_1':
      return action.id;
    default:
      return state;
  }
}