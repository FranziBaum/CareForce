/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('game', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        startTime: { type: 'int', default: 0 },
        currentTime: { type: 'int', default: 0 },
        firstChallengeTime: {type: 'int', default: 10000}


    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.
    this.data.startTime = Date.now();
    var challenges = document.querySelectorAll('a-collada-model[interactive]');
    var challengesArray = Array.from(challenges);
    
    },
    update: function () {
    },
    tick: function(){
        this.data.currentTime = Date.now()-this.data.startTime;
        if(this.data.currentTime >= this.data.firstChallengeTime){
            this.data.startTime = Date.now();
        document.querySelector('#brille').setAttribute('interactive', 'isActive', true);
        }

    }


});

