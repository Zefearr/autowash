
class test {
    constructor() {
       this.header = document.querySelector('.site-header');
        this.events();
    }
    events() {
        window.addEventListener('scroll', this.slideDown.bind(this));
    }
    slideDown() {
        if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) { 
            this.header.classList.add('fixed');
        } else {
            this.header.classList.remove('fixed'); 
        }
    }
}


export default test;