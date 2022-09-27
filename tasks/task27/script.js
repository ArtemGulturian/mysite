'use strict';

function hideTheFirstNumberOfCard(it){
  let i = 0;
  let str = '';
  let st = '';
  const lengthOfString = it.length;
  for (let values of it){

      // console.log(values);
      i++;
      if (i <= lengthOfString - 4){
          values = '*';
      }
      // console.log('i = ', i);
      // console.log('values = ', values);
      if (i % 4 === 0){
          values += ' ';
      }
      str += values;
  }
  console.log(str);
}
console.log(hideTheFirstNumberOfCard('4654645884415326'));