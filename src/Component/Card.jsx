import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ country }) => {
  if (!country) {
    return <img  className='loadingImg'  src="/src/assets/loading-img.jpg" alt="" /> ; 
  }

 // we make this functin because in the native name there are many data in the form of array so it get it whole we make it firste me we a key of native name where we get the array[4] and then we apply map and join them value
  const nativeNames = country?.name?.nativeName
    ? Object.keys(country.name.nativeName)  
        .map((key) => country.name.nativeName[key]?.common)
        .join(", ")
    : "Not found";
  
    // smae here 
  const currencies = country?.currencies
    ? Object.keys(country.currencies)
        .map((key) => country.currencies[key]?.name)
        .join(", ")
    : "Not found";

    // same here
  const languages = country?.languages
    ? Object.keys(country.languages)
        .map((key) => country.languages[key])
        .join(", ")
    : "Not found";

  return (
    // in this we use conditional chaining in every input field ? || "not found" because we cant get error page on the screen
    // if we dont want to use chaining in every field so use && condtional like see below
    <div>
      <section className="card country-details-card container">
        <div className="container-card bg-white-box">
          {/* {country && ( here below whole content )} in the bracket our whole content to remove the error which mean when the data is successful come from api then render before that wait till and same for the chaining in input field */}
          <div className="country-image grid grid-two-cols">
            <img
              src={country?.flags?.svg || "not found"} 
              alt={country?.flags?.alt || "not found"}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title">
                {country?.name?.official || "Not found"}
              </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Names: </span>
                  {nativeNames}
                </p>

                <p>
                  <span className="card-description">Population: </span>
                  {country?.population
                    ? country.population.toLocaleString()
                    : "Not found"}
                </p>

                <p>
                  <span className="card-description">Region: </span>
                  {country?.region || "Not found"}
                </p>

                <p>
                  <span className="card-description">Sub Region: </span>
                  {country?.subregion || "Not found"}
                </p>

                <p>
                  <span className="card-description">Capital: </span>
                  {country?.capital?.[0] || "Not found"}
                </p>

                <p>
                  <span className="card-description">Top Level Domain: </span>
                  {country?.tld?.[0] || "Not found"}
                </p>

                <p>
                  <span className="card-description">Currencies: </span>
                  {currencies}
                </p>

                <p>
                  <span className="card-description">Languages: </span>
                  {languages}
                </p>
              </div>
            </div>
          </div>

          <div className="country-card-backBtn">
            <NavLink to="/country" className="backBtn">
              <button>Go Back</button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
