import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Reveal {
    constructor() {
        this.quote1 = document.querySelector('.quote1');
        this.quote2 = document.querySelector('.quote2');
        this.quote3 = document.querySelector('.quote3');
        this.quote4 = document.querySelector('.quote4'); 

        this.trigger1 = document.querySelector('.trigger1');
        this.trigger2 = document.querySelector('.trigger2'); 
        this.trigger3 = document.querySelector('.trigger3');
        this.trigger4 = document.querySelector('.clean-it');
        this.hideFirst();
        this.firtPoint();
        this.secondPoint();
        this.thirdPoint();
        this.fourthPoint();
    }

    firtPoint() {
        var that = this;
        new Waypoint({
            
            element: this.trigger1,
            handler: function() {
                that.quote1.classList.add('quite-visible');
            },
            offset: '40%'
        })
    }
    secondPoint() {
        var that = this;
        new Waypoint({
            
            element: this.trigger2,
            handler: function() {
                that.quote2.classList.add('quite-visible'); 
            },
            offset: '40%'
        })
    }
    thirdPoint() {
        var that = this;
        new Waypoint({
            
            element: this.trigger3,
            handler: function() {
                that.quote3.classList.add('quite-visible');
            },
            offset: '50%'
        })
    }
    fourthPoint() {
        var that = this;
        new Waypoint({
            
            element: this.trigger4,
            handler: function() {
                that.quote4.classList.add('quite-visible');
            },
            offset: '80%'
        })
    }

    hideFirst() {
        this.quote1.classList.add('reveal-item');
        this.quote2.classList.add('reveal-item2');
        this.quote3.classList.add('reveal-item'); 
        this.quote4.classList.add('reveal-item2'); 
    }
   
}
export default Reveal;