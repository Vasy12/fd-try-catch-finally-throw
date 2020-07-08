'use strict';

/**
 *
 * @param {number} n - source number value
 * @returns {number} - factorial value of source value
 * @throws {TypeError}
 * @throws {RangeError}
 */
const factorial = n => {

  if (typeof n !== 'number') {
    throw new TypeError( 'param n must be an number value' );
  }

  if (!Number.isSafeInteger( n )) {
    throw new RangeError();
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial( n - 1 );

};

const f = () => {
  let result = null;

  try {

    result = 4;

  } catch {

    result = 'Error';

  } finally {
    return result;
  }
};

console.log( 'funciton result = ', f() );
