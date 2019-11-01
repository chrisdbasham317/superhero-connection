import { isLoading, hasErrored, setHeroes } from '../Actions';
import { getDefaultHeroes } from '../helpers/helperFuncs';

export const fetchHeroes = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch('https://akabab.github.io/superhero-api/api/all.json')
      if (!response.ok) {
        throw Error(response.statusText)
      }
      let heroes = await response.json();
      heroes = getDefaultHeroes(heroes);
      dispatch(isLoading(false));
      dispatch(setHeroes(heroes));
    } catch (error) {
      dispatch(isLoading(false));
      dispatch(hasErrored(error.message))
    }
  }
}

  

