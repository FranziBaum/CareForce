/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('interactive', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        isActive: { type: 'boolean', default: true }, //Der Parameter "isActive" beinhaltet einen boolean und ist standarweise "false".
        activeTime: { type: 'int', default: 10 },
        event: {type: 'string', default: ''},
        message: {type: 'string', default: ''},
        influence: {type: 'int', default: 20}
    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.
    var data= this.data; //data bezieht sich auf schema 
    var el= this.el; // el spricht dieses Element an 

    el.addEventListener('click', function () {
        if(this.data.isActive){
            el.emit(data.event); //element ruft event auf 
            console.log(data.event);
            data.isActive = false;
            el.classList.remove("clickable");
            var heart =  document.querySelector('#heart');   
            var heartvalue = heart.getAttribute('feedback').value;
            heart.setAttribute('feedback','value', heartvalue + this.data.influence);
        }
  });
    
    },
    update: function () {
        if(this.data.isActive){
            this.el.classList.add("clickable");
        }
        else{
            el.classList.remove("clickable");
        }

      },
});




function loadHandler() {
   
}


window.addEventListener('DOMContentLoaded', loadHandler);