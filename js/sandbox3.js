
// sandbox
console.log('sandbox3.js')
// global card counter
let cardNum = 0;
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
    //console.log(parentElem)
    parent.appendChild(makeElem);

    //return parentElem;

}

//createElem('h1', 'anotherh1', htmlBody);
// headerDivElem array values/ order
// key: html Element, ID Name, Parent Name, Class Name(Using Bootstrap)
const headerDivElem = {
    card: ['div','card','headerDiv','card text-center'],
    cardHeader: ['div','cardHeader','card','card-header'],
    cardBody: ['div','cardBody','card','card-body'],
    cardTitle: ['h3','cardTitle','cardBody','card-title'],
    cardText: ['p','cardText','cardBody','card-text'],
    cardForm: ['form','cardForm','cardBody','row justify-content-center'],
    colDiv1: ['div','colDiv1','cardForm','col-6'],
    cardInput: ['input','cardInput','cardForm','form-control form-control-lg'],
    colDiv2: ['div','colDiv2','cardForm','col-6'],
    cardButton: ['button','cardButton','cardForm','btn btn-primary btn-lg'],
    cardFooter: ['div','cardFooter','card','card-footer text-muted']

}
// headerDivElem string content for DOM
const headerDivContent = {
    card: '',
    cardHeader: 'Current Time',
    cardBody: '',
    cardTitle: 'Weather App',
    cardText: 'Enter in your current zip code to get the current weather for that location.',
    cardForm: '',
    colDiv1: '',
    cardInput: '',
    colDiv2: '',
    cardButton: 'Check Weather',
    cardFooter:  'Last update Zip and time'
}
/* 
<div class="card text-center">
    <div class="card-header">
    Current Time
    </div>
    <div class="card-body">
    <h5 class="card-title" >Weather App</h5>
    <p class="card-text">Enter in your current zip code to get the current weather for that location.</p>
        <form class="row justify-content-center">
        <div class="col-6">
        <input class="form-control form-control-lg" type="number" value="zip code" min="10000" max="99999">
        </div>
        <div class="col-6">
        <button type="submit" class="btn btn-primary btn-lg">Check Weather</button>
        </div>
        </form>
    </div>
    <div class="card-footer text-muted">
    Last update Zip and time
    </div>
</div> */


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

// Objects and functions for WeatherZips
// key: html Element, ID Name, Parent Name, Class Name(Using Bootstrap)
const bodyDivElem = {

    card: ['div','card','bodyDiv','container-fluid'],
    cardRow: ['div','cardRow','card','row justify-content-around 1'],
    cardDiv: ['div','cardDiv','cardRow','card'],
    cardImg: ['img','cardImg','cardImg','card-img-top'],

    cardBody: ['div','cardBody','card','card-body'],
    cardTitle: ['h3','cardTitle','cardBody','card-title'],
    cardText: ['p','cardText','cardBody','card-text'],

    cardlu: ['lu','cardlu','card','list-group list-group-flush'],
    cardh3: ['h3','cardlh3','cardlu','list-group-item'],
    cardli1: ['li','cardli1','cardlu','list-group-item'],
    cardli2: ['li','cardli2','cardlu','list-group-item'],
    cardli3: ['li','cardli3','cardlu','list-group-item'],
    

    cardDivRow: ['div','cardDivRow','card','row card-body'],
    cardDivCol1: ['div','cardDivCol1','cardDivRow','col-6'],
    cardBtnDel: ['button','cardBtnDel','cardDivCol1','col-6'],
    cardDivCol2: ['div','cardDivCol2','cardDivRow','btn btn-danger btn-sm'],
    cardBtnRef: ['button','cardBtnRef','cardDivCol2','btn btn-light btn-sm']

}

// bodyDivElem Object string Content for DOM

const bodyDivContent = {
    card: '',
    cardRow: '',
    cardDiv: '',
    cardImg: 'IMG',

    cardBody: '',
    cardTitle: 'City',
    cardText: '',

    cardlu: '',
    cardh3: '',
    cardli1: '',
    cardli2: '',
    cardli3: '',
    

    cardDivRow: '',
    cardDivCol1: '',
    cardBtnDel: '',
    cardDivCol2: '',
    cardBtnRef: ''
}

{/* 
  <div class="container-fluid">
  <div class="row justify-content-around 1">
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h3 class="card-title">City</h5>
      <p class="card-text">Descript/Condition</p>
    </div>

    <ul class="list-group list-group-flush">
      <h5 class="list-group-item">Tempurature</h3>
      <li class="list-group-item">Kelvin:</li>
      <li class="list-group-item">Celcius:</li>
      <li class="list-group-item">Farenheit:</li>
    </ul>

    <div class="row card-body">
      <div class="col-6">
          <button class="btn btn-danger btn-sm">Delete</button>
      </div>
      <div class="col-6">
          <button class="btn btn-light btn-sm">Refresh</button>
      </div>
    </div>
  </div> */}