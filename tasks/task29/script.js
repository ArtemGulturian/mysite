'use strict';

function highAndLow (numbers) {
    let res = '';
    let array = [];
    let str = numbers;
    let newstr = str.replace(/\s/g, ',');
    let z = newstr.split(',');
 
    for (let val of z){
        val = val * 1;
        array.push((val));
    }
    const maxNum = Math.max.apply(null, array);
    const minNum = Math.min.apply(null, array);
    const r = String(`${maxNum} ${minNum}`);
    return r;
};
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 15 -3 4 2"));
console.log(highAndLow("1 9 3 4 -5"));