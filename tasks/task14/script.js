'use strict';

function fourteenTask(coupeNumber) {
    if (coupeNumber === 0 || coupeNumber > 36){
        return "Таких мест в вагоне не существует";
    } else if (typeof(coupeNumber) !== 'number' || coupeNumber <= 0 || !Number.isInteger(coupeNumber)){
    return "Ошибка. Проверьте правильность введенного номера места";}

    for (let i = 4; i <=36; i + 4){
        return Math.ceil(coupeNumber / i);
    }
}
console.log(fourteenTask(15));