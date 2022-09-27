'use strict';

function fifthTask() {
    const arrayOfNumbers = [];
    
    let j = 0;
    for (let i = 5; i <= 10; i++){
            arrayOfNumbers[j] = i;j+=1;
    }
    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}
fifthTask();