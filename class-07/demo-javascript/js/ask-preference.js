var preference = prompt('Would you like a hotel or house?')
var message;

if (preference === 'house'){
  message = 'Houses are Great!';
} else if (preference === 'hotel'){
  message = 'Hotels are $$$!';
} else {
  message = 'Ok that\'s cool -don\'t answer correctly!';
}

document.write('<h3>' + message + '</h3>')