import {CocktailType} from "../../global"
export const getRand = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    const { drinks = [] } = data;
    return drinks as CocktailType[];
  };

export const getSearch = async (cocktail:string) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);
  const data = await response.json();
  const { drinks = [] } = data;
  return drinks as CocktailType[];
}
export const getId = async (id:string)=>{
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();
  const { drinks = [] } = data;
  return drinks as CocktailType[];
}