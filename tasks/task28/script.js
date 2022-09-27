'use strict';

function returnCorrectPhoneNumber (it) {
    let i = 0;
    let str = '';
    let st = '';
    let lengthOfString = it.length+2;

    for (let value of it){
        if (i == 0) {str += '('; i=1;}
        i++;
        if (i < lengthOfString) {
            str += value;
        }
        if (i == 4) {str += ') ';}
        if (i == 7) {str += ' - ';}
    }
    return str;
}
console.log(returnCorrectPhoneNumber('1234567890'));