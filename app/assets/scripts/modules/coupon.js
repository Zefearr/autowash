import $ from 'jquery';
class Coupon {
    constructor() {
        this.openOvBtn = document.querySelector('.coupon');
        this.overlay = document.querySelector('.coupon-container');
        this.closeBtn = this.overlay.querySelector('.close-overlay');
        this.b = document.querySelector('body');
        this.html = document.querySelector('html');
        this.events();
    }
    events() {
        this.openOvBtn.addEventListener('click', this.openOverlay.bind(this));
        this.closeBtn.addEventListener('click', this.closeOverlay.bind(this));
        document.addEventListener('keyup', this.handler.bind(this));
    }
    handler(e) {
        if(e.keyCode == 27) {
            this.closeOverlay()
        }
    }
    openOverlay() {
        let verticalScroll = $(window).scrollTop(); 
        this.overlay.classList.add('overlay-opened');
        this.b.classList.add('no-scrolling');
       
    }
    closeOverlay() {
        let verticalScroll = $(window).scrollTop();
        this.overlay.classList.remove('overlay-opened');
        this.b.classList.remove('no-scrolling');
    }
}
export default Coupon;