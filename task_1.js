'use strict';

//Задание 1

function acacaa() {
    console.log(5 + 6);
}

function loop(times = 0, callback = null) {
    if (callback === null) {
        return;
    } else {
        for (let i = 1; i <= times; i++) {
            callback();
        }
    }
}

loop();