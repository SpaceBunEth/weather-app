// main.js
console.log('main.js')

// global card counter
let cardNum = '';

// Set const to body and assign id with "bodyid"
let htmlBody = document.querySelector('body');
htmlBody.setAttribute('id','bodyid');

// Create const mainDiv holds all html elements for weather app
const mainDiv = document.createElement('div');
mainDiv.setAttribute('id','main');
htmlBody.appendChild(mainDiv);

// Create a set of headerDiv and bodyDiv for our content
// Use as reference for when appending childs
const headerDiv = document.createElement('div');
headerDiv.setAttribute('id', 'headerDiv');
htmlBody.appendChild(headerDiv);
const bodyDiv = document.createElement('div');
bodyDiv.setAttribute('id', 'bodyDiv');
htmlBody.appendChild(bodyDiv);


// testing append on body
// htmlBody.appendChild(mainDiv)
// htmlBody.appendChild(titleTextElem)

// Function for creating html elements for DOM with JS
// Create a func with Params passing
// html element name and name of the id
// then append element to a parent Param passed in the function
function createElem(htmlElem, idName, parentElem, className = null){
    const parent = document.getElementById(parentElem)
    console.log(htmlElem, idName, parentElem, className)
    const makeElem = document.createElement(htmlElem);
    makeElem.setAttribute('id', idName); 
    if (className !== null)
    makeElem.setAttribute('class', className)
    console.log(parentElem)
    parent.appendChild(makeElem);

    //return parentElem;

}

//createElem('h1', 'anotherh1', htmlBody);
// headerDivElem array values/ order
// key: html Element, ID Name, Parent Name, Class Name(Using Bootstrap)
const headerDivElem = {
    card: ['div','card','headerDiv','card text-center'],
    //cardHeader: ['div','cardHeader','card','card-header'],
    cardBody: ['div','cardBody','card','card-body'],
    cardTitle: ['h3','cardTitle','cardBody','card-title'],
    cardText: ['p','cardText','cardBody','card-text'],

    cardRow: ['div','cardRow','cardBody','row-6'],
    cardForm: ['form','cardForm','cardRow','row justify-content-center'],
    colDiv1: ['div','colDiv1','cardForm','col-6 col-md-3'],
    cardInput: ['input','cardInput','colDiv1','form-control form-control-m'],
    colDiv2: ['div','colDiv2','cardForm','col-6 col-md-3'],
    cardButton: ['button','cardButton','colDiv2','btn btn-primary'],


    //cardFooter: ['div','cardFooter','card','card-footer text-muted']

}
// headerDivElem string content for DOM
const headerDivContent = {
    card: '',
   // cardHeader: 'Current Date',
    cardBody: '',
    cardTitle: 'Weather App',
    cardText: 'Enter in your zip code to get the current weather for that location.',
    
    cardForm: '',
    colDiv1: '',
    cardInput: '',
    colDiv2: '',
    cardButton: 'Check Weather',
 //   cardFooter:  'Last update Zip and time'
}

function ObjElemCreate(Obj, parent = headerDiv) {
    for (const key in Obj){
        //console.log(key)
        if(Obj.hasOwnProperty(key)) {
            //console.log(Obj[key][0],key,Obj[key][2],Obj[key][3]);
            createElem(Obj[key][0],key,Obj[key][2],Obj[key][3]);

        }
    }
}
ObjElemCreate(headerDivElem)

function addContent(Obj) {
    for (const key in Obj){
        const id = document.getElementById(key)
        if(Obj.hasOwnProperty(key) && Obj[key] !== ''){
            console.log(Obj[key])
            
          id.innerHTML = Obj[key]
        }
    }
}
addContent(headerDivContent)

//Button in headerDivElem.cardButton needs type Attribute assigned
document.getElementById('cardButton').setAttribute('type','button')

