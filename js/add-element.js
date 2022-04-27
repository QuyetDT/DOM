var newEL = document.createElement('li');

var newText = document.createTextNode('quinoa');

newEL.appendChild(newText);

var position = document.getElementsByTagName('ul')[0];

position.appendChild(newEL);