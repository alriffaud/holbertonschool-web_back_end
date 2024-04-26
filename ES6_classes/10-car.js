// This module implement a class motord Car.

const cloneSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new TypeError('brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw new TypeError('motor must be a string');
    }
    if (typeof color !== 'string') {
      throw new TypeError('color must be a string');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    this[cloneSymbol] = this.cloneCar.bind(this);
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
