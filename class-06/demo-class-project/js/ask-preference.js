var preference = prompt('Would you like a pickles or beets?')
var message;

if (preference === 'pickles'){
  message = 'Pickles are Great!';
} else if (preference === 'beets'){
  message = 'Beets are $$$!';
} else {
  message = 'Ok that\'s cool -don\'t answer correctly!';
}

document.write('<h3>' + message + '</h3>')