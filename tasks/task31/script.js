'use strict';

function reverseWords(str) {
    let s = '';
    let arr = [];
    // let re = /(\w+)\s(\w+)\s(\w+)\s(\w+)\s(\w+)\s(\w+)\s(\w+)/;
    // let newstr = str.replace(re, "$4, $3, $2, $1");
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' '){
            arr.push(i);
        }
        s = str.replace();
    }
    console.log(arr);
    //return newstr;
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords('apple'));
console.log(reverseWords('a b c d'));
console.log(reverseWords('double  spaced  words'));