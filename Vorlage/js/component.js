/*jslint esversion: 6 */
import InteractiveObject from "./InteractiveObject.js";

AFRAME.registerComponent('interactiveobject', {
    schema: {
        name: { type: 'string', default: '' }
    },

    init: function(){
        console.log("init");
        var brille = new InteractiveObject(0,1,1,0,10000,20);
    },

    update: function(){
        console.log("update");
    },

    tick: function () { //wird bei Laden der Seite ausgeführt
        console.log("tick");

    }


});
