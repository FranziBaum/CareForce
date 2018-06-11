/* jslint esversion: 6 */
export default class Patient{
    constructor(){
        this.mood = 'neutral';
        this.lifespan = 7;
    }
    changeMood(mood){
        this.mood = mood;
    }
    increaseLifespan(days){
        this.lifespan += days;

    }
    decreaseLifespan(days){
        this.lifespan -= days;
    }

    updateHeart(other){ //other bezieht sich auf ein anderes Objekt (hier: Herz)
        if(this.mood == 'sad'){
            other.r = 0;
            other.b = 255;
        }
        else if(this.mood == 'happy'){
            other.r = 255;
            other.b = 0;
        }
        else if(this.mood == 'neutral'){
            other.r = 150;
            other.b = 150;
        }

    }
}