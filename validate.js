'use strict';

/**
 *
 * @param {number} userValue
 * @returns {number} - if all ok
 * @throws {TypeError} - when ...
 * @throws {RangeError} - when ...
 */
const validateUserValue = userValue => {
  if (isNaN( userValue )) {
    throw new TypeError();
  }
  if (userValue < 10 || userValue > 40) {
    throw new RangeError();
  }
  return userValue;
};

export default validateUserValue;
