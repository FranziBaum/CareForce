/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('game', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        startTime: { type: 'int', default: 0 },
        currentTime: { type: 'int', default: 0 },
        firstChallengeTime: { type: 'int', default: 10000 },
        startDuration: { type: 'int', default: 10000 },
        caretime: { type: 'int' },
        state: { type: 'string', default: 'start' },
        challenges: { type: 'array' },
        activatedChallenges: {type: 'int', default: 0},
        day:{type: 'int', default: 0}

    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.
        var challenges = document.querySelectorAll('a-collada-model[interactive]');
        this.data.challenges = Array.from(challenges);
    
    },
    update: function () {
        var challenges = document.querySelectorAll('a-collada-model[interactive]');
        this.data.challenges = Array.from(challenges);
        this.data.test="hi ich bin ein test";


        var granny = document.getElementById('granny');
        var handy = document.getElementById('handy');
        var roomlamp = document.getElementById('roomlamp');
        var buttons = document.getElementsByClassName("pick");
        var headline = document.getElementById("poem");
        var end = document.getElementById("endgame");
        var choose = document.getElementById("bye");
        var message = document.getElementById("elixir");
        var scene = document.getElementById("scene");
        var ambientlight = document.getElementById("ambientlight");
        var roomlamp = document.getElementById("roomlamp");
        var sun = document.getElementById("sun");
        var next = document.getElementById('continue');
        var startsound = document.getElementById('startsound');

        if (this.data.state == 'start') {
            console.log("enter start");

            this.data.startTime = Date.now();

        }


        else if (this.data.state == 'intro') {
            console.log("enter intro");

            this.data.startTime = Date.now();
            console.log("enter intro");


            for (var i = 0; i < buttons.length; i++) {
                buttons.item(i).setAttribute("visible", true);
            }
            headline.setAttribute("visible", true);

            choose.setAttribute("visible", false);

            end.setAttribute("visible", false);

            message.setAttribute("visible", false);

            next.setAttribute("visible", true);
        }
        else if (this.data.state == 'play') {

            console.log("enter play");
     


            this.data.startTime = Date.now();
            startsound.pause();

            scene.setAttribute('background', 'color', 'lightblue');

            granny.setAttribute('visible', true);
            handy.setAttribute('visible', true);
            roomlamp.setAttribute('intensity', 0.7);
            ambientlight.setAttribute('intensity', 0.3);
            sun.setAttribute('intensity', 0.5);


            headline.setAttribute("visible", false);
            end.setAttribute("visible", false);
            choose.setAttribute("visible", false);
            message.setAttribute("visible", false);
            next.setAttribute("visible", false);

            for (var i = 0; i < buttons.length; i++) {
                buttons.item(i).setAttribute("visible", false);
            }


        }
        else if (this.data.state == 'decide') {
            console.log("enter decide");

            this.data.startTime = Date.now();


            for (var i = 0; i < buttons.length; i++) {
                buttons.item(i).setAttribute("visible", true);

            }

            end.setAttribute("visible", true);
            choose.setAttribute("visibel", true);
            headline.setAttribute("visible", false);
            message.setAttribute("visible", false);
            next.setAttribute("visible", true);
            handy.setAttribute('visible', false);


        }
        else if (this.data.state == 'outro') {
            console.log("enter outro");

            this.data.startTime = Date.now();


            for (var i = 0; i < buttons.length; i++) {
                buttons.item(i).setAttribute("visible", false);
            }
            headline.setAttribute("visible", false);

            choose.setAttribute("visible", false);

            end.setAttribute("visible", false);

            message.setAttribute("visible", true);

            next.setAttribute("visible", false);
        }
    },
    tick: function () {


        if (this.data.state == 'start') {
            this.data.currentTime = Date.now() - this.data.startTime;
            console.log(this.data.currentTime);
            if (this.data.currentTime >= 7000) {
                this.el.setAttribute('game', 'state', 'intro');
            }

        }

        if (this.data.state == 'play' && (this.data.activatedChallenges < this.data.caretime)) {     
                this.data.currentTime = Date.now() - this.data.startTime;

                if (this.data.currentTime >= this.data.firstChallengeTime && this.data.challenges.length > 0) {

                    var randomNumber = Math.floor(Math.random() * this.data.challenges.length);
                    var randomChallenge = this.data.challenges[randomNumber];

                    randomChallenge.setAttribute('interactive', 'isActive', true);
                    this.data.activatedChallenges += 1;
                    this.data.challenges.splice(randomNumber, 1);
                    this.data.startTime = Date.now();
                    var blurElement = document.getElementById("blurwrap");
                    blurElement.classList = '';
                    blurElement.classList.add('blur'+this.data.activatedChallenges);
            
                }
                if(this.data.activatedChallenges == this.data.caretime){
                    this.el.setAttribute('game','state','decide');;
                }
        }


    }


});

