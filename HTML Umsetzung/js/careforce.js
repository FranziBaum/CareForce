function onLoadedHandler() {

    var wohlbefinden_patient = 100;
    var wohlbefinden_pfleger = 100;
    var wohlbefinden_angehoeriger = 100;
    var arbeitszeit_value;
    var freizeit_value;


    document.getElementById('arbeitszeit_input').addEventListener('input', function (evt) {
        arbeitszeit_value = this.value;
        freizeit_value = 16 - arbeitszeit_value
        document.getElementById('arbeitszeit_wert').innerHTML = arbeitszeit_value;
        document.getElementById('freizeit').innerHTML = "Du hast " + freizeit_value + " Stunden Freizeit.";
    });


    document.getElementById('myButton').addEventListener('click', function (evt) {
        var radios = document.getElementsByName('pflegegrad');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                var pflegegrad_value = radios[i].value;
                break;
            }

        }

        var radios = document.getElementsByName('betreuung');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                var betreuung_value = freizeit_value * radios[i].value;
                break;
            }

        }
        document.getElementById('betreuungszeit').innerHTML = "Du hast " + betreuung_value + " Stunden zum betreuen.";
        wohlbefinden_patient = 100*(betreuung_value/12.8);
        document.getElementById('patient_mood').innerHTML = "Patient: " + wohlbefinden_patient;
        document.getElementById('angehoeriger_mood').innerHTML = "Angeoeriger: " + wohlbefinden_angehoeriger;
        
    });





}
window.addEventListener("DOMContentLoaded", onLoadedHandler);