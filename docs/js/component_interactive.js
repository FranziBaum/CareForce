/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('interactive', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        isActive: { type: 'boolean', default: false }, //Der Parameter "isActive" beinhaltet einen boolean und ist standarweise "false".
        activeTime: { type: 'int', default: 8000 },
        message: { type: 'string', default: '' },
        influence: { type: 'int', default: 20 },
        startTime: { type: 'int' },
        foundTime: { type: 'int' },
        found: { type: 'boolean', default: false }
    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.

        this.el.addEventListener('click', function () {
            if (this.components.interactive.data.isActive == true) {
                this.components.interactive.find();
            }
        });

    },
    update: function () {
 
    },
    tick: function () {

    },
    activate: function () {
        this.data.isActive = true;
        console.log('aktiviert');
        this.data.startTime = Date.now();
        this.el.classList.add("clickable");
        document.querySelector('#handytext').setAttribute('value', this.el.id);
        console.log("activated "+this.el.id);
        },

    find: function () {
        this.data.found = true;
        this.data.foundTime = Date.now() - this.data.startTime;

        console.log(this.el.id + " gefunden");
        this.data.isActive = false;
        this.el.classList.remove("clickable");
        console.log("clickable removed");

        var heart = document.querySelector('#heart');
        var heartvalue = heart.getAttribute('feedback').value;
        var findpercentage = 1 - (this.data.foundTime / this.data.activeTime);
        heart.setAttribute('feedback', 'value', heartvalue + this.el.components.interactive.data.influence * findpercentage);
        this.el.emit('animate');

    },


    expire: function () {
        console.log("expire");
        this.data.isActive = false;
        var heart = document.querySelector('#heart');
        var heartvalue = heart.getAttribute('feedback').value;
        heart.setAttribute('feedback', 'value', heartvalue - this.data.influence / 2);
        this.classList.remove("clickable");
        document.querySelector('#handytext').setAttribute('value', 'keins');
        console.log("expired");



    }


});


