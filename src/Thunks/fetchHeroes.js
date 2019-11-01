import { isLoading, hasErrored, setHeroes } from '../Actions';

export const fetchHeroes = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch('https://akabab.github.io/superhero-api/api/all.json')
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const heroes = await response.json();
      dispatch(isLoading(false));
      dispatch(setHeroes(heroes));
    } catch (error) {
      dispatch(isLoading(false));
      dispatch(hasErrored(error.message))
    }
  }
}

  

