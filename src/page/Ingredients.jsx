import Header from "../partial/Header";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Footer from "../partial/Footer";

const Ingredients = () => {
    const [ingredients, setIngredients] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const ingredientsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
                const ingredientsResponseData = await ingredientsResponse.json();

                setIngredients(ingredientsResponseData.drinks);
            } catch (e) {
                setError("An error occurred. Please try again.");
            }
        })();
    }, []);

    return (<>
        <Header/>
        <div className="container">
            <div className="my-5 p-4 shadow-lg rounded-4">
                <div className="mb-5">
                    <h1>Ingredients</h1>
                    <hr/>
                    <p>Wondering about which ingredient to use? Here's a list!</p>
                </div>


                <div className="row">
                    {error ? <div className="alert alert-danger" role="alert">
                        {error}
                    </div> : <>
                        {ingredients ? <>
                            {ingredients.map((ingredient) => {
                                return <>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4">
                                        <div className="card overflow-hidden shadow-sm" aria-hidden="true">
                                            <div className="ratio ratio-1x1">
                                                {ingredient && <img src={"https://www.themealdb.com/images/ingredients/" + ingredient.strIngredient1 + "-Small.png"} alt={ingredient.strIngredient1} className="object-fit-contain"/>}
                                            </div>
                                            <div className="card-body">
                                                <h6 className="card-title placeholder-glow m-0">
                                                    <Link to={"/ingredient/" + encodeURIComponent(ingredient.strIngredient1)} className="text-black text-decoration-none stretched-link">{ingredient.strIngredient1}</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })}
                        </> : <>
                            {[...Array(12)].map(() => <>
                                <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4">
                                    <div className="card overflow-hidden" aria-hidden="true">
                                        <div className="ratio ratio-1x1 bg-secondary"></div>
                                        <div className="card-body">
                                            <h6 className="card-title placeholder-glow m-0">
                                                <span className="placeholder col-6"></span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </>)}
                        </>}
                    </>}
                </div>
            </div>
        </div>
        <Footer/>
    </>);
};

export default Ingredients;