import { useState } from "react";
import { getSearch } from "../Utils/fetchData";
import { CocktailType } from "../../global";

import Cocktail from "../Components/Cocktail";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Search() {
  const [cocktails, setCocktails] = useState<CocktailType[]>();

  const getCocktail = async (cocktailName: string) => {
    const cocktail = await getSearch(cocktailName);
    setCocktails(cocktail);
  };

  const onInput = (e: any) => {
    getCocktail(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="search">
        <div className="input">
          <p>Search Cocktail </p>
          <input
            type="text"
            placeholder="example:margarita"
            onInput={onInput}
          />
        </div>
        <div className="results">
          {cocktails && (
            <div className="searchCocktail">
              {cocktails.map((cocktail, key) => {
                return <Cocktail cocktail={cocktail} key={key} />;
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
