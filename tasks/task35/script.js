'use strict';

function findMissingLetter(array){
    let a='';
    let ar = [];
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    let upAbc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let uperCase;
    let firstCharIndex = 0;
    let firstChar = array[0];
    let zaq = '';

    // is to upper case??
    for (let char of array){
        let isUpperCase = char.toUpperCase()==char;
        if (isUpperCase){
            uperCase = true;
            a = upAbc;
        } else if (!isUpperCase){
            uperCase = false;
            a = abc;
        }
    }

    // function to made all elements of array to LowerCase()
    function toLowerChart(array){
        let ar = [];
        
        for (let i = 0; i < array.length; i++){
            ar.push(array[i].toLowerCase());
        }
        return ar;
    }
    // console.log(toLowerChart(array));
    
    for(let i = 0; i < abc.length; i++){
        if (a[i] === firstChar){
            firstCharIndex = i;
            // console.log(i);
        }
    }

    let newArr = Array.from(a).slice(firstCharIndex, (firstCharIndex)+array.length);
    
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] != array[i]){
            console.log(newArr[i]);
            zaq = newArr[i]; break;
        }
    }
    return zaq;
}
findMissingLetter(['O','Q','R','S']);
findMissingLetter(['a','b','c','d','f']);
findMissingLetter(['H', 'I', 'K']);
findMissingLetter(['m', 'n', 'o', 'p', 'r', 's', 't', 'u']);

//---

function findMissingLetter(array) {
    let first = array[0].charCodeAt(0);
    for (let i = 1; i < array.length; i++) {
      if (first + i !== array[i].charCodeAt(0)) {
        return String.fromCharCode(first + i);
      }
    }
    throw new Error("Invalid input");
}
console.log(findMissingLetter(['O','Q','R','S']));
console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['H', 'I', 'K']));
console.log(findMissingLetter(['m', 'n', 'o', 'p', 'r', 's', 't', 'u']));