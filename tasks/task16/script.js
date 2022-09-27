'use strict';

function findMaxNumber(n1, n2, n3, n4) {
    if (typeof(n1) !== 'number' ||
        typeof(n2) !== 'number' ||
        typeof(n3) !== 'number' ||
        typeof(n4) !== 'number'){
        return 0;
    }
    return Math.max(n1, n2, n3, n4);
}
console.log(findMaxNumber(4, 19, 15, 6));