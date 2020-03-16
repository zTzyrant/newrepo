var container = document.getElementById('container')
window.onmousemove = function(e){
    var x = e.clientX,
        y = e.clientY;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
}
function myFunction() {
var x = document.getElementById("container");
if (x.style.display === "none") {
    x.style.display = "flex";
} else {
    x.style.display = "none";
}
}
function showStuff() {
document.getElementById("container2").style.display = 'flex';
}
function showStuff2() {
document.getElementById("container2").style.display = 'none';
}

var i = 0;
var txt = 'Hi, my name is Muhammad Zein Akbar, This is my 1st assignment for CSW202 lecture.';
var speed = 50;

function typeWriter() {
if (i < txt.length) {
    document.getElementById("typeMe").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunct1ion(this);
      }
    };
    xhttp.open("GET", "cd_catalog.xml", true);
    xhttp.send();
  }
  function myFunct1ion(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Artist</th><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }