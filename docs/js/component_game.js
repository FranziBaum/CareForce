/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('game', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        startTime: { type: 'int', default: 0 },
        currentTime: { type: 'int', default: 0 },
        firstChallengeTime: { type: 'int', default: 10000 },
        caretime: { type: 'int', default: 20 },
        state: { type: 'string', default: 'play' },
        challenges: { type: 'array' }
    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.
        this.data.startTime = Date.now();
        var challenges = document.querySelectorAll('a-collada-model[interactive]');
        this.data.challenges = Array.from(challenges);
    },
    update: function () {
        if (this.data.state == 'start') {

        }
        else if (this.data.state == 'intro') {

        }
        else if (this.data.state == 'play') {
            var granny = document.getElementById('granny');
            var handy = document.getElementById('handy');
            var roomlamp = document.getElementById('roomlamp');


            granny.setAttribute('visible', true);
            handy.setAttribute('visible', true);
            roomlamp.setAttribute('intensity', 0.7);




        }
        else if (this.data.state == 'decide') {

        }
        else if (this.data.state == 'outro') {

        }
    },
    tick: function () {
        if(this.data.state == 'play'){
        this.data.currentTime = Date.now() - this.data.startTime;
        if (this.data.currentTime >= this.data.firstChallengeTime && this.data.challenges.length > 0) {
            this.data.startTime = Date.now();
            var randomNumber = Math.floor(Math.random() * this.data.challenges.length);
            var randomChallenge = this.data.challenges[randomNumber];
            randomChallenge.setAttribute('interactive', 'isActive', true);
            this.data.challenges.splice(randomNumber, 1);
            console.log(randomChallenge.id + ' ist aktiv');
            document.querySelector('#handytext').setAttribute('value', randomChallenge.id);
        }

    }
}


});

