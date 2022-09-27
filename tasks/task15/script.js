'use strict';

function getTimeFromMinutes(min) {
    if (typeof(min) !== "number" || min < 0 || !Number.isInteger(min)){
        return "Ошибка, проверьте данные";
    }

    let m = min % 60;
    let h = Math.trunc(min/60);

    let hStr = '';
    switch (h){
        case 0:
            hStr = 'часов';
            break;
        case 1:
            hStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hStr = 'часа';
            break;
        default:
            hStr = 'часов';
    }
    return `Это ${h} ${hStr} и ${m} минут`;
}
console.log(getTimeFromMinutes(345));