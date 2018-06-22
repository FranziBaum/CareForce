/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('interactive', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        isActive: { type: 'boolean', default: false }, //Der Parameter "isActive" beinhaltet einen boolean und ist standarweise "false".
        activeTime: { type: 'int', default: 8000 },
        message: { type: 'string', default: '' },
        influence: { type: 'int', default: 20 },
        startTime: { type: 'int' },
        foundTime: { type: 'int' }
    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.

        this.el.addEventListener('click', function () {
            
            if (this.components.interactive.data.isActive == true) {
                console.log("clicked");
                this.emit('animate');
                var heart = document.querySelector('#heart');
                var heartvalue = heart.getAttribute('feedback').value;
                heart.setAttribute('feedback', 'value', heartvalue + this.components.interactive.data.influence);
                this.setAttribute('isActive',false);
                this.classList.remove("clickable");
            }
        });

    },
    update: function () {
        if (this.data.isActive == true) {
            this.el.classList.add("clickable");
            this.data.startTime = Date.now();

        }
        else if (this.data.isActive == false) {
            this.el.classList.remove("clickable");
        }

    },
    tick: function () {
        if (this.isActive == true) {
            var currenttime = Date.now();
            console.log("aktiv");
            if (currenttime > this.data.startTime + this.data.activeTime) {
                console.log("abgelaufen");
            }
        }





    },
});


