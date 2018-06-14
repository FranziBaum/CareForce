/* jslint esversion: 6 */

//Ich bin die Logik!

export default class InteractiveObject{ //zb. Brille, Buch, ...
    constructor(x,y,z,ry, timer, influence){
        this.x = x;
        this.y = y;
        this.z = z;
        this.ry = ry;
        this.found = false;
        this.timer = timer; //1000 Millis entspricht 1 sec
        this.influence = influence; //beeinflusst Stimmung der Granny (0-100), zeigt im Herz als Farbe an
    }
    interact(){
        this.found = true;
    }

}
