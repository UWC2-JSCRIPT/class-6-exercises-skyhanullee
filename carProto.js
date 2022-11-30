/**
 * Car class
 * @constructor
 * @param {String} model
 */
 class Car {
    constructor(model) {
        this.currentSpeed = 0;
        this.model = model;

    }    
    accelerate = () => {
        this.currentSpeed++;
    }
    brake = () => {
        this.currentSpeed--;
    }

    toString() {
        return `Car Model: ${this.model}, Current Speed: ${this.currentSpeed}`;
    }
 }

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const newCar = new Car('Toyota');
newCar.accelerate();
newCar.accelerate();
newCar.brake();
console.log(newCar.toString());


/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
 class ElectricCar extends Car {
    constructor(model) {
        super('ElectricCar', model);
        this.motor = 'electric';

    }
    accelerate = () => {
        this.currentSpeed += 2;
    }
    toString() {
        // return(`Electric Car Model: ${this.model}, Current Speed: ${this.currentSpeed}`);
        return `Electric ${super.toString()}`;
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const newElectricCar = new ElectricCar('Tesla');
newElectricCar.accelerate();
newElectricCar.accelerate();
newElectricCar.brake();
console.log(newElectricCar.toString());

