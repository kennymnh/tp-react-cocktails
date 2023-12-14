import Header from "../partial/Header";
import {useEffect, useState} from "react";
import DrinkCard from "../partial/DrinkCard";
import Section from "../partial/Section";
import SectionDetails from "../partial/SectionDetails";
import {useParams} from "react-router-dom";

const GlassDrinkList = () => {
    const {glassName} = useParams();

    const [glassDrinks, setGlassDrinks] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const glassDrinksResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + encodeURIComponent(glassName));
                const glassDrinksResponseData = await glassDrinksResponse.text();

                if (glassDrinksResponseData.length < 1) {
                    setError("The glass type you've requested doesn't exist.");
                    return;
                }

                setGlassDrinks(JSON.parse(glassDrinksResponseData).drinks);
            } catch (e) {
                setError("An error occurred. Please try again.");
            }
        })();
    }, []);

    return (<>
        <Header/>

        <Section>
            <SectionDetails title={"Glass: " + glassName} description="Here are some drinks that perfectly fits in this type of glass!"/>

            <div className="row">
                {error ? <div className="alert alert-danger" role="alert">
                    {error}
                </div> : <>
                    {glassDrinks ? <>
                        {glassDrinks.map((drink) => {
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
    </>);
};

export default GlassDrinkList;