/* jslint esversion: 6 */
class Circle {
    constructor(x, y, s) {
        this.x = x;
        this.y = y;
        this.size = s;
        this.sleep = 1;
        this.work = 1;
        this.care = 1;
        this.freetime = 21;
    }
    update(){
        this.freetime = 24 - this.sleep - this.work - this.care;
    }

    display() {
        stroke(0, 0, 0);
        strokeWeight(1);
        ellipse(this.x, this.y, 100 * this.size, 100 * this.size);
        strokeWeight(10);
        stroke(46, 40, 136);
        arc(this.x, this.y, 100 * this.size, 100 * this.size, 0, (this.sleep / 24) * 360);
        stroke(200, 50, 100);
        arc(this.x, this.y, 100 * this.size, 100 * this.size, (this.sleep / 24) * 360, (this.sleep / 24) * 360 + (this.work / 24) * 360);
        stroke(200, 200, 100);
        arc(this.x, this.y, 100 * this.size, 100 * this.size, (this.sleep / 24) * 360 + (this.work / 24) * 360, (this.sleep / 24) * 360 + (this.work / 24) * 360 + (this.care / 24) * 360);
        if(this.freetime > 0){
        stroke(53, 148, 61);
        arc(this.x, this.y, 100 * this.size, 100 * this.size, (this.sleep / 24) * 360 + (this.work / 24) * 360 + (this.care / 24) * 360, 360);
        }
        noStroke();
        fill(53, 148, 61);
        textSize(30*this.size);
        text(this.freetime+" h",this.x,this.y+10*this.size);
    
        noFill();
    }
}

var angehoeriger = new Circle(width * 0.3, height / 6, 2);


function draw() {
    clear();
    strokeCap(SQUARE);
    angleMode(DEGREES);
    textAlign(CENTER);
    if((parseInt(angehoeriger.sleep) + parseInt(angehoeriger.work) + parseInt(angehoeriger.care)) > 24){
        document.getElementById('schlafzeit_input').value = 24-(parseInt(angehoeriger.care) + parseInt(angehoeriger.work));
        angehoeriger.sleep = 24-(parseInt(angehoeriger.care) + parseInt(angehoeriger.work));
        document.getElementById('schlafzeit_wert').innerHTML = round(angehoeriger.sleep) + " h";
    }
    angehoeriger.display();
    angehoeriger.update();
}

function onLoadedHandler() {

    document.getElementById('schlafzeit_input').addEventListener('input', function (evt) {
        var diff = abs(angehoeriger.sleep - this.value);
        angehoeriger.sleep = this.value;
        document.getElementById('arbeitszeit_wert').innerHTML = round(angehoeriger.work) + " h";
        document.getElementById('schlafzeit_wert').innerHTML = round(angehoeriger.sleep) + " h";
        document.getElementById('pflegezeit_wert').innerHTML = round(angehoeriger.care) + " h";
    });

    document.getElementById('arbeitszeit_input').addEventListener('input', function (evt) {
        var diff = abs(angehoeriger.work - this.value);
        angehoeriger.work = this.value;
        document.getElementById('arbeitszeit_wert').innerHTML = round(angehoeriger.work) + " h";
        document.getElementById('schlafzeit_wert').innerHTML = round(angehoeriger.sleep) + " h";
        document.getElementById('pflegezeit_wert').innerHTML = round(angehoeriger.care) + " h";
    });

    document.getElementById('pflegezeit_input').addEventListener('input', function (evt) {
        var diff = abs(angehoeriger.care - this.value);
        angehoeriger.care = this.value;
        document.getElementById('arbeitszeit_wert').innerHTML = round(angehoeriger.work) + " h";
        document.getElementById('schlafzeit_wert').innerHTML = round(angehoeriger.sleep) + " h";
        document.getElementById('pflegezeit_wert').innerHTML = round(angehoeriger.care) + " h";
    });
    }
window.addEventListener("DOMContentLoaded", onLoadedHandler);