'use strict';

import validateUserValue from './validate.js';

const userInput = Number( prompt( 'Please inpout number between 10 and 40' ) );

try {

  const validatedUserValue = validateUserValue( userInput );
  alert( `Your value is ${validatedUserValue}` );

} catch (e) {
  if (e instanceof TypeError) {
    alert( 'Incorrect value' );
  } else if (e instanceof RangeError) {
    alert( 'Your number is not between 10 and 40' );
  } else {
    alert( 'Some went wrong' );
  }
}
