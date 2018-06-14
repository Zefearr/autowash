// "use strict"; <-- strict mode is enabled by deffault by // es6 remove it later 
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Car {
    constructor() {
        this.car = document.querySelector('.car');
        this.wheel = this.car.querySelectorAll('.wheel1');
        this.dirttrigger = document.querySelector('.trigger1');
        this.dirttrigger2 = document.querySelector('.trigger2');
        this.dirttrigger3 = document.querySelector('.trigger3');

        this.dirt = this.car.querySelector('.car-dirt');
        this.dirt2 = this.car.querySelector('.car-dirt2');
        this.dirt3 = this.car.querySelector('.car-dirt3');
        this.events();
        this.dirtWayPoint();
        


    }

    events() {
        // window.addEventListener('scroll', this.animateWheel.bind(this));
        window.addEventListener('scroll', this.animateWheel.bind(this));
        window.addEventListener('scroll', this.animateCar.bind(this));
    }
    
    animateCar() {
        let verticalScroll = document.documentElement.scrollTop; 
        this.car.style.transform = `translate(50%, ${verticalScroll / 50}%)`; 
       
         var that = this;

        if(document.body.scrollTop > 5500 || document.documentElement.scrollTop > 5500) { 
                that.car.style.position = 'absolute';   
                that.car.style.top = `5550px`; 
           
        } else {
            that.car.style.position = 'fixed'; 
            this.car.style.top = `50px`;  
            that.car.style.top += `auto`; 
            this.car.style.transform = `translate(50%, ${verticalScroll / 50}%)`; 
        }

        

   
    
    
    }
    dirtWayPoint() {

        var that = this;
        new Waypoint({
            element: this.dirttrigger,
            handler: function (direction) {
                if (direction == 'down') {
                    that.dirt.classList.add('car-dirt--visible');
                } else {
                    that.dirt.classList.remove('car-dirt--visible');
                }


            },
            offset: '50%'
        });
        new Waypoint({
            element: this.dirttrigger2,
            handler: function (direction) {
                if (direction == 'down') {
                    that.dirt2.classList.add('car-dirt2--visible');
                } else {
                    that.dirt2.classList.remove('car-dirt2--visible');
                }


            },
            offset: '50%'
        });

        new Waypoint({
            
            element: this.dirttrigger3,
            handler: function (direction) {
                if (direction == 'down') {

                    that.dirt3.classList.add('car-dirt3--visible');
                   
                } else {
               
                    that.dirt3.classList.remove('car-dirt3--visible'); 

                }


            },
            offset: '0'
        });
    }
    animateWheel() {
        // let currentPos = window.scrollY;
        let currentPos = document.documentElement.scrollTop;
      
        // not supported stuff in IE below 
        // this.wheel.forEach((item) => {
        //     item.style.backgroundPosition = '0%' + parseInt(currentPos / 10 ) + 'px';
        // });
        for (var i = 0; i < this.wheel.length; i++) {
            var item = this.wheel[i];
            item.style.backgroundPosition = '0%' + parseInt(currentPos / 10) + 'px';
        }
    }



}

export default Car;