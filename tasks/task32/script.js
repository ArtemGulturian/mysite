'use strict';

function alphabetPosition(t) {
    let s="";
    let abc = "Aabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < abc.length; j++){
            if (t[i].toLowerCase() == abc[j] ){
                s += String(`${j} `);
            }
        }
    }
    let a = s.slice();
    return a;
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));