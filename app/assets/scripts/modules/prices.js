import $ from 'jquery';
class Prices {
    constructor() {
        this.priceForm = document.querySelector('#simple-cars-prices');
        this.result = document.getElementById('result');

        this.washtype1 = this.priceForm.querySelector('#outdoorwash1');
        this.washtype2 = this.priceForm.querySelector('#outdoorwash2');
        this.washtype3 = this.priceForm.querySelector('#outdoorwash3');
        this.washtype4 = this.priceForm.querySelector('#outdoorwash4');
        this.washtype5 = this.priceForm.querySelector('#outdoorwash5');
        this.washtype6 = this.priceForm.querySelector('#outdoorwash6');

        this.washtype7 = this.priceForm.querySelector('#indoorwash1');
        this.washtype8 = this.priceForm.querySelector('#indoorwash2'); 
        this.washtype9 = this.priceForm.querySelector('#indoorwash3'); 
        this.washtype10 = this.priceForm.querySelector('#indoorwash4');
        this.washtype11 = this.priceForm.querySelector('#indoorwash5');
        this.washtype12 = this.priceForm.querySelector('#indoorwash6');


        this.btns = document.querySelectorAll('.btn');
        
        this.smallCar = document.querySelector('#carsmall');
        this.bigCar = document.querySelector('#carsbig');
        this.hugeCar = document.querySelector('#carshuge');

        this.events();
        this.Calculate();




    }
    events() {
        if (typeof (this.priceForm) !== 'undefined' && this.priceForm !== null) {
            this.priceForm.addEventListener('change', this.Calculate.bind(this));
        }
        for(let i = 0; i < this.btns.length; i++) {
            let b = this.btns[i];
            b.addEventListener('click', this.toggleActive.bind(this));
            b.addEventListener('click', this.Calculate.bind(this));
        }
        // this.btns.forEach((e) => {
        //     e.addEventListener('click', this.toggleActive.bind(this));
        // });
        // this.btns.forEach((e) => {
        //     e.addEventListener('click', this.Calculate.bind(this));
        // })

    }

    toggleActive(e) {
        let elems = document.querySelectorAll('.active');
        [].forEach.call(elems, function (el) {
            el.classList.remove('active');
        });
        e.target.classList.add('active')


    }

   






    Calculate() {
        let checkedInputs = this.priceForm.querySelectorAll(':checked');
        let total = 0;
        if (this.smallCar.classList.contains('active')) {
            this.washtype1.value = 15;
            this.washtype2.value = 12;
            this.washtype3.value = 5; 
            this.washtype4.value = 13; 
            this.washtype5.value = 3; 
            this.washtype6.value = 4; 

            this.washtype7.value = 15;
            this.washtype8.value = 5;
            this.washtype9.value = 5;
            this.washtype10.value = 5;
            this.washtype11.value = 2;
            this.washtype12.value = 3;

        } else if (this.bigCar.classList.contains('active')) {
            this.washtype1.value = 17;
            this.washtype2.value = 13;
            this.washtype3.value = 7;
            this.washtype4.value = 13; 
            this.washtype5.value = 3; 
            this.washtype6.value = 5; 

            this.washtype7.value = 17;
            this.washtype8.value = 7;
            this.washtype9.value = 7;
            this.washtype10.value = 7;
            this.washtype11.value = 2;
            this.washtype12.value = 3;
        } else if (this.hugeCar.classList.contains('active')) {
            this.washtype1.value = 19;
            this.washtype2.value = 14;
            this.washtype3.value = 8;
            this.washtype4.value = 13; 
            this.washtype5.value = 3; 
            this.washtype6.value = 5;

            this.washtype7.value = 17;
            this.washtype8.value = 7;
            this.washtype9.value = 7;
            this.washtype10.value = 7;
            this.washtype11.value = 2;
            this.washtype12.value = 3; 
        }

        for (let i = 0; i < checkedInputs.length; i++) {
            total += parseInt(checkedInputs[i].value || 0);
        }

        this.result.innerHTML = `${total} EUR`;

    }

}
export default Prices;