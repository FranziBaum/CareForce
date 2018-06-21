/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('game', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        startTime: { type: 'int', default: 0 },
        currentTime: { type: 'int', default: 0 },
        firstChallengeTime: { type: 'int', default: 10000 },
        caretime: { type: 'int', default: 20 },
        state: { type: 'string', default: 'start' },
        challenges: { type: 'array' }
    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.
        this.data.startTime = Date.now();
        var challenges = document.querySelectorAll('a-collada-model[interactive]');
        this.data.challenges = Array.from(challenges);
    },
    update: function () {
        var granny = document.getElementById('granny');
        var handy = document.getElementById('handy');
        var roomlamp = document.getElementById('roomlamp');
        var buttons = document.getElementsByClassName("pick");
        var headline = document.getElementById("poem");
        var end= document.getElementById("endgame");
        var choose= document.getElementById("bye");
        var message= document.getElementById("elixir");
        var scene = document.getElementById("scene");
        var ambientlight = document.getElementById("ambientlight");
        var roomlamp = document.getElementById("roomlamp");
        var sun = document.getElementById("sun");
        var next = document.getElementById('next');


        if (this.data.state == 'start') {
            ambientlight.setAttribute('intensity',0);
            roomlamp.setAttribute('intensity',0);
            sun.setAttribute('intensity',0);



            for(var i = 0; i < buttons.length; i++){
                buttons.item(i).setAttribute("visible", false);
            }
               headline.setAttribute("visible", false);
    
               choose.setAttribute("visible", false);
    
               end.setAttribute("visible",false);
            
            message.setAttribute("visible", false);

            next.setAttribute("visible",false);
        }

        
        else if (this.data.state == 'intro') {


           for(var i = 0; i < buttons.length; i++){
            buttons.item(i).setAttribute("visible", true);
        }
           headline.setAttribute("visible", true);

           choose.setAttribute("visible", false);

           end.setAttribute("visible",false);

           message.setAttribute("visible", false);

           next.setAttribute("visible",true);
        }
        else if (this.data.state == 'play') {
            
            scene.setAttribute('background','color','lightblue');

            granny.setAttribute('visible', true);
            handy.setAttribute('visible', true);
            roomlamp.setAttribute('intensity', 0.7);

            headline.setAttribute("visible", false);
            end.setAttribute("visible",false);
            choose.setAttribute("visible", false);
            message.setAttribute("visible", false);
            next.setAttribute("visible",false);

            for(var i = 0; i < buttons.length; i++){
                buttons.item(i).setAttribute("visible", false);
            }


        }
        else if (this.data.state == 'decide') {

            for(var i = 0; i < buttons.length; i++){
                buttons.item(i).setAttribute("visible", true);
            
            }
           
            end.setAttribute("visible",true);
            choose.setAttribute("visibel", true);
            headline.setAttribute("visible", false);
            message.setAttribute("visible", false);
            next.setAttribute("visible",true);

        }
        else if (this.data.state == 'outro') {
            
            for(var i = 0; i < buttons.length; i++){
                buttons.item(i).setAttribute("visible", false);
            }
               headline.setAttribute("visible", false);
    
               choose.setAttribute("visible", false);
    
               end.setAttribute("visible",false);
            
            message.setAttribute("visible", true);

            next.setAttribute("visible",false);
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

