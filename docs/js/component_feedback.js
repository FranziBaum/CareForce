/* jslint esversion: 6 */

//Registrieren von einer Komponente/Klasse

AFRAME.registerComponent('feedback', { //Hier wird ein Component mit dem Namen "interact" registriert.
    schema: {   //Das Schema beinhaltet die Parameter einer Komponente. In diesem Fall nur der Zustand.
        value: { type: 'int', default: 40 },

    },
    init: function () { //Die "init"-Funktion wird zu Beginn genau 1 mal aufgerufen.
    var granny = document.getElementById("granny");



    },
    update: function () {
        var roundValue = Math.round(this.data.value/10)*10;
        

        var greyElement = document.getElementById("greywrap");
        greyElement.classList = '';

        greyElement.classList.add('grey'+roundValue);

        if(this.data.value < 0){
            this.data.value = 0;
        }
        else if(this.data.value > 100){
            this.data.value = 100;
        }
        console.log(roundValue);
        var data= this.data;
        var el= this.el;
        el.setAttribute('material', 'color','rgb('+Math.round((data.value/100)*255)+',0,'+Math.round(255-((data.value/100)*255))+')');

        var heart = document.getElementById('heart');
        if(this.el == heart){
        el.setAttribute('material', 'color','rgb('+Math.round((data.value/100)*255)+',0,'+Math.round(255-((data.value/100)*255))+')');
        }

        var tulip = document.getElementById('tulip');
        tulip.setAttribute('src','#tulip'+roundValue+'_dae');



      },

});

