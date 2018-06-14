/* jslint esversion: 6 */
import Patient from "./patient.js";
import Heart from "./heart.js";
import Glasses from "./glasses.js";

let context = new p5();
let patient = new Patient();
let heart = new Heart();
let glasses = new Glasses();


function loadHandler() {
    context.createCanvas(windowWidth, windowHeight);
    context.frameRate(30);
    context.draw = function () {
        clear();
        rectMode(CENTER);
        glasses.display();
        heart.display();
        patient.updateHeart(heart);
        if(glasses.hitTest()){
            glasses.found();
            glasses.changeMood(patient, 'happy');
    }
    if(glasses.expire()){
        glasses.changeMood(patient, 'sad');
}
    };

   context.mouseClicked = function () {
    }

}

window.addEventListener('load', loadHandler);