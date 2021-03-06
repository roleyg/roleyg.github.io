var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var townData = request.response;
    populateTownData(townData);
}

function populateTownData(jsonObj) {
    var towns = jsonObj['towns'];

    for (var i = 0; i < towns.length; i++) {
        if (towns[i].name == 'Franklin' || towns[i].name == 'Greenville' || towns[i].name == 'Springfield') {
            var myArticle = document.getElementById(towns[i].name);
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myList = document.createElement('ul');

            myH2.textContent = towns[i].name;
            myPara1.textContent = 'Motto: ' + towns[i].motto;
            myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Current Population: ' + towns[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myList);
        }
    }
}
