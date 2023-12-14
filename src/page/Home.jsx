import Header from "../partial/Header";
import RandomCategory from "../partial/RandomCategory";
import LastDrinks from "../partial/LastDrinks";
import {useEffect, useState} from "react";

const Home = () => {
    const [drinks, setDrinks] = useState(null);
    const [categories, setCategories] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const drinksResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
                const drinksResponseData = await drinksResponse.json();

                const categoriesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
                const categoriesResponseData = await categoriesResponse.json();

                setDrinks(drinksResponseData.drinks);
                setCategories(categoriesResponseData.drinks);
            } catch (e) {
                setError("An error occurred. Please try again.");
            }
        })();
    }, []);

    return (<>
        <Header/>
        <div className="container">
            <div className="my-5 p-4 shadow rounded-4">
                <h1>Home page</h1>
                <hr/>
                <p>Welcome to our incredible home page!</p>
                <p>You'll be able to get nothing useful from here. Except some good drinks. Don't thanks us :)</p>
            </div>

            {!error && <div className="my-5 p-4 shadow rounded-4">
                <LastDrinks drinks={drinks}/>
                <RandomCategory categories={categories} className="mt-3"/>
            </div> }
        </div>
    </>);
};

export default Home;