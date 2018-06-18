/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('feedback', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        value: { type: 'int', default: 100 },

    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.
    
    },
    update: function () {
        var data= this.data;
        var el= this.el;
<<<<<<< HEAD
=======
<<<<<<< HEAD
        el.setAttribute('material', 'color','rgb('+Math.round((data.value/100)*255)+',0,'+Math.round(255-((data.value/100)*255))+')');
=======
<<<<<<< HEAD
>>>>>>> 7b6250854a26c68767f129f6e62d66ad417e726c
>>>>>>> ef9f354d0f3e41322d88d9c3a98ece01455d70a4

        el.setAttribute('material', 'color','rgb('+Math.round((data.value/100)*255)+',0,'+Math.round(255-((data.value/100)*255))+')');
      },

});

