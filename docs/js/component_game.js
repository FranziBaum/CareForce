AFRAME.registerComponent('game', {
    schema: { 
        startTime: { type: 'int', default: 0 },
        currentTime: { type: 'int', default: 0 },
        firstChallengeTime: { type: 'int', default: 15000},
        caretime: { type: 'int', default: 1 },
        state: { type: 'string', default: 'start' },
        challenges: { type: 'array' },
        activatedChallenges: { type: 'int', default: 0 },
        day: { type: 'int', default: 1 }
    },
    init: function () { 
        this.standby();
    },
    update: function () {




    },
    tick: function () {
        this.data.currentTime = Date.now() - this.data.startTime;
                if (this.data.state == 'play') {
            if (this.data.activatedChallenges < this.data.caretime && this.data.challenges.length > 0) {

                if (this.data.currentTime >= this.data.firstChallengeTime) {
                    this.startrandomChallenge();
                }
            }
            if (this.data.activatedChallenges == this.data.caretime) {
                if (this.data.currentTime >= this.data.firstChallengeTime*1.5) {
                    this.endDay();

                }


            }

        }


    },

    standby: function () {
        this.data.state = "standby";
        start.setAttribute("visible", true);







    },

    startIntro: function () {
        var buttons = document.getElementsByClassName("pick");
        var headline = document.getElementById("poem");
        var next = document.getElementById('continue');
        var roomlamp = document.getElementById("roomlamp");
        var introsound = document.getElementById("introsound");
        var start = document.getElementById("start");
        var logo = document.getElementById("logo");
        logo.setAttribute("visible", false);



        introsound.components.sound.playSound();
        roomlamp.setAttribute("light","intensity", 0.06);


        introsound.addEventListener('sound-ended', function () {
            for (var i = 0; i < buttons.length; i++) {
                buttons.item(i).setAttribute("visible", true);
            }

            headline.setAttribute("visible", true);
            next.setAttribute("visible", true);
            start.setAttribute("visible", false);


        });


    },

    startrandomChallenge: function () {
        this.data.startTime = Date.now();
        console.log('starting random Challenge');
        var randomNumber = Math.floor(Math.random() * this.data.challenges.length);
        var randomChallenge = this.data.challenges[randomNumber];
        console.log('got random challenge');

        randomChallenge.components.interactive.activate();
        this.data.activatedChallenges += 1;
        this.data.challenges.splice(randomNumber, 1);
        console.log("removed challenge from array");
        var blurElement = document.getElementById("blurwrap");
        blurElement.classList = '';
        blurElement.classList.add('blur' + this.data.activatedChallenges);
        console.log("added blur");
    },

    startDay: function () {
        console.log("start Day");
        var yesterday = this.data.day;
        this.data.state = "play";
        this.data.day = yesterday+1;
        var challenges = document.querySelectorAll('a-collada-model[interactive]');
        this.data.challenges = Array.from(challenges);
        var buttons = document.getElementsByClassName("pick");
        var headline = document.getElementById("poem");
        var end = document.getElementById("endgame");
        var choose = document.getElementById("bye");
        var granny = document.getElementById('granny');
        var handy = document.getElementById('handy');
        var message = document.getElementById("elixir");
        var scene = document.getElementById("scene");
        var ambientlight = document.getElementById("ambientlight");
        var roomlamp = document.getElementById("roomlamp");
        var next = document.getElementById('continue');
        var grannygreet1 = document.getElementById("grannygreet1");
        var grannygreet2 = document.getElementById("grannygreet2");
        var grannygreet3 = document.getElementById("grannygreet3");
        var grannygreets = [grannygreet1, grannygreet2, grannygreet3];
        var logo = document.getElementById("logo");



        var start = document.getElementById("start");
        var blurElement = document.getElementById("blurwrap");
        start.setAttribute("visible", false);
        logo.setAttribute("visible", false);



        this.data.startTime = Date.now();
        this.data.activatedChallenges = 0;
        blurElement.classList = '';
        blurElement.classList.add('blur' + this.data.activatedChallenges);
        var challenges = document.querySelectorAll('a-collada-model[interactive]');
        console.log(challenges);
        for (var i = 0; i < challenges.length; i++) {
            challenges.item(i).setAttribute("found", false);
            challenges.item(i).setAttribute("isActive", false);
        }
        this.data.challenges = Array.from(challenges);
        for (var i = 0; i < buttons.length; i++) {
            buttons.item(i).setAttribute("visible", false);
        }
        scene.setAttribute('background', 'color', 'lightblue');
        granny.setAttribute('visible', true);
        //handy.setAttribute('visible', true);
        roomlamp.setAttribute('light','intensity', 0.7);
        ambientlight.setAttribute('light','intensity', 0.3);
        headline.setAttribute("visible", false);
        end.setAttribute("visible", false);
        choose.setAttribute("visible", false);
        message.setAttribute("visible", false);
        next.setAttribute("visible", false);

        var randomGreet = grannygreets[Math.floor(Math.random()*grannygreets.length)];

            randomGreet.components.sound.playSound();

    
    },

    endDay: function () {
        console.log("end day");
        this.data.state = "decide";
        var end = document.getElementById("endgame");
        //var handy = document.getElementById('handy');
        var choose = document.getElementById("bye");
        var headline = document.getElementById("poem");
        var message = document.getElementById("elixir");
        var next = document.getElementById('continue');
        var buttons = document.getElementsByClassName("pick");
        var endday1h_sound = document.getElementById("endday1h");
        var endday2h_sound = document.getElementById("endday2h");
        var endday4h_sound = document.getElementById("endday4h");
        var glasses = document.getElementById("glasses");
        var window = document.getElementById("window");

        glasses.setAttribute("position", "-3, -0.85, 1");
        window.setAttribute("rotation", "0 0 0");


        if(this.data.caretime == 1){
            endday1h_sound.components.sound.playSound();
            endday1h.addEventListener('sound-ended', function () {
                //handy.setAttribute('visible', false);
                end.setAttribute("visible", true);
                choose.setAttribute("visibel", true);
                headline.setAttribute("visible", false);
                message.setAttribute("visible", false);
                next.setAttribute("visible", true);
                for (var i = 0; i < buttons.length; i++) {
                    buttons.item(i).setAttribute("visible", true);
                }  
    
    
            });
        }
        else if(this.data.caretime == 2){
            endday2h_sound.components.sound.playSound();
            endday2h.addEventListener('sound-ended', function () {
                //handy.setAttribute('visible', false);
                end.setAttribute("visible", true);
                choose.setAttribute("visibel", true);
                headline.setAttribute("visible", false);
                message.setAttribute("visible", false);
                next.setAttribute("visible", true);
                for (var i = 0; i < buttons.length; i++) {
                    buttons.item(i).setAttribute("visible", true);
                }  
    
    
            });
        }
        else if(this.data.caretime == 4){
            endday4h_sound.components.sound.playSound();
            endday4h.addEventListener('sound-ended', function () {
                //handy.setAttribute('visible', false);
                end.setAttribute("visible", true);
                choose.setAttribute("visibel", true);
                headline.setAttribute("visible", false);
                message.setAttribute("visible", false);
                next.setAttribute("visible", true);
                for (var i = 0; i < buttons.length; i++) {
                    buttons.item(i).setAttribute("visible", true);
                }  
    
    
            });
        }







 
    },

    night: function () {
        var buttons = document.getElementsByClassName("pick");
        var headline = document.getElementById("poem");
        var end = document.getElementById("endgame");
        var choose = document.getElementById("bye");
        var next = document.getElementById('continue');
        var ambientlight = document.getElementById("ambientlight");
        var sunsphere = document.getElementById("sunsphere");
        var camera = document.getElementById("kamera1");
        var kameraanimation = document.getElementById("kameraanimation");
        var scene = document.getElementById("scene");
        var message = document.getElementById("elixir");
        var camerawrapper = document.getElementById("cameraWrapper");
        var backgroundanimation = document.getElementById("backgroundanimation");


        headline.setAttribute("visible", false);
        end.setAttribute("visible", false);
        choose.setAttribute("visible", false);
        next.setAttribute("visible", false);
        for (var i = 0; i < buttons.length; i++) {
            buttons.item(i).setAttribute("visible", false);
        }
        backgroundanimation.emit("animatebackground");
        kameraanimation.emit("animate");
        ambientlight.emit('animate');
        sunsphere.emit("animate");
        kameraanimation.addEventListener('animationend', function () {
            scene.components.game.startDay();
        })
    },

    startOutro: function () {
        var buttons = document.getElementsByClassName("pick");
        var headline = document.getElementById("poem");
        var end = document.getElementById("endgame");
        var choose = document.getElementById("bye");
        var ambientlight = document.getElementById("ambientlight");
        var roomlamp = document.getElementById("roomlamp");
        var outrosound = document.getElementById("outrosound");
        var next = document.getElementById('continue');
        var message = document.getElementById("elixir");
        var start = document.getElementById("start");
        var granny = document.getElementById('granny');
        var scene = document.getElementById('scene');





        outrosound.components.sound.playSound();
        roomlamp.setAttribute('light','intensity', 0);
        ambientlight.setAttribute('light','intensity', 0);
        this.data.state = "outro";
        end.setAttribute("visible", true);
        this.data.startTime = Date.now();
        for (var i = 0; i < buttons.length; i++) {
            buttons.item(i).setAttribute("visible", false);
        }
        headline.setAttribute("visible", false);
        choose.setAttribute("visible", false);
        end.setAttribute("visible", false);
        message.setAttribute("visible", true);
        next.setAttribute("visible", false);
        start.setAttribute("visible", false);
        granny.setAttribute("visible", false);
        scene.setAttribute("background", "black");

        outrosound.addEventListener('sound-ended', function () {
            document.location.reload()

        });




    }
});


