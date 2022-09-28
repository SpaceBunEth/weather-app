console.log('sandbox2.js')

async function getUser() {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=40069,US&appid=095fe394e44de9a81a6c44190e364b63');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


  //095fe394e44de9a81a6c44190e364b63