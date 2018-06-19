/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('interactive', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        isActive: { type: 'boolean', default: false }, //Der Parameter "isActive" beinhaltet einen boolean und ist standarweise "false".
        activeTime: { type: 'int', default: 10000 },
        event: { type: 'string', default: '' },
        message: { type: 'string', default: '' },
        influence: { type: 'int', default: 20 },
        startTime: {type: 'int', default: 0},
        foundTime: {type: 'int'}
    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.
        var data = this.data; //data bezieht sich auf schema 
        var el = this.el; // el spricht dieses Element an 
        var scene = document.querySelector('a-scene');

        el.addEventListener('click', function () {
            if (data.isActive) {
                el.emit(data.event); //element ruft event auf 
                console.log(data.event);
                data.isActive = false;
                el.classList.remove("clickable");
                var heart = document.querySelector('#heart');
                var heartvalue = heart.getAttribute('feedback').value;
                heart.setAttribute('feedback', 'value', heartvalue + data.influence);
            }
        });

    },
    update: function () {
        var cube = document.createElement('a-cube');
        if (this.data.isActive) {
            this.el.classList.add("clickable");
            this.data.startTime = Date.now();
        }
        else if(this.data.isActive == false) {
            this.el.classList.remove("clickable");



        }

    },
    tick: function () {
        if (this.data.isActive) {
            var currentTime = Date.now();
            var time = currentTime - this.data.startTime;
            if(time >= this.data.activeTime){
                this.data.isActive = false;
                this.el.classList.remove("clickable");
                console.log('abgelaufen');
            }
            
        }

    },
});


