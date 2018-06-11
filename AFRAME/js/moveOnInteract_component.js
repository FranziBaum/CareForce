/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('moveOnInteract', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        isActive: { type: 'boolean', default: false }, //Der Parameter "isActive" beinhaltet einen boolean und ist standarweise "false".
        activeTime: { type: 'int', default: 10},
        affectMoodAmount: { type: 'int', default: 0 } //Um welchen Faktor soll das Objekt 
    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.
        console.log(this.data.isActive); //Sie gibt über console.log() zurück ob das Objekt aktiv ist.
    },
    update: function () {  //Die "update"-Funktion wird zu Beginn aufgerufen und wenn ein Parameter geändert/geupdated wird.
        var data = this.data; //um die Übersicht zu behalten werden hier zwei Variablen erstellt. 
        var el = this.el;
        
    },
    tick: function () { //Die "tick"-Funktion wird andauernd aufgerufen. (siehe draw() Funktion in p5)
    if(this.data.isActive){
        for(var i = 0; i < this.data.activeTime*1000;i++){
            if(i == this.data.activeTime*1000){
                this.data.isActive = false;
            }
        }
    }

    },
});




function loadHandler() {


    document.querySelector('#brille').addEventListener('mouseenter', function (event) {
        document.querySelector('#brille').emit('found');
    }
    );

}

window.addEventListener('load', loadHandler);