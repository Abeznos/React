'use strict';
let promiseMassive = [];

function myPromisweFunc(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(result => {return result.json()})
            .then(data => resolve(data))     
            .catch(errors => reject(errors))
    });
}

for (let i = 1; i <= 10; i++) {
    promiseMassive.push(myPromisweFunc(`https://jsonplaceholder.typicode.com/users/${i}`));
}
console.log(promiseMassive);