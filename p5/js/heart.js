/* jslint esversion: 6 */
export default class Heart{
    constructor(){
        this.r = 255;
        this.b = 0;

    }
    display(){
        fill(this.r, 0, this.b);
        ellipse(300,300,100);
    }

}