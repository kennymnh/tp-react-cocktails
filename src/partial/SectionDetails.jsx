const SectionDetails = ({title, description}) => {
    return (
        <div className="mb-5">
            <h1>{title}</h1>
            <hr/>
            <p>{description}</p>
        </div>
    );
};

export default SectionDetails;