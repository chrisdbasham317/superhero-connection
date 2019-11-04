export const getDefaultHeroes = (heroes) => {
  const defaultHeroIds = [38, 60, 63, 70, 76, 93, 95, 98, 204, 230, 459, 413, 387, 265, 289, 298, 306, 579, 601, 632, 644, 642, 686];
  const defaultHeroes = defaultHeroIds.map(id => {
    return heroes.reduce((acc, currentHero) => {
      return currentHero.id === id ? currentHero : acc;
    }, [])
  });
  return defaultHeroes;    
}