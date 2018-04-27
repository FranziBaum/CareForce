/* jslint esversion: 6 */

//Think before you code!

class Dice{
    constructor (paramX, paramY, paramWidth, paramHeight, paramColor){
        this.x = paramX; //Attribut
        this.y = paramY;
        this.width = paramWidth;
        this.height = paramHeight;
        this.value = 1;
        this.color = paramColor;
        this.pointsize = 15;
    }

    points(){
        if(this.value == 1){
            fill(0);
            ellipse(this.x + this.width / 2, this.y + this.height / 2, this.pointsize);
            console.log("Zeichne 1");
        }
        if(this.value == 2){
            fill(0);
            ellipse(this.x + this.width / 4, this.y + this.height / 4, this.pointsize);
            ellipse(this.x + this.width - 20, this.y + this.height - 20, this.pointsize);
            console.log("Zeichne 2");
        }
        if(this.value == 3){
            fill(0);
            ellipse(this.x + this.width / 4, this.y + this.height / 4, this.pointsize);
            ellipse(this.x + this.width / 2, this.y + this.height / 2, this.pointsize);
            ellipse(this.x + this.width - 20, this.y + this.height - 20, this.pointsize);
            console.log("Zeichne 3");
        }
        if(this.value == 4){
            fill(0);
            ellipse(this.x + this.width - 20, this.y + this.height / 4, this.pointsize);
            ellipse(this.x + this.width - 20, this.y + this.height - 20, this.pointsize);
            ellipse(this.x + this.width / 4, this.y + this.height / 4, this.pointsize);
            ellipse(this.x + 20, this.y + this.height - 20, this.pointsize);
            console.log("Zeichne 4");
        }

        if(this.value == 5){
            fill(0);
            ellipse(this.x + this.width - 20, this.y + this.height / 4, this.pointsize);
            ellipse(this.x + this.width - 20, this.y + this.height - 20, this.pointsize);
            ellipse(this.x + this.width / 2, this.y + this.height / 2, this.pointsize);
            ellipse(this.x + this.width / 4, this.y + this.height / 4, this.pointsize);
            ellipse(this.x + 20, this.y + this.height - 20, this.pointsize);
            console.log("Zeichne 5");
        }

        if(this.value == 6){
            fill(0);
            ellipse(this.x + this.width - 20, this.y + this.height / 4, this.pointsize);
            ellipse(this.x + this.width - 20, this.y + this.height - 20, this.pointsize);
            ellipse(this.x + this.width / 4, this.y + this.height / 2, this.pointsize);
            ellipse(this.x + this.width - 20, this.y + this.height / 2, this.pointsize);

            ellipse(this.x + this.width / 4, this.y + this.height / 4, this.pointsize);
            ellipse(this.x + 20, this.y + this.height - 20, this.pointsize);
            console.log("Zeichne 6");
        }
    }

    draw(){ // Methode
        fill(this.color);
        rect(this.x, this.y, this.width, this.height,10);
        //fill(0);
        //text(this.value, this.x, this.y);
    }

    roll(){
        this.value = ceil(random(0,6));
    }

    hitDice(){
        if(mouseIsPressed && mouseX >= this.x && mouseX <= this.x+this.width && mouseY >= this.y && mouseY <= this.y+this.height){
            this.roll();
            this.points();
            console.log("Geklickt");
            console.log(this.value);
        }
    }
}

let diceklick = new Dice (30, 20, 80, 80, 255);
let dice1 = new Dice (30, 150, 80, 80, 255);
let dice2 = new Dice (130, 150, 80, 80, 255);
let dice3 = new Dice (230, 150, 80, 80, 255);
let dice4 = new Dice (330, 150, 80, 80, 255);
let dice5 = new Dice (430, 150, 80, 80, 255);

function draw(){
    clear();

    fill(140, 9, 53);
    textSize(30);
    var augenzahl = dice1.value + dice2.value + dice3.value + dice4.value + dice5.value;
    text("Augenzahl = " + augenzahl, 200, 68);

    if(mouseIsPressed && mouseX >= 50 && mouseX <= 50 + 80 && mouseY >= 20 && mouseY <= 20+80){
        dice1.roll();
        dice2.roll();
        dice3.roll();
        dice4.roll();
        dice5.roll();
        diceklick.color = 75;
        console.log("geklickt");
        console.log(dice1.value);
    }else{
        diceklick.color = 255;
    }

    diceklick.draw();

    dice1.draw();
    dice2.draw();
    dice3.draw();
    dice4.draw();
    dice5.draw();

    dice1.hitDice();
    dice2.hitDice();
    dice3.hitDice();
    dice4.hitDice();
    dice5.hitDice();

    dice1.points();
    dice2.points();
    dice3.points();
    dice4.points();
    dice5.points();

    fill(0);
    textSize(25);
    text("roll all!" , 35, 68);
}

