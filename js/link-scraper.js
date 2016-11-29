/**
* Author: Prasath Mani
*/

var URI;

function urlExists(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.status < 400);
    }
  };
  xhr.open('HEAD', url);
  xhr.send();
}

var someUrl = 'http://www.i-m.mx/h3k/H3K/';
urlExists(someUrl, function(exists) {
    console.log('"%s" exists?', someUrl, exists);
});