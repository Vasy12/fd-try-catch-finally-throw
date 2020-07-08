'use strict';

/**
 *
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
const pow = (base, exponent) => {

  if (isNaN( base ) || isNaN( exponent )) {
    return NaN;
  }

  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new TypeError( 'params base and exponent must be an numbers' );
  }

  if (!isFinite( base ) || !isFinite( exponent )) {
    throw new RangeError();
  }

  if (exponent === 0) {
    return 1;
  }

  if (exponent < 0) {
    return 1 / pow( base, Math.abs( exponent ) );
  }

  return base * pow( base, exponent - 1 );

};

console.log( 'before' );
try {
  console.log( pow( '2', 3 ) );
} catch (e) {
  console.error( e );
}
console.log( 'after' );
