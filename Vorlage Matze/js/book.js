/*jslint esversion: 6 */


AFRAME.registerComponent('book', {
    schema: {
        name: { type: 'string', default: '' }
    },

    init: function(){
        console.log("init");

    },

    update: function(){
        console.log("update");
    },

    tick: function () { //wird bei Laden der Seite ausgeführt
        console.log("tick");

    }


});
