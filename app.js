fetch('https://restcountries.eu/rest/v2/all')
    .then(Response => Response.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    // display all country names in UI as div
    const countriesDiv = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');

        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        const p = document.createElement('p');
        p.innerText = country.capital;
        countryDiv.appendChild(h3);
        countryDiv.appendChild(p);

        countriesDiv.appendChild(countryDiv);
    }
}