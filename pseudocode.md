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

### Visual Elements: 
Visual elements we would like to remain hidden/ generate from a CreateFunc(). Only when a  init() or other function is called. We can create these functions using javascript much like in our MindReader App.

#### Show: Run at init()
- titleTextElement
- forumInputElement
- titleButtonElement

#### Show: Run at Func()
- city
- temperature
- condition
- Other info

**Ex:** `city` is broken down into multiple sections/ elements that need to be created in javascript. Id's will need to be assigned to div's to be able to reference the element later. A bootstrap class will also need to assigned to the elements inorder to style and change apperience. 

```
Container Div
    Div - cityTitleText
    Div - cityBodyText
```

---

## User Input:
We plan to make a call to an API but before we do so. We must get some important information from the user first. We need the user to submit an entry of their **ZIP CODE**. They can do this by using the `input forum and submit button` we INIT() at Start of the program.

Once our titleButton is pressed, we need a *Helper Function* to preform [defensive programming](https://en.wikipedia.org/wiki/Defensive_programming). To avoid getting errors from the API and insure the User has entered the correct information.

Ex: 
```
OurButton set ClickEventListener
    Onclick check submitted data
        IF data does NOT Match zipcode
            Return Error to user
        Else 
            Send data to API Func()

```

---

## API Weather App Store Data

We will be recieving data from an api. In order to get the data we will need to run a INIT() function that makes a call to the API and then informs the User whether if the data was able to be retrieved or not.

```
API Func()
    IF Call to API Promise Equals Fulfield
        Set Obj var to API data
    Else 
        Inform User of API Server Error
        Option: Try again? 

```

---

## Manage Data
Now that we have a rough outline for how our API data will be stored. We will need to create a *helper function* to allow us to access that data.
Our data will be stored in a Javascript like Object Var type. We will call this Obj `myWeather` since it reps the Users choisen location of weather data.

This Obj will keep track of our weather States we recieve from the API

We may need a *helper function* to create more `myWeather#` funcs if we want to provide the user will mulitple views of different Weather Locations.

This Object may end up within our INIT() State Object. This will be decided later in the "Pseudocode.md" file. NOTE: A state object has yet to be documented in this Pseudocode.md file.

**Ex:**
```
myWeather {
    City
    Temp
    condition
    image
}
```

---

## States And Data
```
States:

titleText
userInputForum
userInputButton



city
temperature
condition
imgWeather

```