// Objects and functions for WeatherZips
// key: html Element, ID Name, Parent Name, Class Name(Using Bootstrap)
const bodyDivElem = {

    cards0: ['div','cards0','bodyDiv','container-fluid '],
    cardRow0: ['div','cardRow0','cards0','row justify-content-around 1'],
    cardDiv0: ['div','cardDiv0','cardRow0','card'],
    cardImg0: ['img','cardImg0','cardDiv0','card-img-top'],

    cardBody0: ['div','cardBody0','cardDiv0','card-body'],
    cardTitle0: ['h3','cardTitle0','cardBody0','card-title'],
    cardText0: ['p','cardText0','cardBody0','card-text'],

    cardlu0: ['lu','cardlu0','cardDiv0','list-group list-group-flush'],
    cardh30: ['h3','cardlh30','cardlu0','list-group-item'],
    cardli10: ['li','cardli10','cardlu0','list-group-item'],
    cardli20: ['li','cardli20','cardlu0','list-group-item'],
    cardli30: ['li','cardli30','cardlu0','list-group-item'],
    

    cardDivRow0: ['div','cardDivRow0','cardDiv0','row card-body'],
    cardDivCol10: ['div','cardDivCol10','cardDivRow0','col-6'],
    cardBtnDel0: ['button','cardBtnDel0','cardDivCol10','btn btn-danger btn-sm'],
    cardDivCol20: ['div','cardDivCol20','cardDivRow0','col-6'],
    cardBtnRef0: ['button','cardBtnRef0','cardDivCol20','btn btn-light btn-sm']

}

// bodyDivElem Object string Content for DOM

const bodyDivContent = {
    cards0: '',
    cardRow0: '',
    cardDiv0: '',
    cardImg0: '',

    cardBody0: '',
    cardTitle0: 'City',
    cardText0: 'Description',

    cardlu0: '',
    cardh30: 'Temperature',
    cardli10: 'Kelvin: ',
    cardli20: 'Celcius: ',
    cardli30: 'Farenheit: ',
    

    cardDivRow0: '',
    cardDivCol10: '',
    cardBtnDel0: 'Delete',
    cardDivCol20: '',
    cardBtnRef0: 'Refresh'
}

ObjElemCreate(bodyDivElem)
addContent(bodyDivContent)

document.getElementById('cardDiv0').setAttribute('style','width: 18rem;')

document.getElementById('cardInput').setAttribute('type','number')
document.getElementById('cardInput').setAttribute('value','10001')
document.getElementById('cardInput').setAttribute('min','10001')
document.getElementById('cardInput').setAttribute('max', '99950')

document.getElementById('cardImg0').setAttribute('src','')
document.getElementById('cardImg0').setAttribute('alt','...')



  // Click Event listener
  function BtnHello() {
    const inputValue = document.getElementById('cardInput').value
    console.log(document.getElementById('cardInput').value)

    if (inputValue < 10000 || inputValue > 99951 || inputValue == NaN){
        alert("Not A Zip Code! Please enter a Zip Code");
    } else {
        getWeather(inputValue);
    }


  }

 document.getElementById('cardButton').addEventListener('click', BtnHello)

 // async function making an axios call to weather api
// how do I get that information out and into a object?

let Weather = {}

async function getWeather(zip) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=095fe394e44de9a81a6c44190e364b63`);
      Weather = response;
      console.log(Weather)
      addDataDOM(zip)
    } catch (error) {
      console.error(error);
    }
  }

  // converts kelvin into celcius and farenheit
// returns kelvin, celcius and farenheit
function tempConvert(K) {
    const C = K-273.15;
    const F = ((K-273.15)*1.8)+32;
    return [Math.trunc(K),Math.trunc(C),Math.trunc(F)]
}

function addDataDOM(zip) {
    const img = document.getElementById('cardImg0')
    const icon = Weather.data.weather[0].icon
    console.log(icon)
    const title = document.getElementById('cardTitle0')
    const text = document.getElementById('cardText0')
    const tempk = document.getElementById('cardli10')
    const tempc = document.getElementById('cardli20')
    const tempf = document.getElementById('cardli30')
    const temps = tempConvert(Weather.data.main.temp)
    

    title.innerHTML = Weather.data.name;
    text.innerHTML = Weather.data.weather[0].main + ', ' + Weather.data.weather[0].description;
    tempk.innerHTML = tempk.innerHTML + "  " + temps[0]
    tempc.innerHTML = tempc.innerHTML + "  " + temps[1]
    tempf.innerHTML = tempf.innerHTML + "  " + temps[2]

    img.setAttribute('src',`http://openweathermap.org/img/wn/${icon}@2x.png`);
    img.setAttribute('alt',Weather.data.weather[0].main)

    const delBtn = document.getElementById('cardBtnDel0');
    const refBtn = document.getElementById('cardBtnRef0');

// click event listeners Update function and delete function

    //delBtn.addEventListener('click',)
    //refBtn.addEventListener('click',)




    // Image display
//`http://openweathermap.org/img/wn/${icon}@2x.png`
}
