
//psuedo code

// step 1
// insert ask-name into a function and insert into code and render results
function askName() {
  var username = prompt('Greetings Earthling, What is your name?');

  return document.write('<h3>Hello ' + username + '</h3>');
}

// step 2
// insert welcome into a function and insert into html and render results
function addGreeting() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  if (hourNow > 18) {
    greeting = 'Good Evening!';
  } else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good Morning!';
  } else {
    greeting = 'Welcome!';
  }
  return document.write('<h3>' + greeting + '</h3>');
}

// step 3
// insert get product -ideally show images
// insert into html and render results
function askPreference() {
  var preference = prompt('Would you like a hotel or house?')
  var message;

  if (preference === 'house') {
    message = 'Houses are Great!';
  } else if (preference === 'hotel') {
    message = 'Hotels are $$$!';
  } else {
    message = 'Ok that\'s cool -don\'t answer correctly!';
  }

  return document.write('<h3>' + message + '</h3>');
}



// camelCase
// askNameExample

// kebab-case
// ask-name-example

// snake_case
// ask_name_example

function logger() {
  var message = 'hello world';
  // console.log(message);
  return message;
}

logger();

function logUsername(username) {
  var message = 'hello ' + username + '!';
  return message;
}

logUsername('Ryan');

var loggerOne = function() {
  var message = 'hello world';
  return message;
}

var logUsernameTwo = function(username){
  var message = 'hello ' + username + '!';
  return message;
}

//let's build a cake making function!

var buildCake = function(cakeType, frosting, filling){
  var message = ('I want a ' + cakeType + ' cake iced with ' + frosting + ' frosting and filled with ' + filling + '!');
  return message;
}

buildCake('white', 'lavender', 'lemon custard');
