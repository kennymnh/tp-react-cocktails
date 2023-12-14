import Header from "../partial/Header";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Footer from "../partial/Footer";

const Categories = () => {
    const [drinks, setDrinks] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const categoriesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
                const categoriesResponseData = await categoriesResponse.json();

                setDrinks(categoriesResponseData.drinks);
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
                    <h1>Categories</h1>
                    <hr/>
                    <p>Hey, are you looking for specific drinks? Check out our categories!</p>
                </div>


                <div className="row">
                    {error ? <div className="alert alert-danger" role="alert">
                        {error}
                    </div> : <>
                        {drinks ? <>
                            {drinks.map((category) => {
                                return <>
                                    <div className="col-12 col-sm-6 col-lg-3 mb-4">
                                        <div className="card overflow-hidden shadow-sm" aria-hidden="true">
                                            <div className="card-body">
                                                <h4 className="card-title placeholder-glow m-0">
                                                    <Link to={"/category/" + encodeURIComponent(category.strCategory)} className="text-black text-decoration-none stretched-link">{category.strCategory}</Link>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })}
                        </> : <>
                            {[...Array(12)].map(() => <>
                                <div className="col-12 col-sm-6 col-lg-3 mb-4">
                                    <div className="card overflow-hidden" aria-hidden="true">
                                        <div className="card-body">
                                            <h4 className="card-title placeholder-glow m-0">
                                                <span className="placeholder col-6"></span>
                                            </h4>
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

export default Categories;