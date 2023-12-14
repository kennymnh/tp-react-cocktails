import {Link, useNavigate} from "react-router-dom";
import NavbarButton from "./NavbarButton";

const Header = () => {
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const searchQuery = event.target.search.value.trim();
        if (searchQuery.length < 1) return;

        navigate("/search/" + encodeURIComponent(searchQuery));
    };

    const navPages = [
        {
            name: "Home",
            route: "/",
            icon: "fa-solid fa-house"
        },
        {
            name: "Drinks",
            route: "/drinks",
            icon: "fa-solid fa-martini-glass-citrus"
        },
        {
            name: "Ingredients",
            route: "/ingredients",
            icon: "fa-solid fa-lemon"
        },
        {
            name: "Glasses",
            route: "/glasses",
            icon: "fa-solid fa-wine-glass-empty"
        },
        {
            name: "Categories",
            route: "/categories",
            icon: "fa-solid fa-tags "
        },
    ];

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white shadow py-3 sticky-top">
                <div className="container">
                    <div className="flex-grow-1">
                        <Link className="navbar-brand d-flex align-items-center" to="/">
                            <img src="https://www.zupimages.net/up/23/50/wjid.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-3"/>
                            <span className="h3 m-0">Drinks!</span>
                        </Link>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse flex-grow-0 pt-3 pt-lg-0" id="navbar">
                        <div className="d-none d-lg-block btn-group me-3">
                            {navPages.map((navPageInfo) => {
                                return <NavbarButton route={navPageInfo.route}><i className={navPageInfo.icon + " me-2"}></i>{navPageInfo.name}</NavbarButton>;
                            })}
                        </div>
                        <div className="d-lg-none btn-group-vertical w-100 mb-3">
                            {navPages.map((navPageInfo) => {
                                return <NavbarButton route={navPageInfo.route} className="text-start">
                                    <i className={navPageInfo.icon + " me-3"}></i>{navPageInfo.name}
                                </NavbarButton>;
                            })}
                        </div>
                        <form onSubmit={handleFormSubmit}>
                            <div className="input-group">
                                <input className="form-control border-dark border-end-0" type="text" name="search" id="search" placeholder="Search drink..."/>
                                <button className="btn btn-outline-dark" type="submit" id="button-search"><i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;