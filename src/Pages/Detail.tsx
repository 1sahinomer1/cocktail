import { useEffect, useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { CocktailType } from "../../global";
import { getId } from "../Utils/fetchData";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Detail() {
  const { id } = useParams<any>();
  const [idCocktail, setIdCocktail] = useState<CocktailType[]>();
  const [ingredients, setIngredients] = useState<String[]>();

  const getCocktail = async (id: string) => {
    const cocktail = await getId(id);
    setIdCocktail(cocktail);
    const allIgredients: string[] = [];
    Object.entries(cocktail[0]).forEach((ingredient) => {
      if (ingredient[0].startsWith("strIngredient") && ingredient[1]) {
        allIgredients.push(ingredient[1]);
      }
    });
    setIngredients(allIgredients);
  };
  useEffect(() => {
    getCocktail(id);
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
          {idCocktail && (
            <>
              <div className="card">
                <img src={idCocktail[0].strDrinkThumb} alt="" />
                {idCocktail[0].strVideo && (
                  <>
                    <a href={idCocktail[0].strVideo}>
                      <AiFillYoutube color={"#cc2e38"} size={35} />
                    </a>
                  </>
                )}
                {idCocktail[0].strTags && (
                  <div className="tags">
                    {split(idCocktail[0].strTags).map((tag: string) => {
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
          <h2 className="ingTitle">Ingredients :</h2>
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
          <h2 className="howText">How to :</h2>
          {idCocktail && (
            <div className="randText">
              {idCocktail[0].strInstructions && (
                <>
                  <p>{idCocktail[0].strInstructions}</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
