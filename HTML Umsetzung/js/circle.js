/* jslint esversion: 6 */
export default class Circle {
    constructor(s) {
        this.x = width*0.15;
        this.y = height / 4;
        this.size = s;
        this.sleep = 1;
        this.work = 1;
        this.care = 1;
        this.freetime = 21;
    }
    update(){
        this.freetime = 24 - this.sleep - this.work - this.care; //aktualisiert den Freizeit Wert nach Einstellung
    }

    display() { //zeigt den Kreis mit den verschiedenen Segmenten an
        strokeWeight(5*this.size);
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

    reposition(){
        this.x = width*0.15;
        this.y = height / 4;
    }
}
