'use strict';

function getMiddle(s)
{
    let res = '';
    let lengOfWord = s.length;

    for (let i = 0; i < lengOfWord; i++) {
        if (lengOfWord % 2 === 0){
            res = s.charAt((lengOfWord/2)-1) + s.charAt(lengOfWord/2);
        } else if (lengOfWord % 2 != 0){
            res = s.charAt(lengOfWord/2);
        }
    }
    return res;
}
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));