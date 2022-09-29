console.log('sandbox2.js')

// async function making an axios call to weather api
// how do I get that information out and into a object?

let Weather = {}
async function getWeather() {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=47150,US&appid=095fe394e44de9a81a6c44190e364b63');
      Weather = response;
      console.log(Weather)
    } catch (error) {
      console.error(error);
    }
  }

// converts kelvin into celcius and farenheit
// returns kelvin, celcius and farenheit
function tempConvert(K) {
    const C = K-273.15;
    const F = ((K-273.15)*1.8)+32;
    return [K,C,F]
}
//tempConvert(Weather.data.main.temp)
// important information
// https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
//095fe394e44de9a81a6c44190e364b63

//displaypictures

//zip code form handler

// bootstrap

