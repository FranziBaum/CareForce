
AFRAME.registerComponent('handy', { 
    schema: {  
        hour: { type: 'int', default: 12 },
        min: { type: 'float', default: 55 },

    },
    init: function () { 

    
    },
    update: function () {

       
      },
    tick: function () { 
    var game = document.getElementById('scene');

    if(game.getAttribute('game').state == 'play'){
    var el= this.el;
    var min = this.el.getAttribute('handy').min;
    var hour = this.el.getAttribute('handy').hour;
    var uhr = document.querySelector('#uhr');
    var camerawrapper = document.getElementById('cameraWrapper');
    var camera_rotx = document.querySelector('#kamera1').getAttribute('rotation').x;
    var camera_roty = document.querySelector('#kamera1').getAttribute('rotation').y;
    var camera_positionx = camerawrapper.getAttribute('position').x;
    var camera_positiony = camerawrapper.getAttribute('position').y;
    var camera_positionz = camerawrapper.getAttribute('position').z;
    el.setAttribute('rotation',camera_rotx*-1+" "+camera_roty+" 20");
    el.setAttribute('position',(camera_positionx)+" "+(camera_positiony-0.8)+" "+camera_positionz);
    this.el.setAttribute('handy','min',(min+1/25));
    if(min >= 59){
        this.el.setAttribute('handy','hour',hour+1);
        this.el.setAttribute('handy','min',0);
    }
    if(Math.round(this.data.min) > 9){
    uhr.setAttribute('value',this.data.hour+":"+Math.round(this.data.min));
    }
    else{
    uhr.setAttribute('value',this.data.hour+":0"+Math.round(this.data.min));
    }
}

    }
});

