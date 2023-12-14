import DrinkCard from "./DrinkCard";
import {Link} from "react-router-dom";

const RandomCategory = ({categories, className}) => {
    const category = categories ? categories[Math.floor(Math.random() * categories.length)] : null;

    return (<div className={className}>
        <h1><Link to="/categories" className="text-black text-decoration-none">Random category</Link></h1>
        <hr/>

        <div>
            <p>Hey! Here's a random category in case you were curious today?</p>
            {categories && <div className="mt-4">
                <Link to={"/category/" + encodeURIComponent(category.strCategory)}
                      className="btn btn-outline-dark border-white fw-bolder ms-3">
                    <i className="fa-regular fa-hand-point-right me-2"></i>{category.strCategory}</Link>
            </div>}
        </div>
    </div>);
};

export default RandomCategory;