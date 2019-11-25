'use strict';

var url = "https://api.ipify.org/?format=json";

window.onload = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = 'Your current IP: ' + JSON.parse(this.responseText).ip;
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

let reset = document.getElementById('reset');
reset.onclick = function(element) {
    document.getElementById("data").innerHTML = 'Reloading....';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = 'Your current IP: ' + JSON.parse(this.responseText).ip;
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
};