
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      for (var i = 0; i < 4; i++) 
      {
        const main[i] = data.weather[i].main;
        const description[i] = data.weather[i].description;
        const temp[i] = data.main[i].temp;
        const icon[i] = apiWeather.getHTMLElementFromIcon(data.weather[i].icon);
      }
      

      
      document.getElementById('today-forecast-main').innerHTML = main[0];
      document.getElementById('today-forecast-more-info').innerHTML = description[0];
      document.getElementById('icon-weather-container').innerHTML = icon[0];
      document.getElementById('today-forecast-temp').innerHTML = `${temp[0]}°C`;

      document.getElementById('tomorrow-forecast-main').innerHTML = main[1];
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description[0];
      document.getElementById('icon-weather-container').innerHTML = icon[1];
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp[1]}°C`;

      document.getElementById('ATommorow-forecast-main').innerHTML = main[2];
      document.getElementById('ATommorow-forecast-more-info').innerHTML = description[2];
      document.getElementById('icon-weather-container').innerHTML = icon[2];
      document.getElementById('ATommorow-forecast-temp').innerHTML = `${temp[2]}°C`;

      document.getElementById('AATommorrow-forecast-main').innerHTML = main[3];
      document.getElementById('AATommorrow-forecast-more-info').innerHTML = description[3];
      document.getElementById('icon-weather-container').innerHTML = icon[3];
      document.getElementById('AATommorrow-forecast-temp').innerHTML = `${temp[3]}°C`;



      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
