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

// important information
// https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
//095fe394e44de9a81a6c44190e364b63