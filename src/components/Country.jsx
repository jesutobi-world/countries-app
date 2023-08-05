



const Country = ({name, population, region, capital, flag}) => {
    return (
        <div className="country">
            <div className="flag-container">
                <img src={flag} alt="flag" />
            </div>
            <div className="details">
                <h3 className="country-name">{name}</h3>
                <p className="population"><span>Population: {population}</span></p>
                <p className="region"><span>Region: {region}</span></p>
                <p className="capital"><span>Capital: {capital}</span></p>
            </div>
        </div>
    )
}

export default Country