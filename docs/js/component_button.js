/* jslint esversion: 6 */


AFRAME.registerComponent('button', {
    schema: {
        value: { type: 'string', default: '' }
    },
    init: function () {
        textelement = document.createElement('a-text');
        this.el.appendChild(textelement);
        if(this.el.id == 'endgame' || this.el.id == 'continue' || this.el.id == 'start'){
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
        this.el.addEventListener('click', function () {
            console.log(sceneEl.components.game.data.day);
            for (var i = 0; i < buttons.length; i++) {
                buttons.item(i).setAttribute('color', 'grey');
        }
            if(this.id == 'endgame'){
                sceneEl.components.game.startOutro();
            }
            else if(this.id == 'continue'){
                if(sceneEl.components.game.data.day == 0){
                    sceneEl.components.game.startDay();
                }
                else{
                    sceneEl.components.game.night();
                }            }
            else if(this.id == 'start'){
                sceneEl.components.game.startIntro();
                this.setAttribute("visible", false);

            }
                

            else if(this.classList.contains('pick')){
                var value = this.getAttribute('button').value;
                scene.setAttribute('game','caretime',value);
            }
            this.setAttribute('color', 'orange');
    
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


