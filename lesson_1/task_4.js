'use strict';

let userProfile = {
    name: null,
    surName: null,
    age: null
};


function* generateQuestionary() {
    yield userProfile.name = prompt('Введите ваше имя');
    yield userProfile.surName = prompt('Введите вашу фамилию');
    yield userProfile.age = +prompt('Введите ваш возраст');
    return userProfile;
}

function generqteUserProfile() {
    const questionary = generateQuestionary();
    const numberKeyOfProfile = Object.keys(userProfile).length;
    
    for (let i = 1; i <= numberKeyOfProfile; i++) {
        questionary.next();
    }
    console.log(questionary.next());
} 

generqteUserProfile();