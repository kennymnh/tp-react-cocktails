import DrinkCard from "./DrinkCard";
import {Link} from "react-router-dom";

const LastDrinks = ({ drinks, className }) => {
    if (drinks) drinks = drinks.slice(-4);

    return (<div className={className}>
        <h1><Link to="/drinks" className="text-black text-decoration-none">Latest drinks</Link></h1>
        <hr/>

        <div className="row">
            { drinks ? drinks.map((drink) => {
                return (<div className="col-6 col-lg-3 mb-4"><DrinkCard drink={drink}/></div>);
            }) : <DrinkCard/> }
        </div>
    </div>);
};

export default LastDrinks;