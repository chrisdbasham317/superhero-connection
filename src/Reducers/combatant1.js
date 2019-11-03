export const combatant1 = (state = '', action) => {
  switch (action.type) {
    case 'SET_COMBATANT_1':
      return action.name;
    default:
      return state;
  }
}