import {Link, useLocation} from "react-router-dom";

const NavbarButton = ({route, className, children}) => {
    const location = useLocation();

    return <>
        <Link to={route} className={"btn btn-outline-dark " + className + " " + (location.pathname === route ? " active" : "")}>
            {children}
        </Link>
    </>;
};

export default NavbarButton;