import { isLoading, hasErrored, setHeroes } from '../Actions';


export const fetchHeroes = () => {
  const defaultHeroIds = [38, 60, 63, 69, 76, 93, 95, 98, 204, 230, 459, 413, 387, 263, 298, 306, 579, 601, 632, 644, 642]
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const heroFetch = defaultHeroIds.map(id => {
        const response = await fetch(`https://superheroapi.com/api/10157857262907049/${id}`)
        if (!response.ok) {
          throw Error(response.statusText)
        }
      });
      const heroes = await heroFetch.json();
      dispatch(isLoading(false));
      dispatch(setHeroes(heroes));
    } catch {
      dispatch(isLoading(false));
      dispatch(hasErrored(error.message))
    }
  }
}

