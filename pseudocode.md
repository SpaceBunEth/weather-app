# Weather App Pseudocode

## Outline
To complete the assignment, you must complete the following:
1. Use JS to render the entire app (only have a single `<div id='main'></div>` in the body of your index.html).
2. Use https://openweathermap.org/’s API to fetch weather data.
3. Allow the user to enter their location (zip code is probably easiest) and press a button to load the weather.
4. Run an onClick or onSubmit that executes an Axios GET request to retrieve weather data from the API.
5. Handle successful and unsuccessful attempts
- If the request is successful, display the following in a 'mobile app' format:
    - City name
    - Current weather conditions
    - Current temperature in Kelvin, Fahrenheit, and Celsius
    - A unique image, decided by the current temperature (The API has icons built-in, be sure to read the docs)
- If the request is unsuccessful, display a specific error message such as "Invalid Zip Code" or anything else that might come back from the API.
6. Allow the user to continue entering new zip codes to get new weather data.
7. Design should include a RESPONSIVE layout utilizing Bootstrap’s layout classes that works on both mobile and desktop (with different layouts) and applies atomic design principles for a professional looking presentation.

- - -

## About 

[README](README.md)

Today we will be Pseudocoding a Weather App that is written in HTML, CSS, Bootstrap, and Javascript. We will be making calls to [https://openweathermap.org/](https://openweathermap.org/) API that will give us the current weather data for a specified area. A zip code provided by the user.

API Key: "095fe394e44de9a81a6c44190e364b63"

[Wireframe](https://drive.google.com/file/d/1nHT6Sq7T4t5AWE1x3CopNlM0c_ICvIxF/view) img:

Visual Elements: 

#### Show at init()
- titleTextElement
- forumInputElement
- titleButtonElement
#### Show at 






