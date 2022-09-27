'use strict';

function twelveTask(num1, num2) {
    if (typeof(num2) !== 'number' || num2 <= 0){
        return num1;
    }
    
    let str = '';

    for (let i = 1; i <= num2; i++){
        if (i === num2){
            str += `${num1 * i}`;
    } else {
        str += `${num1 * i}---`;
    }
    }
    return str;
}
console.log(twelveTask(5, 3));