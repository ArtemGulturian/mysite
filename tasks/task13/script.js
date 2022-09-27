'use strict';

function thirteenTask(rebro) {
    if (typeof(rebro) !== 'number' || rebro < 0  || !Number.isInteger(rebro) ){
        return "При вычислении произошла ошибка";    
    }
        let surfaceVolume = Math.pow(rebro, 3);
        let square = 6 * Math.pow(rebro, 2);

    return `Объем куба: ${surfaceVolume}, площадь всей поверхности: ${square}`;
}
console.log(thirteenTask(15));