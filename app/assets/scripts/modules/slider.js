
class Slider {
    constructor() {
       this.events();
    }
    events() {
        document.addEventListener('DOMContentLoaded', function(){
            let wrapper = document.getElementById('wrapper');
            let topLayer = wrapper.querySelector('.top');
            let handle = wrapper.querySelector('.handle');
            let delta = 0;
            var position = wrapper.getBoundingClientRect().left;
            console.log(position)
            wrapper.addEventListener('mousemove', function(e){
        
                delta = e.clientX - position;
              
                // console.log(delta)
               
                handle.style.left = delta + 'px';
                topLayer.style.width = delta + 'px';
            })
        });

    }
  
 
}
export default Slider;