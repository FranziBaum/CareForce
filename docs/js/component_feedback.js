AFRAME.registerComponent('feedback', { 
    schema: { 
        value: { type: 'int', default: 30 },

    },
    init: function () { 
        if(this.data.value < 0){
            this.data.value = 0;
        }
        else if(this.data.value > 100){
            this.data.value = 100;
        }
        var roundValue = Math.round(this.data.value/10)*10;
        var roundValueTwenty = Math.round(this.data.value/20)*20;
        console.log("zwanziger: "+roundValueTwenty);
        

        var greyElement = document.getElementById("greywrap");
        greyElement.classList = '';

        greyElement.classList.add('grey'+roundValue);

        var data= this.data;
        var el= this.el;
        var heart = document.getElementById('heart');
        if(this.el == heart){
        el.setAttribute('material', 'color','rgb('+Math.round((data.value/100)*255)+',0,'+Math.round(255-((data.value/100)*255))+')');
        }

        var tulip = document.getElementById('tulip');
        tulip.setAttribute('src','#tulip'+roundValueTwenty+'_dae');

        var grannyhead = document.getElementById('grannyhead');
        grannyhead.setAttribute('rotation',""+(1-(this.data.value/100))*(30)+" 0 0");


    },
    update: function () {
        if(this.data.value < 0){
            this.data.value = 0;
        }
        else if(this.data.value > 100){
            this.data.value = 100;
        }
        var roundValue = Math.round(this.data.value/10)*10;
        var roundValueTwenty = Math.round(this.data.value/20)*20;
        console.log("zwanziger: "+roundValueTwenty);
        

        var greyElement = document.getElementById("greywrap");
        greyElement.classList = '';

        greyElement.classList.add('grey'+roundValue);

        var data= this.data;
        var el= this.el;
        var heart = document.getElementById('heart');
        if(this.el == heart){
        el.setAttribute('material', 'color','rgb('+Math.round((data.value/100)*255)+',0,'+Math.round(255-((data.value/100)*255))+')');
        }

        var tulip = document.getElementById('tulip');
        tulip.setAttribute('src','#tulip'+roundValueTwenty+'_dae');

        var grannyhead = document.getElementById('grannyhead');
        grannyhead.setAttribute('rotation',""+(1-(this.data.value/100))*(30)+" 0 0");



      },

});

