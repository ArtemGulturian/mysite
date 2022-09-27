'use strict';

function expandedForm(num) {
    let res = '';
    let n = '';
    let arr = [];

    let desyatye = num % 10;
    arr.push(desyatye);
    let sotie = num % 100;
    arr.push(sotie);
    let tysiachnie = (num % 1000) - (num % 100) - (num % 10);
    arr.push(tysiachnie);
    
    console.log(arr);

    for (let val of arr){
        if (val > 0){
            res += `${tysiachnie} + ${sotie-desyatye} + ${desyatye}`;
        }
    }
    return 'res = '+res;
}
console.log(expandedForm(7004));