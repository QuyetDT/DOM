var list = document.getElementsByTagName('ul')[0];
var newItemlast = document.createElement('li');
var newTextlast = document.createTextNode('Cream');
newItemlast.appendChild(newTextlast);
list.appendChild(newItemlast);

var newItemfirst = document.createElement('li');
var newTextfirst = document.createTextNode('kale');
newItemfirst.appendChild(newTextfirst);
list.insertBefore(newItemfirst, list.firstChild);

var listItem = document.querySelectorAll('li');
for (var i = 0; i < listItem.length; i++) {
    listItem[i].className = 'cool';
}

var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItem.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;