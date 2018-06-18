/*jslint esversion: 6 */

AFRAME.registerComponent('vorlagecomponent', {
    schema: {
        paramater1: { type: 'string', default: 'Dies ist ein Text/String' },
        paramater2: { type: 'int', default: 42 },
        paramater3: { type: 'float', default: 42.5325 }
    },

    init: function () { //Wird ein mal zu Beginn aufgerufen
        console.log("init");

    },

    update: function () { //Wird ein mal zu Beginn aufgerufen & sobald sich eine Parameter (im Schema) ändert.
        console.log("update");
    },

    tick: function () { //Wird jedes Frame ausgeführt (siehe draw() Funktion in p5)
        console.log("tick");

    }

});

/*nachfolgend einige Hilfestellungen zur Syntax.


this.el - spricht das Element an, welche diese Komponente aufweist.
this.data - spricht die Parameter des Elementes an, welches diese Komponente aufweist.
this.el.data.parameter1 - spricht den Parameter 'parameter1' an.
this.el.data.parameter2 - spricht den Parameter 'parameter2' an.
document.querySelectorAll('andereKomponente'); - spricht alle Elemente mit der angegebenen Komponente an.

 this.el.addEventListener('mouseover', function () {
    console.log("Das Event 'mouseover' wurde ausgelöst!");

});

    erstellet einen sog. 'Event Listener' für ein Element (in diesem Fall: this.el)
    Um ein Event Listener hinzuzufügen muss man zwei Sachen angeben:
    1. Auf welches Event soll ich regieren? (in diesem Fall: 'mouseover', also sobald die Maus/Cursor über dem Objekt ist)
    2. Was soll dann passieren? Was passieren soll, kommt in die nachfolgende Funktion. (In diesem Fall ein console.log())




    Animationen in AFRAME

Das Framework AFRAME ermöglicht es Animationen direkt in HTML zu definieren. In diesem Fall animieren wir die Position einer Box.

<a-box position="0 1 1" color="white"> 
    <a-animation                 <----- Die Animation befindet sich innerhalb der Box und ist somit der Box zugeordnet.
    attribute="position" 
    from="0 1 1" 
    to "0 3 2" 
    dur="10000" 
    begin="mouseover" 
    direction="alternate" 
    repeat="indefinite">
    </a-animation>          
</a-box>

Wie auch die Animationen in CSS (Vorlesung Animationen CSS), beinhaltet die Animation in AFRAME gängige Parameter:
attribute="position" - Welches Attribut soll animiert werden? Beispiele: position, color, rotation,..
from="0 1 1" - Anfangszustand (in diesem Fall: 3 Koordianten für die Position)
to="0 3 2" - Endzustand 
dur="10000" - Duration/Dauer der Animation.
begin="eventname" - Wann soll die Animation ausgelöst werden? Angabe einer Zeit in Millisekunden (1000 = 1 sec) oder Angabe eines Event Namens.
direction="alternate" - Richtung der Animation. Möglich sind: forwards, backwards, alternate
repeat="indefinite" - Wie oft soll die Animation wiederholt werden? Angabe einer Zahl oder 'indefinite' für unendlich oft wiederholen.


*/


