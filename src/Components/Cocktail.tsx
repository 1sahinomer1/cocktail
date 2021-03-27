import { CocktailType } from "global";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

type CocktailProps = {
  cocktail: CocktailType;
};

function Cocktail({ cocktail }: CocktailProps) {
  <Navbar></Navbar>;
  return (
    <div className="searchCard">
      <div className="img">
        <img src={`${cocktail.strDrinkThumb}`} loading="lazy" alt=""></img>
      </div>
      <p className="cocktailName">{cocktail.strDrink}</p>
      <p className="cocktailCategory">{cocktail.strCategory}</p>
      <Link className="link" to={`detail/${cocktail.idDrink}`}>
        Click to Detail
      </Link> 
    </div>
  );
}

export default Cocktail;
