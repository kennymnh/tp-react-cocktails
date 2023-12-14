import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "../partial/Header";
import Section from "../partial/Section";

const DrinkDetails = () => {
    const {id} = useParams();

    const [drink, setDrink] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const drinkResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id);
                const drinkResponseData = await drinkResponse.text();

                if (drinkResponseData.length < 1) {
                    setError("The drink you've requested doesn't exist.");
                    return;
                }

                setDrink(JSON.parse(drinkResponseData).drinks[0]);
            } catch (e) {
                setError("An error occurred. Please try again.");
            }
        })();
    }, []);

    return (<>
        <Header/>
        <Section>
            <div className="row">
                {error ? <div className="alert alert-danger" role="alert">
                    {error}
                </div> : <>
                    <div className="col-md-4">
                        <div className="ratio ratio-1x1 bg-secondary overflow-hidden rounded-3 shadow">
                            {drink && <img src={drink.strDrinkThumb} alt={drink.strDrink}/>}
                        </div>
                    </div>
                    <div className="col ms-lg-4 mt-5 mt-md-0">
                        <h1 className="placeholder-glow text-center text-lg-start">{drink ? <h1>{drink.strDrink}</h1> : <span className="placeholder col-6"></span>}</h1>
                        <hr/>

                        {drink ? <div>
                            {
                                drink.strInstructions.split("\r\n").map((line) => {
                                    return (<p>{line}</p>);
                                })
                            }

                            <div className="row mt-5">
                                <div className="col-lg-6">
                                    <h4><i className="bi bi-info-circle-fill me-2"></i>Details</h4>
                                    <hr/>
                                    <div className="ms-2">
                                        <p className="m-0"><i className="fa-solid fa-tag"></i><span className="fw-bolder mx-2">Category:</span><Link to={"/category/" + encodeURIComponent(drink.strCategory)} className="text-black">{drink.strCategory}</Link></p>
                                        <p className="m-0"><i className="fa-solid fa-wine-glass-empty"></i><span className="fw-bolder mx-2">Glass:</span><Link to={"/glass/" + encodeURIComponent(drink.strGlass)} className="text-black">{drink.strGlass}</Link></p>

                                        <p className="m-0 mt-3"><i className="fa-regular fa-clock"></i><span className="fw-bolder mx-2">Edited on:</span>{drink.dateModified ?? "N/A"}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 mt-4 mt-lg-0">
                                    <h4><i className="bi bi-egg-fill me-2"></i>Ingredients & measures</h4>
                                    <hr/>
                                    <ul>
                                        {
                                            Object.keys(drink).map((v) => {
                                                if (v.startsWith("strIngredient") && drink[v]?.trim().length > 0)
                                                    return (
                                                        <li>
                                                            <Link to={"/ingredient/" + encodeURIComponent(drink[v].trim())} className="text-black text-decoration-none">
                                                                <span className="text-decoration-underline">{drink[v].trim()}</span>
                                                                <span className="ms-2 text-muted fst-italic">
                                                                { drink[v.replace("strIngredient", "strMeasure")] &&
                                                                    drink[v.replace("strIngredient", "strMeasure")].trim() }
                                                            </span>
                                                            </Link>
                                                        </li>
                                                    );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div> : <div className="placeholder-glow">
                            <span className="placeholder col-7 me-2"></span>
                            <span className="placeholder col-4 me-2"></span>
                            <span className="placeholder col-4 me-2"></span>
                            <span className="placeholder col-6 me-2"></span>
                            <span className="placeholder col-8 me-2"></span>
                            <span className="placeholder col-7 me-2"></span>
                            <span className="placeholder col-4 me-2"></span>
                            <span className="placeholder col-4 me-2"></span>
                            <span className="placeholder col-6 me-2"></span>
                            <span className="placeholder col-8 me-2"></span>
                            <span className="placeholder col-7 me-2"></span>
                            <span className="placeholder col-4 me-2"></span>
                            <span className="placeholder col-4 me-2"></span>
                        </div>}
                    </div>
                </>}
            </div>
        </Section>
    </>);
};

export default DrinkDetails;