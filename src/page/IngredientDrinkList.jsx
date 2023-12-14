import Header from "../partial/Header";
import {useEffect, useState} from "react";
import DrinkCard from "../partial/DrinkCard";
import Section from "../partial/Section";
import SectionDetails from "../partial/SectionDetails";
import {useParams} from "react-router-dom";
import Footer from "../partial/Footer";

const IngredientDrinkList = () => {
    const {ingredientName} = useParams();

    const [ingredientDrinks, setIngredientDrinks] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const ingredientResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + encodeURIComponent(ingredientName));
                const ingredientResponseData = await ingredientResponse.text();

                if (ingredientResponseData.length < 1) {
                    setError("The ingredient you've requested doesn't exist.");
                    return;
                }

                setIngredientDrinks(JSON.parse(ingredientResponseData).drinks);
            } catch (e) {
                setError("An error occurred. Please try again.");
            }
        })();
    }, []);

    return (<>
        <Header/>

        <Section>
            <SectionDetails title={"Ingredient: " + ingredientName} description="So you were looking with something like this in yoour drink? Here you go!"/>

            <div className="row">
                {error ? <div className="alert alert-danger" role="alert">
                    {error}
                </div> : <>
                    {ingredientDrinks ? <>
                        {ingredientDrinks.map((drink) => {
                            return <>
                                <div className="col-6 col-md-4 col-lg-3 mb-4">
                                    <DrinkCard drink={drink}/>
                                </div>
                            </>
                        })}
                    </> : <>
                        {[...Array(12)].map(() => <>
                            <div className="col-6 col-md-4 col-lg-3 mb-4">
                                <DrinkCard/>
                            </div>
                        </>)}
                    </>}
                </>}
            </div>
        </Section>
        <Footer/>
    </>);
};

export default IngredientDrinkList;