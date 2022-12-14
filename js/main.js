// main.js
console.log('main.js')

// global card counter
let cardNum = 0;

//global array, keep track of zip codes
zipArray = [];

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
    const makeElem = document.createElement(htmlElem);
    makeElem.setAttribute('id', idName); 
    if (className !== null)
    makeElem.setAttribute('class', className)
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
// Create multiple API Cards on page
//Param Obj = key: html Element, ID Name, Parent Name, Class Name(Using Bootstrap)
function cardCreator(Obj, parent = 'cardRowx0') {
    const toStr = cardNum.toString();
    for (const key in Obj){
        if(Obj.hasOwnProperty(key)){

                if (key == 'cardDivx'){
                    createElem(Obj[key][0],Obj[key][1]+toStr,parent,Obj[key][3])
                } else {
                createElem(Obj[key][0],Obj[key][1]+toStr,Obj[key][2]+toStr,Obj[key][3])
                }
        }
    }
 } 
 // Added content to cardCreator 
 function addContentCard(Obj){
    for (const key in Obj){
        const id = document.getElementById(key + cardNum)
        if(Obj.hasOwnProperty(key) && Obj[key] !== ''){
            
          id.innerHTML = Obj[key]
        }
    }
}
 // 



function addContent(Obj) {
    for (const key in Obj){
        const id = document.getElementById(key)
        if(Obj.hasOwnProperty(key) && Obj[key] !== ''){
          id.innerHTML = Obj[key]
        }
    }
}

//To-DO dd x instead of 0 for keys and strings for all objects and functions


// Objects and functions for WeatherZips
// key: html Element, ID Name, Parent Name, Class Name(Using Bootstrap)
const bodyDivElem = {

    //cardsx: ['div','cardsx','bodyDiv','container-fluid '],
  //  cardRowx: ['div','cardRowx','cardsx','row justify-content-around 1'],
    cardDivx: ['div','cardDivx','cardRowx','card'],
    cardImgx: ['img','cardImgx','cardDivx','card-img-top'],

    cardBodyx: ['div','cardBodyx','cardDivx','card-body'],
    cardTitlex: ['h3','cardTitlex','cardBodyx','card-title'],
    cardTextx: ['p','cardTextx','cardBodyx','card-text'],

    cardlux: ['lu','cardlux','cardDivx','list-group list-group-flush'],
    cardh3x: ['h3','cardh3x','cardlux','list-group-item'],
    cardli1x: ['li','cardli1x','cardlux','list-group-item'],
    cardli2x: ['li','cardli2x','cardlux','list-group-item'],
    cardli3x: ['li','cardli3x','cardlux','list-group-item'],
    

    cardDivRowx: ['div','cardDivRowx','cardDivx','row card-body'],
    cardDivCol1x: ['div','cardDivCol1x','cardDivRowx','col-6'],
    cardBtnDelx: ['button','cardBtnDelx','cardDivCol1x','btn btn-danger btn-sm'],
    cardDivCol2x: ['div','cardDivCol2x','cardDivRowx','col-6'],
    cardBtnRefx: ['button','cardBtnRefx','cardDivCol2x','btn btn-light btn-sm']

}

// bodyDivElem Object string Content for DOM

const bodyDivContent = {
   // cardsx: '',
   // cardRowx: '',
    cardDivx: '',
    cardImgx: '',

    cardBodyx: '',
    cardTitlex: 'City',
    cardTextx: 'Description',

    cardlux: '',
    cardh3x: 'Temperature',
    cardli1x: 'Kelvin',
    cardli2x: 'Celcius',
    cardli3x: 'Farenheit',
    

    cardDivRowx: '',
    cardDivCol1x: '',
    cardBtnDelx: 'Delete',
    cardDivCol2x: '',
    cardBtnRefx: 'Refresh'
}




  // Click Event listener
  function BtnHello() {
    const inputValue = document.getElementById('cardInput').value
 

    if (inputValue < 10000 || inputValue > 99951 || inputValue == NaN){
        alert("Not A Zip Code! Please enter a Zip Code");
    } else if(checkZip(inputValue) == true){
        alert('pick a different zip please')
        
    } else {
        getWeather(inputValue);
    }


  }

 
 // async function making an axios call to weather api
