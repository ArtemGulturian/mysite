'use strict';

function high(x) {
    let q = 0;
    let abc = 'Aabcdefghijklmnopqrstuvwxyz';
    let abcLow = abc.toLowerCase();
    let w = x.split(' ');
    let zx = [];
    let qw=0;

    for (let val of w) {
        for (let i = 0; i < val.length; i++) {
            for (let j = 0; j <= abc.length; j++) {
                if (val[i] == abc[j]){
                    q += j;
                }
            }
        }
        zx.push(q); q = 0;
    }
    let maxNumber = Math.max.apply(null, zx);

    for (let i = 0; i < zx.length; i++) {
        if (zx[i] === maxNumber){
            qw = i;
        }
    }
    for (let i = 0; i < zx.length; i++){
        if (zx[i] === zx[i+1]){
            qw = 0;
        }
    }
    let as = String(w[qw]);
    return as;
}
console.log(high('j t a a'));