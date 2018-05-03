// XMLHttpRequest GET

const xhr = new XMLHttpRequest(); // new XMLHttpRequest create new object (using new operator)
const url = 'http://api-to-call.com/endpoint'; // url to which request will be done

// accesing xhr's object properties during the request

xhr.responseType = 'json'; // line 6 to 11 handles response
xhr.onreadystatechange = function () { // onreadystatechange is an event handler that is called whenever the value of readyState changes, this is set to an annonymous function which will handle the responsse of the request
    if (xhr.readyState === XMLHttpRequest.DONE) {
        // Code to execute with response
    }
};
 // two lines which opens request and sends object
xhr.open('GET', url); // calling .open method on xhr and pass 2 arguments, 'GET' and url. .open() creates and structures the request
xhr.send(); // calling .send with no arguments, sending the xhr object with relevant information to the API URL

// part 4 get request writing the boilerplate step by step without a cheat sheet

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  };
};

xhr.open('GET', url);
xhr.send();

// part 5 working on expandUrl()

// Include data for accessing Google APIs

const apiKey = 'AIzaSyDEuOaesgeC7HEagyzNVFWj2VD5HeSaXho';
const projection = 'FULL';
const url = 'https://www.googleapis.com/urlshortener/v1/url'

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
  const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
}
  }
  xhr.open('GET', urlToExpand);
  xhr.send();
}

function shortenUrl() {

}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);
