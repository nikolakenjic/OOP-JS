'use-strict';

class CarES6 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;

    console.log(`${this.make} going ${this.speed}km/h`);
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} speed now is ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} speed now is ${this.speed}`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// Inheritance **********************************
class ElectricCarES6 extends CarES6 {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;

    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );

    return this;
  }
}

const tesla = new ElectricCarES6('Tesla', 120, 80);

tesla
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .brake()
  .chargeBattery(90)
  .accelerate();
