/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('feedback', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        isActive: { type: 'boolean', default: false }, //Der Parameter "isActive" beinhaltet einen boolean und ist standarweise "false".
        amount: { type: 'boolean', default: false } //Der Parameter "isActive" beinhaltet einen boolean und ist standarweise "false".
    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.
        console.log(this.data.zustand); //Sie gibt den Zustand als console.log() zurück
        this.el.addEventListener('found', function (event) {
            console.log("gefunden!")
        }
        );
    },
    update: function () {  //Die "update"-Funktion wird zu Beginn aufgerufen und wenn ein Parameter geändert/geupdated wird.
        var data = this.data; //um die Übersicht zu behalten werden hier zwei Variablen erstellt. 
        var el = this.el;
        if (data.zustand == 'gefunden') {
            el.object3D.position.set(0, 0, 0);
        }
        else if (data.zustand == 'verloren') {
            el.object3D.position.set(-3, -0.85, 1);

        }
    },
    tick: function () { //Die "tick"-Funktion wird andauernd aufgerufen. (siehe draw() Funktion in p5)

    },
});
