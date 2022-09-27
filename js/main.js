console.log('javascript')
// Set const to body and assign id with "bodyid"
let htmlBody = document.querySelector('body');
htmlBody.setAttribute('id','bodyid');
htmlBody.className = "foo";
htmlBody.innerHTML = "Hello";

// Create const mainDiv holds all html elements for weather app
const mainDiv = document.createElement('div');
mainDiv.setAttribute('id','main');

// Create const titlediv holds all html elements for title/ 
// User Input, The first thing the user sees
const titleTextElem = document.createElement('div');
titleTextElem.setAttribute('id','titleText');
titleTextElem.className = "";
const userForumElem = document.createElement('forum');
userForumElem.setAttribute('id','userForum');
userForumElem.className = "";
const userBtnElem = document.createElement('button');
userBtnElem.setAttribute('id','userButton');
userBtnElem.className = "";

//