// how do I get that information out and into a object?

let Weather = {}

async function getWeather(zip) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=095fe394e44de9a81a6c44190e364b63`);
        Weather = response;
        console.log(Weather)
        zipArray[cardNum] = zip;
        cardCreator(bodyDivElem)
        addContentCard(bodyDivContent)
        addDataDOM(zip)
        cardNum++;
        console.log('cardNum', cardNum)

    } catch (error) {
      console.error(error);
      alert("Please enter a valid zip code")
    }
  }

  //HelperFunc CheckZip
  function checkZip(input) {
    for (const i in zipArray){
        console.log('ZipArray', i, zipArray[i])
        if (zipArray[i] == input){
            return true;
        }

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
    const toStr = cardNum.toString()
    document.getElementById('cardDivx'+toStr).setAttribute('style','width: 18rem;')
    const img = document.getElementById('cardImgx'+toStr)
    const icon = Weather.data.weather[0].icon
    const title = document.getElementById('cardTitlex'+toStr)
    const text = document.getElementById('cardTextx'+toStr)
    const tempk = document.getElementById('cardli1x'+toStr)
    const tempc = document.getElementById('cardli2x'+toStr)
    const tempf = document.getElementById('cardli3x'+toStr)
    const temps = tempConvert(Weather.data.main.temp)
    

    title.innerHTML = Weather.data.name;
    text.innerHTML = Weather.data.weather[0].main + ', ' + Weather.data.weather[0].description;
    tempk.innerHTML = tempk.innerHTML + "  " + temps[0]
    tempc.innerHTML = tempc.innerHTML + "  " + temps[1]
    tempf.innerHTML = tempf.innerHTML + "  " + temps[2]

    img.setAttribute('src',`http://openweathermap.org/img/wn/${icon}@2x.png`);
    img.setAttribute('alt',Weather.data.weather[0].main)

    const delBtn = document.getElementById('cardBtnDelx'+toStr);
    const refBtn = document.getElementById('cardBtnRefx'+toStr);
    delRefBtn(delBtn,refBtn,zip,toStr)



    // Image display
//`http://openweathermap.org/img/wn/${icon}@2x.png`
}

// click event listeners Update function and delete function

    //delBtn.addEventListener('click',)
    //refBtn.addEventListener('click',)
function delRefBtn(del,ref,zip,toStr){
    del.addEventListener('click',delCard)
    ref.addEventListener('click',function(){ refCard(zip, toStr); })
}
function delCard() {
    console.log('del')

}
function refCard(zip, toStr) {
    console.log('ref')
    console.log('card ID',zip ,'#',toStr)
}




//INIT()
ObjElemCreate(headerDivElem)
addContent(headerDivContent)

createElem('div','cardsx'+cardNum.toString(),'bodyDiv','container-fluid')
// cardRowx: ['div','cardRowx','cardsx','row justify-content-around 1'],
createElem('div','cardRowx'+cardNum.toString(),'cardsx0','row justify-content-around 1')

//Button in headerDivElem.cardButton needs type Attribute assigned
document.getElementById('cardButton').setAttribute('type','button')





document.getElementById('cardInput').setAttribute('type','number')
document.getElementById('cardInput').setAttribute('placeholder','10001')
document.getElementById('cardInput').setAttribute('min','10001')
document.getElementById('cardInput').setAttribute('max', '99950')

// document.getElementById('cardImgx').setAttribute('src','')
// document.getElementById('cardImgx').setAttribute('alt','...')
document.getElementById('cardButton').addEventListener('click', BtnHello)
