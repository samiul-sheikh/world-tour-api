fetch('https://restcountries.eu/rest/v2/all')
    .then(Response => Response.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');

        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p class="capital">${country.capital}</p>
            <button onclick="displayCountryDetail('${country.name}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;

        countriesDiv.appendChild(countryDiv);
    });
}

// call dynamic api
const displayCountryDetail = name => {
    // console.log(name);
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data[0].name));
}

/*
// using for loop
const displayCountries = countries => {
    // display all country names in UI as div
    const countriesDiv = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');


        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(p);


        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p class="capital">${country.capital}</p>
        `;
        countryDiv.innerHTML = countryInfo;

        countriesDiv.appendChild(countryDiv);
    }
}
*/