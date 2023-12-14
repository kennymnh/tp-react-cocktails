import Header from "../partial/Header";
import {useEffect, useState} from "react";
import DrinkCard from "../partial/DrinkCard";
import Section from "../partial/Section";
import SectionDetails from "../partial/SectionDetails";
import Footer from "../partial/Footer";

const Drinks = () => {
    const [drinks, setDrinks] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const drinksResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
                const drinksResponseData = await drinksResponse.json();

                setDrinks(drinksResponseData.drinks);
            } catch (e) {
                setError("An error occurred. Please try again.");
            }
        })();
    }, []);

    return (<>
        <Header/>

        <Section>
            <SectionDetails title="Drinks" description="Here are our drinks, check these out!"/>

            <div className="row">
                {error ? <div className="alert alert-danger" role="alert">
                    {error}
                </div> : <>
                    {drinks ? <>
                        {drinks.map((drink) => {
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
                    </>}</>}
            </div>
        </Section>
        <Footer/>
    </>);
};

export default Drinks;