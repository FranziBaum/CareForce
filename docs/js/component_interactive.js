/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('interactive', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        isActive: { type: 'boolean', default: false }, //Der Parameter "isActive" beinhaltet einen boolean und ist standarweise "false".
        activeTime: { type: 'int', default: 15000 },
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
        var currentTime = Date.now() - this.data.startTime;
                if(this.data.isActive == true && currentTime > this.data.activeTime){
                    this.expire();
        }

    },
    activate: function () {
        if(this.el.id == "glasses"){
            this.el.setAttribute("position", "-3, -0.85, 1");
        }
        var startsound = document.getElementById("start"+this.el.id);
        startsound.components.sound.playSound();

        this.data.isActive = true;
        console.log('aktiviert');
        this.data.startTime = Date.now();
        this.el.classList.add("clickable");
        },

    find: function () {
        var endsound = document.getElementById("end"+this.el.id);
        endsound.components.sound.playSound();


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
        var expiresound = document.getElementById("expire"+this.el.id);
        expiresound.components.sound.playSound();

        this.data.isActive = false;
        var heart = document.querySelector('#heart');
        var heartvalue = heart.getAttribute('feedback').value;
        heart.setAttribute('feedback', 'value', heartvalue - this.data.influence / 2);
        this.el.classList.remove("clickable");
        console.log("expired");

    }


});


