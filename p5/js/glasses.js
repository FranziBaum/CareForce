/* jslint esversion: 6 */

export default class Glasses{
    constructor(){
        this.x = random(0,windowWidth);
        this.y = random(0,windowHeight);
        this.c = 0;
        this.timerstart = round(millis()); //millis() gibt die Zeit in Sekunden/1000 seitdem das Programm läuft
        this.timerduration = 5000;

    }
    display(){
        fill(this.c);
        rect(this.x,this.y,100,100);
        textSize(30);
        text(round(millis()/1000),100,100);
    }

    hitTest(){
        if(mouseX>this.x-50 && mouseX < this.x+50 && mouseY > this.y-50 && mouseY < this.y+50 && mouseIsPressed){
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