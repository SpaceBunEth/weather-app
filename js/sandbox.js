// sandbox
console.log('javascript')
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

function ObjElemCreate(listElem) {
    for (const key in listElem){
        if(listElem.hasOwnProperty(key)) {
            createElem(listElem[key],`${key}`,headerDiv);
        }
    }
}

ObjElemCreate(listElem)

// How do we aply class?
// testing bootstrap
headerDiv.setAttribute('class', 'container-xxl green')