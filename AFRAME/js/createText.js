/* jslint esversion: 6 */

function loadHandler() {
    var cameraElement = document.getElementById('kamera1');
    createText("hi was geht");

    
function createText(text) {
    var textElement = document.createElement('a-text');
    cameraElement.appendChild(textElement);
    textElement.setAttribute('value', text);
}


}

window.addEventListener('load', loadHandler);


