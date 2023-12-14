import Header from "../partial/Header";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Footer from "../partial/Footer";
import Section from "../partial/Section";

const Glasses = () => {
    const [glasses, setGlasses] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const glassesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list");
                const glassesResponseData = await glassesResponse.json();

                setGlasses(glassesResponseData.drinks);
            } catch (e) {
                setError("An error occurred. Please try again.");
            }
        })();
    }, []);

    return (<>
        <Header/>
        <Section>
            <div className="mb-5">
                <h1>Glasses</h1>
                <hr/>
                <p>Wondering which glass fits your needs? Here are some choices!</p>
            </div>


            <div className="row">
                {error ? <div className="alert alert-danger" role="alert">
                    {error}
                </div> : <>
                    {glasses ? <>
                        {glasses.map((glass) => {
                            return <>
                                <div className="col-12 col-sm-6 col-lg-3 mb-4">
                                    <div className="card overflow-hidden shadow-sm" aria-hidden="true">
                                        <div className="card-body">
                                            <h4 className="card-title placeholder-glow m-0">
                                                <Link to={"/glass/" + encodeURIComponent(glass.strGlass)} className="text-black text-decoration-none stretched-link">{glass.strGlass}</Link>
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
        </Section>
        <Footer/>
    </>);
};

export default Glasses;