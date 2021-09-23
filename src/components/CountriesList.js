import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function CountriesList({countries}) {
    const [allCountries, setCountries] = useState(countries)
    return(
        <div className="list-group">
            {allCountries.map((country) => { 
                return (
                    <NavLink className="list-group-item list-group-item-action" exat to = {`/${country.alpha3Code}`}>
                    <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} alt={`flag of ${country.name}`}/>
                    <p>{country.name}</p>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default CountriesList;