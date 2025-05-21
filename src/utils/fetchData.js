export const fetchCountryData = async (countryCode) => {
    try {
        const response = await fetch(`https://restcountries.com/v2/alpha/${countryCode}`);
        if (!response.ok) {
          throw new Error('Failed to fetch country info');
        }
        const countryData = await response.json();
        return countryData;
      } catch (err) {
        console.error('Error fetching country info:', err);
      }
};


export const fetchWeatherData = async (cityName) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const dataJson = await response.json();
        return dataJson;
      } catch (err) {
        console.error('Error fetching weather:', err);
      }
};