window.countries = []; 

function filterCountries(searchVelue) {

    var result = [];
    for(var country of countries) {
        var countryName = country.txt.toLowerCase();
        if(countryName.indexOf(searchVelue) >= 0) {
            result.push(country);
        }
    }
    renderCountries(result)
}

function renderCountries(countries){
    var htmlString = '';
    for (var country of countries) {
        htmlString += `<tr>
        <td>${country.txt}</td>
        <td>${country.rate}</td>
        <td>${country.cc}</td>
        </tr>`
    }
    document.getElementById('countries').innerHTML = htmlString;
}

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20221110&json').then(res => res.json()).then(function (data) {
    window.countries = data;
    renderCountries(data);
})

var search = document.getElementById('search');
search.onkeyup = function(e) {
    var searchVelue = e.currentTarget.value;
    filterCountries(searchVelue.trim().toLowerCase());
}