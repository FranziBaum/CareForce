/* jslint esversion: 6 */


AFRAME.registerComponent('button', { 
    schema: {  
        value:{type: 'string', default:''}

    },
    init: function () { 
        textelement = document.createElement('a-text');
        this.el.appendChild(textelement);
        textelement.setAttribute('value', this.data.value + " h");
        textelement.setAttribute('color', "black");
        textelement.setAttribute('align', "center");
        textelement.setAttribute('width', 3);
        this.el.classList.add('clickable');
        var game = document.querySelector('game');
        var buttons = document.querySelectorAll('button');

        this.el.addEventListener('click', function(){

            [].forEach.call(buttons, function() {
                console.log(buttons);
                buttons.setAttribute('color','grey');
              });
    
            this.setAttribute('color','red');

        });
        
    },
    update: function () {


    },
    tick: function () {
    }
});


