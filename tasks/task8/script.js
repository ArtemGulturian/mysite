'use strict';

function eightTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = 1; i <= data.length; i++){
        result[i - 1] = data[data.length - i];
    }
    console.log(result);
    // Не трогаем
    return result;
}
eightTask();