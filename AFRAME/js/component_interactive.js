/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('interactive', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        isActive: { type: 'boolean', default: true }, //Der Parameter "isActive" beinhaltet einen boolean und ist standarweise "false".
        activeTime: { type: 'int', default: 10 },
        affectMoodAmount: { type: 'int', default: 0 },
        event: {type: 'string', default: ''},
        message: {type: 'string', default: ''}
    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.
    var data= this.data;
    var el= this.el;

    el.addEventListener('click', function () {
        if(data.isActive){
            el.emit(data.event);
            console.log(data.event);
            data.isActive = false;
            el.classList.remove("clickable");
            document.querySelector('#heart').setAttribute('color', 'red');
        }
  });
    
    },
    update: function (a) {
 

      },
    tick: function () { //Die "tick"-Funktion wird andauernd aufgerufen. (siehe draw() Funktion in p5)

    }
});




function loadHandler() {
   
}


window.addEventListener('DOMContentLoaded', loadHandler);