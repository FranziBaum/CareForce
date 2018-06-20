/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('game', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        startTime: { type: 'int', default: 0 },
        currentTime: { type: 'int', default: 0 },
        firstChallengeTime: {type: 'int', default: 10000},
        work: {type: 'int', default: 60},
        care: {type: 'int', default: 20},
        free: {type: 'int', default: 20},
        challenges: {type: 'array'}
    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.
    this.data.startTime = Date.now();
    var challenges = document.querySelectorAll('a-collada-model[interactive]');
    this.data.challenges = Array.from(challenges);
    },
    update: function () {
    },
    tick: function(){
        this.data.currentTime = Date.now()-this.data.startTime;
        console.log(this.data.currentTime);
        if(this.data.currentTime >= this.data.firstChallengeTime){
            this.data.startTime = Date.now();
        var randomNumber = Math.floor(Math.random() * this.data.challenges.length);
        var randomChallenge = this.data.challenges[randomNumber];
        randomChallenge.setAttribute('interactive', 'isActive', true);
        this.data.challenges.splice(randomNumber,1);
        console.log(randomChallenge+' ist aktiv');
        document.querySelector('#handytext').setAttribute('value', randomChallenge.id);

        }

    }


});

