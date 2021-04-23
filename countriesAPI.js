const getCountries = () => {
    fetch(`https://restcountries.eu/rest/v2/region/americas`)
        .then(response => response.json())
        .then(json => printCountries(json))
}

getCountries();

function printCountries(countries) {
    const container = document.getElementById('container')
    countries.forEach(countrie => {
        container.innerHTML = `
    ${container.innerHTML}
    <div class="card">
    <img src="${countrie.flag}"/>
    <h1>${countrie.name}</h1>
    <h2>Capital: ${countrie.capital}</h2>
    <span>Population: ${(countrie.population)}</span>
    </card>
  `;
    });
}



