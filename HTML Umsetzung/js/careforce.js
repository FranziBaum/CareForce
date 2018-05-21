/* jslint esversion: 6 */

import Circle from "./circle.js";

let context = new p5(); //Erstellen einer neuen p5 Instanz



function onLoadedHandler() {

    let angehoeriger = new Circle(2);
    let canvas = context.createCanvas(windowWidth, 300);
    canvas.parent('canvas1');
    context.frameRate(60);

    context.draw = function () {
        clear();
        strokeCap(SQUARE);
        angleMode(DEGREES);
        textAlign(CENTER);
        angehoeriger.display(); //Anzeigen des Kreises
        angehoeriger.reposition(); //Positionierung des Kreises
        angehoeriger.update(); //Updaten der Freizeit
        if ((parseInt(angehoeriger.sleep) + parseInt(angehoeriger.work) + parseInt(angehoeriger.care)) > 24) {
            document.getElementById('schlafzeit_input').value = 24 - (parseInt(angehoeriger.care) + parseInt(angehoeriger.work)); //Input Parameter value
            angehoeriger.sleep = 24 - (parseInt(angehoeriger.care) + parseInt(angehoeriger.work)); //Kreis Parameter sleep
            document.getElementById('schlafzeit_wert').innerHTML = angehoeriger.sleep + " h"; //angezeigter Wert unter Schieberegler
        }
    }





    document.getElementById('schlafzeit_input').addEventListener('input', function () {
        angehoeriger.sleep = this.value;
        document.getElementById('schlafzeit_wert').innerHTML = round(angehoeriger.sleep) + " h";
    });

    document.getElementById('arbeitszeit_input').addEventListener('input', function () {
        angehoeriger.work = this.value;
        document.getElementById('arbeitszeit_wert').innerHTML = round(angehoeriger.work) + " h";
    });

    document.getElementById('pflegezeit_input').addEventListener('input', function () {
        angehoeriger.care = this.value;
        document.getElementById('pflegezeit_wert').innerHTML = round(angehoeriger.care) + " h";
    });
}

function onResizeHandler(){
    resizeCanvas(windowWidth, 300);
    angehoeriger.reposition();
}



window.addEventListener("load", onLoadedHandler);
window.addEventListener("resize", onResizeHandler);