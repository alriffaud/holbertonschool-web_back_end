// This module implements a class locationd HolbertonClass.
export default class HolbertonClass {
  constructor(size, location) {
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._location = location;
    this._size = size;
  }

  get location() {
    return this._location;
  }

  get size() {
    return this._size;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
