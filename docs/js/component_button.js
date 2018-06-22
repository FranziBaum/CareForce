/* jslint esversion: 6 */


AFRAME.registerComponent('button', {
    schema: {
        value: { type: 'string', default: '' }

    },
    init: function () {
        textelement = document.createElement('a-text');
        this.el.appendChild(textelement);
        if(this.el.id == 'endgame' || this.el.id == 'continue'){
        textelement.setAttribute('value', this.data.value);
        }
        else{
            textelement.setAttribute('value', this.data.value + " h");

        }
        textelement.setAttribute('color', "black");
        textelement.setAttribute('align', "center");
        textelement.setAttribute('width', 3);
        this.el.classList.add('clickable');
        var scene = document.getElementById('scene');
        var sceneEl = document.querySelector('a-scene');

        var buttons = sceneEl.querySelectorAll('a-plane');
        console.log(buttons);

        this.el.addEventListener('click', function () {

            for (var i = 0; i < buttons.length; i++) {
                buttons.item(i).setAttribute('color', 'grey');
        }
            if(this.id == 'endgame'){
                scene.setAttribute('game','state','end');
            }
            else if(this.id == 'continue'){
                scene.setAttribute('game','state','play');
            }
            else{
                var value = this.getAttribute('button').value;
                scene.setAttribute('caretime',value);
                console.log(value);
            }
            this.setAttribute('color', 'red');
            console.log(this.getAttribute('material').visible);
    
        });

    },
    update: function () {
   


    },
    tick: function () {
        var visible = this.el.getAttribute('visible');
        if (visible == true) {
            this.el.classList.add("clickable");
        }
        else if(visible == false){
            this.el.classList.remove("clickable");
        }
    }
});


