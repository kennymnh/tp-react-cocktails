import Header from "../partial/Header";
import {useEffect, useState} from "react";
import DrinkCard from "../partial/DrinkCard";
import Section from "../partial/Section";
import SectionDetails from "../partial/SectionDetails";
import {useParams} from "react-router-dom";

const GlassDrinkList = () => {
    const {searchQuery} = useParams();

    const [searchDrinks, setSearchDrinks] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setSearchDrinks(null);

        (async () => {
            try {
                const searchDrinksResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + encodeURIComponent(searchQuery));
                const searchDrinksResponseData = await searchDrinksResponse.json();

                setSearchDrinks(searchDrinksResponseData.drinks ?? []);
            } catch (e) {
                setError("An error occurred. Please try again.");
            }
        })();
    }, [searchQuery]);

    return (<>
        <Header/>

        <Section>
            <SectionDetails title={"Search results for: " + searchQuery} description="We hope you find your happiness."/>

            <div className="row">
                {error ? <div className="alert alert-danger" role="alert">
                    {error}
                </div> : (searchDrinks ? <>
                    {searchDrinks.length > 0 ? searchDrinks.map((drink) => {
                        return <>
                            <div className="col-6 col-md-4 col-lg-3 mb-4">
                                <DrinkCard drink={drink}/>
                            </div>
                        </>
                    }) : <div className="alert alert-warning" role="alert">Couldn't find anything with the provided search query.</div>}
                </> : <>
                    {[...Array(12)].map(() => <>
                        <div className="col-6 col-md-4 col-lg-3 mb-4">
                            <DrinkCard/>
                        </div>
                    </>)}
                </>)}
            </div>
        </Section>
    </>);
};

export default GlassDrinkList;