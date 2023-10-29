'use strict'
/////////////////////
console.log('hello ');

const validator = require('validator');

validator.isEmail('test@test.com'); //=> true
validator.isEmail('abcDE123'); //=> false


