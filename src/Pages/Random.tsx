import { useState, useEffect } from "react";
import { CocktailType } from "../../global";
import { AiFillYoutube } from "react-icons/ai";
import { getRand } from "../Utils/fetchData";
import { motion as m } from "framer-motion";
import { debounce } from "../Utils/debounce";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Style/index.scss";

const Random = () => {
  const [randomCocktail, setRandomCocktail] = useState<CocktailType[]>();
  const [ingredients, setIngredients] = useState<String[]>();

  const getCocktail = async () => {
    const cocktail = await getRand();
    const allIgredients: string[] = [];
    Object.entries(cocktail[0]).forEach((ingredient) => {
      if (ingredient[0].startsWith("strIngredient") && ingredient[1]) {
        allIgredients.push(ingredient[1]);
      }
    });
    setRandomCocktail(cocktail);
    setIngredients(allIgredients);
  };

  useEffect(() => {
    getCocktail();
  }, []);

  const split = (tag: string) => {
    const tags: string[] = tag.split(",");
    return tags;
  };

  return (
    <>
      <Navbar />
      <div className="randomPage">
        <div className="leftRand">
          {randomCocktail && (
            <>
              <div className="card">
                <img src={randomCocktail[0].strDrinkThumb} alt="" />
                <p>{randomCocktail[0].strDrink}</p>
                {randomCocktail[0].strVideo && (
                  <>
                    <a href={randomCocktail[0].strVideo}>
                      <AiFillYoutube color={"#cc2e38"} size={35} />
                    </a>
                  </>
                )}
                {randomCocktail[0].strTags && (
                  <div className="tags">
                    {split(randomCocktail[0].strTags).map((tag: string) => {
                      return (
                        <div className="tags">
                          <p className="tag">{tag}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <div className="rightRand">
          <h2 className="ingTitle"> Ingredients </h2>
          <div className="ingredients">
            {ingredients?.map((ingredient, key) => {
              return (
                <div className="ingredient" key={key}>
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`}
                    alt={`${key}`}
                  />
                  <p>{ingredient}</p>
                </div>
              );
            })}
          </div>

          <h2 className="howText">How to </h2>
          {randomCocktail && (
            <div className="randText">
              {randomCocktail[0].strInstructions && (
                <>
                  <p>{randomCocktail[0].strInstructions}</p>
                </>
              )}
            </div>
          )}

          <div className="giveButton">
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={debounce(getCocktail, 1000)}
            >
              Give Another
            </m.button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Random;
