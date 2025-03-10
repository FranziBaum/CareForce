AFRAME.registerComponent('interactive', { //Hier wird ein Component mit dem Namen "interactive" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        isActive: { type: 'boolean', default: false }, //Der Parameter "isActive" beinhaltet einen boolean und ist standarweise "false".
        activeTime: { type: 'int', default: 20000 },
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
    update: function () { //Die "update"-Funktion wird zu Beginn genau 1 mal aufgerufen und jedes Mal wenn sich ein Parameter ändert.
 
    },
    tick: function () {
        var currentTime = Date.now() - this.data.startTime;
                if(this.data.isActive == true && currentTime > this.data.activeTime){
                    this.expire();
        }

    },
    activate: function () {
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
        this.data.isActive = false;
        var heart = document.getElementById('heart');
        var heartvalue = heart.getAttribute('feedback').value;
        heart.setAttribute('feedback', 'value', heartvalue - this.data.influence / 2);
        this.el.classList.remove("clickable");
    }


});


