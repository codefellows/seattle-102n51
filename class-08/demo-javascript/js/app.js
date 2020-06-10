
function askName() {
  var username = prompt('Greetings Earthling, What is your name?');

  return document.write('<h3>Hello ' + username + '</h3>');
}

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



// get product (hotel or house)
function getProduct(){
  var response = prompt('Would you like a house or hotel?');
  var item;

  while (response !== 'house' && response !=='hotel'){
    response = prompt('Please enter EXACTLY!  Would you like a house or hotel?');
  }

  if(response === 'house'){
    item = '<img src="images/house.png">';
  } else if (response === 'hotel'){
    item = '<img src="images/hotel.png">';
  }

  return item;
}

// get count (how many do they want)
function getCount(){
  var count = prompt('Great, how many would you like?');

  while (isNaN(count) || count === ''){
    count = prompt('PLEASE ENTER A NUMBNER, how many would you like?');
  }

  return count;
}

// show order - render to the page
function showOrder(){
  var result = ''
  var itemType = getProduct();
  var total = getCount();

  for (var i = 0; i < total; i++){
    result = result + '<p>' + itemType + '</p>';
  }

  return document.write(result);
}


for (var i = 0; i <= 20; i++){  //21 iterations
  console.log(i);
}

var j = 0;
while (j < 9 ){
  console.log('j: ' + j); //print value of i
  j++;            //incrememnt i, add 1 to i each time.
}