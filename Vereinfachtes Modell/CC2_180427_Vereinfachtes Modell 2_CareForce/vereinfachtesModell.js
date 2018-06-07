/* jslint esversion: 6 */

//Think before you code!!

/*
Je mehr persönlicher Kontakt, desto besser geht es allen Beteiligten.
Was ist, wenn Geld keine Rolle spielen würde? Ist das die Lösung aller Probleme?
Ist die persönliche Freizeit wichtiger als das Wohlbefinden des Patienten (Eltern/Großeltern)?
*/

buttons = [];

class Button{
    constructor (x, y, radius, type, name, startvalue){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.name = name;
        this.value = startvalue;
        this.type = type;
    }
    update(){
        if(this.value > 100){
            this.value = 100;
        }
        if(this.value < 0){
            this.value = 0;
        }
    }
    affect(other,how,amount){
        if(this.value > 0 && this.value < 100){
        let fullamount = amount;
        if(mouseY >= this.y){
            fullamount = fullamount*(-1);
        }
        fill(0,150,200);
        textSize(30);
        if(how == "proportional"){
        other.value += fullamount;
        }
        else if(how == "antiproportional"){
        other.value -= fullamount;
        }
        ellipse(other.x,other.y,other.radius+20);
    }
    }
    display() {
        noStroke();
        textSize(20);
        fill(230,230,230);
        ellipse(this.x, this.y, 10 + this.radius);
        if(this.type == "Betroffener"){
            fill(0,255,0);
        }
        else if(this.type == "Parameter"){
            fill(0,150,200);
        }
        else if(this.type == "Zustand"){
            fill(230,60,60);
        }
        ellipse(this.x, this.y, 10 + this.radius*this.value/100);
        fill(0);
        if(this.type == "Parameter"){
            textSize(30);
            fill('rgba(255,255,255,0.8)');
            ellipse(this.x,this.y-this.radius/4,30);
            ellipse(this.x,this.y+this.radius/4,30);

            fill(0);
            text("+",this.x,this.y-this.radius/4+10);
            text("-",this.x,this.y+this.radius/4+7);
            
        }
        textSize(20);
        text(this.name,this.x,this.y+3);
    }

    click() {
        if(dist(this.x,this.y,mouseX,mouseY) <= this.radius/2) {
            return true;
        }
        else{
            return false;
        }
    }
    change(){
        if(mouseY <= this.y){
            this.value += 1;
            }
        else{
            this.value -= 1;
        }
    }

    }


let pflegedienst = new Button(100, 300, 150, "Betroffener","Pflegedienst",70);
buttons.push(pflegedienst);
let patient = new Button(300, 300, 150, "Betroffener","Patient",50);
buttons.push(patient);
let freizeit = new Button(500, 300, 150, "Parameter","Freizeit",50);
buttons.push(freizeit);
let angehoeriger = new Button(700, 300, 150, "Betroffener","Angehöriger",80);
buttons.push(angehoeriger);
let pKontakt = new Button(200, 500, 150, "Parameter","p. Kontakt",20);
buttons.push(pKontakt);
let pflegegrad = new Button(200, 700, 150, "Parameter","Pflegegrad",100);
buttons.push(pflegegrad);
let pflegezeit = new Button(150, 800, 150, "Parameter","Pflegezeit",50);
buttons.push(pflegezeit);
let pflegegeld = new Button(250, 800, 150, "Parameter","Pflegegeld",50);
buttons.push(pflegegeld);
let pflegenotstand = new Button(500, 700, 150, "Zustand","Pflegenotstand",30);
buttons.push(pflegenotstand);

function draw() {
    clear();
    textAlign(CENTER);
    text("Verändere die Parameter (blau) und sieh was passiert!",width/2,100);
    textAlign(CENTER);
    if (mouseIsPressed) {
        if(pKontakt.click()){
            pKontakt.change();
            pKontakt.affect(patient,"proportional",0.4);
            pKontakt.affect(angehoeriger,"proportional",0.2);
            pKontakt.affect(pflegedienst,"proportional",0.3);
            pKontakt.affect(freizeit,"proportional",0.1);
            /*pKontakt.plus();
            patient.plus();
            angehoeriger.plus();
            patient.plus();
            pflegedienst.plus();
            freizeit.plus();
            */
        }

        if(pflegegeld.click()){
            pflegegeld.change();
            pflegegeld.affect(pflegenotstand,"proportional",0.5);
            pflegegeld.affect(patient,"antiproportional",0.4);
            pflegegeld.affect(angehoeriger,"antiproportional",0.1);
            pflegegeld.affect(pflegedienst,"antiproportional",0.1);
            pflegegeld.affect(freizeit,"antiproportional",0.1);

            /*
            pflegenotstand.plus();
            patient.minus();
            angehoeriger.minus();
            patient.minus();
            pflegedienst.minus();
            freizeit.minus();
            */
        }

        if(freizeit.click()){
            freizeit.change();
            freizeit.affect(patient,"antiproportional",0.3);
            freizeit.affect(pflegedienst,"antiproportional",0.2);
            freizeit.affect(angehoeriger,"proportional",0.5);
            /*
            patient.minus();
            pflegedienst.minus();
            */
        }

        if(pflegegrad.click()){
            pflegegrad.change();
            pflegegrad.affect(pflegedienst,"antiproportional",0.1);
            pflegegrad.affect(patient,"antiproportional",0.2);
            pflegegrad.affect(freizeit,"antiproportional",0.1);
            pflegegrad.affect(angehoeriger,"antiproportional",0.1);
            pflegegrad.affect(pflegenotstand,"proportional",0.2);
            pflegegrad.affect(pflegezeit,"proportional",0.3);
            pflegegrad.affect(pflegegeld,"proportional",0.2);
            
            /*
            pflegenotstand.plus();
            pflegezeit.plus();
            pflegegeld.plus();
            pflegedienst.minus();
            patient.minus();
            freizeit.minus();
            angehoeriger.minus();
            */
        }
    }

    for(var i = 0; i < buttons.length; i++){
        buttons[i].display();
        buttons[i].update();
    }
}

