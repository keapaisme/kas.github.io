// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// var myVariable = 'kas'
/* mark.......*/
// this mark too


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = '十分歡迎你啊.... ' + myName;
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/c.png') {
      myImage.setAttribute ('src','images/l.png');
    } else {
      myImage.setAttribute ('src','images/c.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = '十分歡迎你 ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
