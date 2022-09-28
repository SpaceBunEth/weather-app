// sandbox
console.log('javascript')
// Set const to body and assign id with "bodyid"
let htmlBody = document.querySelector('body');
htmlBody.setAttribute('id','bodyid');

// Create const mainDiv holds all html elements for weather app
const mainDiv = document.createElement('div');
mainDiv.setAttribute('id','main');
htmlBody.appendChild(mainDiv);

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
    madeElem.setAttribute('id', idName);
    parentElem.appendChild(madeElem);

}

createElem('div', 'anotherDiv', htmlBody);