/* jslint esversion: 6 */

//Think before you code!!

/*
Je mehr persönlicher Kontakt, desto besser geht es allen Beteiligten.
Was ist, wenn Geld keine Rolle spielen würde? Ist das die Lösung aller Probleme?
Ist die persönliche Freizeit wichtiger als das Wohlbefinden des Patienten (Eltern/Großeltern)?
*/

buttons = [];

class Button{
    constructor (x, y, radius, color, name, startvalue){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.name = name;
        this.value = startvalue;
    }
    update(){
        if(this.value > 100){
            this.value = 100;
        }
        if(this.value < 0){
            this.value = 0;
        }
    }
    display() {
        fill(this.color);
        noStroke();
        textSize(20);
        ellipse(this.x, this.y, 10 + this.radius*this.value/100);
        fill(0);
        text(this.name,this.x,this.y);
    }

    click() {
        if(dist(this.x,this.y,mouseX,mouseY) <= this.radius/2) {
            return true;
        }
        else{
            return false;
        }
    }

    plus(){
        this.value += 1;
    }
    minus(){
        this.value -= 1;
    }

}

let pflegedienst = new Button(100, 300, 150, "rgba(130, 255, 0, 1)","Pflegedienst",70);
buttons.push(pflegedienst);
let patient = new Button(300, 300, 150, "rgba(130, 255, 0, 1)","Patient",50);
buttons.push(patient);
let freizeit = new Button(500, 300, 150, "rgba(170, 200, 255, 1)","Freizeit",50);
buttons.push(freizeit);
let angehoeriger = new Button(700, 300, 150, "rgba(130, 255, 0, 1)","Angehöriger",80);
buttons.push(angehoeriger);
let pKontakt = new Button(200, 500, 150, "rgba(170, 200, 255, 1)","p. Kontakt",20);
buttons.push(pKontakt);
let pflegegrad = new Button(200, 700, 150, "rgba(170, 200, 255, 1)","Pflegegrad",100);
buttons.push(pflegegrad);
let pflegezeit = new Button(150, 800, 150, "rgba(226, 170, 255, 0.7)","Pflegezeit",50);
buttons.push(pflegezeit);
let pflegegeld = new Button(250, 800, 150, "rgba(170, 200, 255, 0.7)","Pflegegeld",50);
buttons.push(pflegegeld);
let pflegenotstand = new Button(500, 700, 150, "rgba(255, 100, 0, 1)","Pflegenotstand",30);
buttons.push(pflegenotstand);

function draw() {
    clear();
    textAlign(LEFT);
    text("Verändere die Parameter (blau) und sieh was passiert!",100,100);
    textAlign(CENTER);

    for(var i = 0; i < buttons.length; i++){
        buttons[i].display();
        buttons[i].update();
    }

    if (mouseIsPressed) {
        if(pKontakt.click()){
            pKontakt.plus();
            patient.plus();
            angehoeriger.plus();
            patient.plus();
            pflegedienst.plus();
            freizeit.plus();
        }

        if(pflegegeld.click()){
            pflegenotstand.plus();
            patient.minus();
            angehoeriger.minus();
            patient.minus();
            pflegedienst.minus();
            freizeit.minus();
        }

        if(freizeit.click()){
            patient.minus();
            pflegedienst.minus();
        }

        if(pflegegrad.click()){
            pflegenotstand.plus();
            pflegezeit.plus();
            pflegegeld.plus();
            pflegedienst.minus();
            patient.minus();
            freizeit.minus();
            angehoeriger.minus();
        }
    }
}

