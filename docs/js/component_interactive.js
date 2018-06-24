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
        found: {type: 'boolean', default: false}
    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.

        this.el.addEventListener('click', function () {
            
            if (this.components.interactive.data.isActive == true) {
                this.setAttribute('isActive',false);
                this.setAttribute('found',true);
                this.components.interactive.data.foundTime = Date.now() - this.components.interactive.data.startTime;
                var findpercentage = 1-(this.components.interactive.data.foundTime/this.components.interactive.data.activeTime);
                this.emit('animate');
                console.log(findpercentage);
                var heart = document.querySelector('#heart');
                var heartvalue = heart.getAttribute('feedback').value;
                heart.setAttribute('feedback', 'value', heartvalue + this.components.interactive.data.influence*findpercentage);
                this.classList.remove("clickable");
            }
        });

    },
    update: function () {
        if (this.data.isActive == true) {
            this.el.classList.add("clickable");
            this.data.startTime = Date.now();
            document.querySelector('#handytext').setAttribute('value', this.el.id);


        }
        else if (this.data.isActive == false) {
            this.el.classList.remove("clickable");
            document.querySelector('#handytext').setAttribute('value', 'keins');

        }

    },
    tick: function () {
        if (this.data.isActive == true && this.found == false) {
            var currenttime = Date.now() - this.data.startTime;
            if (currenttime > this.data.activeTime) {
                console.log("abgelaufen");
                this.data.isActive = false;
                var heart = document.querySelector('#heart');
                var heartvalue = heart.getAttribute('feedback').value;
                heart.setAttribute('feedback', 'value', heartvalue - this.data.influence/2);

            }
        }





    },
});


