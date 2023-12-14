import {Link} from "react-router-dom";

const DrinkCard = ({drink}) => {
    return (
        <div className="card overflow-hidden shadow-sm" aria-hidden="true">
            <div className="ratio ratio-1x1 bg-secondary">
                {drink && <img src={drink.strDrinkThumb + "/preview"} alt={drink.strDrink}/>}
            </div>
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <h4 className="card-title flex-grow-1 m-0 placeholder-glow">
                        {drink ? drink.strDrink : <span className="placeholder col-6"></span>}
                    </h4>
                    { drink && <>
                        <Link to={"/drink/" + drink.idDrink} className="d-none d-lg-inline btn btn-secondary stretched-link"><i className="fa-solid fa-eye"></i></Link>
                        <Link to={"/drink/" + drink.idDrink} className="d-lg-none stretched-link"></Link>
                    </> }
                </div>
            </div>
        </div>
    );
};

export default DrinkCard;
