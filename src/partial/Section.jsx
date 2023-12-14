const Section = ({children}) => {
    return (
        <div className="container">
            <div className="my-5 p-4 shadow rounded-4">
                {children}
            </div>
        </div>
    );
};

export default Section;