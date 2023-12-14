import Header from "../partial/Header";
import {useEffect, useState} from "react";
import DrinkCard from "../partial/DrinkCard";
import Section from "../partial/Section";
import SectionDetails from "../partial/SectionDetails";
import {useParams} from "react-router-dom";
import Footer from "../partial/Footer";

const CategoryDrinkList = () => {
    const {categoryName} = useParams();

    const [categoryDrinks, setCategoryDrinks] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const categoryDrinksResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + encodeURIComponent(categoryName));
                const categoryDrinksResponseData = await categoryDrinksResponse.text();

                if (categoryDrinksResponseData.length < 1) {
                    setError("The category you've requested doesn't exist.");
                    return;
                }

                setCategoryDrinks(JSON.parse(categoryDrinksResponseData).drinks);
            } catch (e) {
                setError("An error occurred. Please try again.");
            }
        })();
    }, []);

    return (<>
        <Header/>

        <Section>
            <SectionDetails title={"Category: " + categoryName} description="You've made your decision, so here are your drinks!"/>

            <div className="row">
                {error ? <div className="alert alert-danger" role="alert">
                    {error}
                </div> : <>
                    {categoryDrinks ? <>
                        {categoryDrinks.map((drink) => {
                            return <>
                                <div className="col-6 col-md-4 col-lg-3 mb-4">
                                    <DrinkCard drink={drink}/>
                                </div>
                            </>
                        })}
                    </> : <>
                        {[...Array(12)].map((e, i) => <>
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

export default CategoryDrinkList;