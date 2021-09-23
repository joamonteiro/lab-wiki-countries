import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import countriesJSON from '../countries.json';

function CountryDetails({match}) {
    const [country, setCountry] = useState(countriesJSON[0]);

    useEffect(() => {
        const countryAlpha3Code = match.params.alpha3Code;
        const foundCountry = countriesJSON.find((country) => country.alpha3Code === countryAlpha3Code)
        console.log(foundCountry);
        setCountry(foundCountry);
    }, [match.params.alpha3Code])

    return(
        <>
            <img style={{"width": "300px"}} src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} alt={`flag of ${country.name}`}/>
            <h1>{country.name}</h1>
            
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{"width": "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                  {/*map all neighbours neighbour countries*/}
                    <ul>
                        {country.borders.map((border) => {
                            const foundBorder = countriesJSON.find((borders) => borders.alpha3Code === border);
                            return <li><NavLink exact to = {`/${border}`}>{foundBorder.name}</NavLink></li>
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </>
    )
}

export default CountryDetails;