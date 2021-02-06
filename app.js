fetch('https://restcountries.eu/rest/v2/all')
    .then(Response => Response.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    // console.log(countries);
    // display all country names in UI
    const ul = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        // console.log(country.name);
        const li = document.createElement('li');
        li.innerText = country.name;
        ul.appendChild(li);
    }
}