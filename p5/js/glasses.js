/* jslint esversion: 6 */

export default class Glasses{
    constructor(){
        this.x = random(0,windowWidth);
        this.y = random(0,windowHeight);
        this.c = 0; //color
        this.timerstart = millis(); //millis() gibt die Zeit in Sekunden/1000 seitdem das Programm läuft
        this.timerduration = 5000;
        this.timer = this.timerduration;
    }
    display(){
        fill(this.c);
        rect(this.x,this.y,100,100);
        textSize(30);
        this.timer = this.timerduration-this.timerstart-millis();
        if(this.timer > 0){
        text(round((this.timer/1000)),100,100);
        }
    }

    hitTest(){
        if(mouseX>this.x-50 && mouseX < this.x+50 && mouseY > this.y-50 && mouseY < this.y+50 && mouseIsPressed && this.timer > 0){
            return true;
        }
        else{
            return false;
        }

    }

    changeMood(other, mood){
        other.mood = mood;

    }

    found(){
        this.c = 255;
        
    }

    expire(){
        if(millis() >= this.timerstart + this.timerduration && this.c == 0){
            return true;
        }
        else{
            return false;
        }
    }
}