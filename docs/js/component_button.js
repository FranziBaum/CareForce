/* jslint esversion: 6 */


AFRAME.registerComponent('button', {
    schema: {
        value: { type: 'string', default: '' }

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
        var sceneEl = document.querySelector('a-scene');

        var buttons = sceneEl.querySelectorAll('a-plane');
        console.log(buttons);

        this.el.addEventListener('click', function () {

            for (var i = 0; i < buttons.length; i++) {
                buttons.item(i).setAttribute('color', 'grey');
            }

            this.setAttribute('color', 'red');

        });

    },
    update: function () {


    },
    tick: function () {
    }
});


