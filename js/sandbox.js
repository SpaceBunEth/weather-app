// sandbox
console.log('sandbox.js')
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

// Create const titlediv holds all html elements for title/ 
// User Input, The first thing the user sees
const titleTextElem = document.createElement('div');
titleTextElem.setAttribute('id','titleText');
titleTextElem.className = "bootstrap";
const userForumElem = document.createElement('forum');
userForumElem.setAttribute('id','userForum');
userForumElem.className = "";
const userBtnElem = document.createElement('button');
userBtnElem.setAttribute('id','userButton');
userBtnElem.className = "";

// testing append on body
// htmlBody.appendChild(mainDiv)
// htmlBody.appendChild(titleTextElem)

// Function for creating html elements for DOM with JS
// Create a func with Params passing
// html element name and name of the id
// then append element to a parent Param passed in the function
function createElem(htmlElem, idName, parentElem){
    const makeElem = document.createElement(htmlElem);
    makeElem.setAttribute('id', idName);
    parentElem.appendChild(makeElem);
    return parentElem;

}

createElem('h1', 'anotherh1', htmlBody);

// One idea is to create a ObjHtmlElement Object 
// That holds the default states of all the html elements we need to create


/* What are the elements we need for our start/ INIT() of our program?
    Header div that contains all INIT() elements
        titleText: 'h1'
        userInputForm: 'form'
        userInputBtn: 'button'
Using our createElem function passing (element name, id name, parent)

*/
const listElem = {
    titleText: 'h1',
    userInputForm: 'form',
    userInputBtn: 'button',
}

function ObjElemCreate(listElem, parent = headerDiv) {
    for (const key in listElem){
        if(listElem.hasOwnProperty(key)) {
            createElem(listElem[key],`${key}`,parent);

        }
    }
}

ObjElemCreate(listElem)

// Create a object for Weather API Section
const htmlWeatherElem = {
    weatherZip:'div',
    
    cityDiv: 'div',
    cityTitle: 'h3',
    cityText: 'p',

    tempDiv: 'div',
    tempTitle: 'h3',
    tempText1: 'p',
    tempText2: 'p',
    tempText3: 'p',

    conDiv: 'div',
    conTitle: 'h3',
    conText: 'p',

    otherDiv: 'div',
    otherTitle: 'h3',
    otherImg: 'img'
}
// It WORKS! 
// ObjElemCreate(htmlWeatherElem)


// function loops through Obj, Params (html element, id name, parent element (aka where to go)
// Everytime we loop through our for we want to replace our parent with a element that is a div
function ObjElemWeather(htmlWethElm) {
    let newParent = bodyDiv;
    for (const key in htmlWethElm){
        if(htmlWethElm.hasOwnProperty(key)) {
            console.log(typeof key)
            if(htmlWethElm[key] == 'div'){
                createElem(htmlWethElm[key],`${key}`,newParent);
                newParent = document.getElementById(key)
            } else {
                createElem(htmlWethElm[key],`${key}`,newParent);
            }   
        }
    }
}
ObjElemWeather(htmlWeatherElem);




// How do we aply class?
// testing bootstrap
headerDiv.setAttribute('class', 'container-xxl green')
const titleText = document.getElementById('titleText');
titleText.setAttribute('class', 'row justify-content-center align-items-center white')
titleText.innerHTML = "Weather App"

// func to auto apply bootstrap classes 
// has 2 Params id name of element and class name for bootstrap code
function bootstrapClass(id, className) {
    const titleText = document.getElementById(id);
    titleText.setAttribute('class', className);
}

