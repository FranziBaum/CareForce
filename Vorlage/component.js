/* jslint esversion: 6 */


AFRAME.registerComponent('interactiveobject', {
    schema: {
        name: { type: 'string', default: '' },
        
        },
  
    init: function () { //wird bei Laden der Seite ausgeführt


    },
    update: function (){ //wird bei Laden der Seite und bei Veränderung der Parameter ausgeführt


    },
    tick: function(){ //ähnelt der draw funktion in p5, wird mit jedem Frame aufgerufen
    console.log("Hi");
    }

  });
