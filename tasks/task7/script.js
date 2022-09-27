'use strict';

function sevenTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
        for (let i = 0; i < data.length; i++){
            
            if (typeof(data[i])==='string'){
                data[i] = `${data[i]} - done`;
            } else
            if (typeof(data[i])==='number'){
                data[i] = data[i] * 2;
            }
        }
        console.log(data);
    // Не трогаем
    return data;
}
sevenTask();