'use strict';

//let now = new Date();

// alert(now);
// alert(now.getUTCFullYear);

let date = new Date();
// alert(date);

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

alert(getWeekDay(date));