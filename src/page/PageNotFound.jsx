import Header from "../partial/Header";

const PageNotFound = () => {
    return (<>
        <Header/>
        <div className="container">
            <div className="my-5 p-4 text-center">
                <div className="mb-5">
                    <i className="fa-regular fa-face-sad-tear" style={{ fontSize: "10em" }}></i>
                </div>
                <div>
                    <h1 className="mb-2">Page not found!</h1>
                    <p>Not a lucky day.</p>
                </div>
            </div>
        </div>
    </>);
};

export default PageNotFound;
