'use strict';

//Задание 2

function calculateArea () {
    const userFigure = +prompt('Ведите номер фигуры \n1. Прмоугольник \n2. Круг \n3. Треугольник');
    let values = {};

    switch (userFigure) {
        case 1:
            values.a = +prompt('Введите сторону А');
            values.b = +prompt('Введите сторону B');
            return {
                    area: values.a * values.b,
                    figure: 'Прямоугольник',
                    input: `Сторона А = ${values.a}, сторона В = ${values.b}`
                   }
        case 2:
            values.radius = +prompt('Введите радиус круга');
            values.p = 3.1415927;
            return {
                    area: values.radius * values.radius * values.p,
                    figure: 'Круг',
                    input: `Радиус круга = ${values.radius}, число Пи = ${values.p}`
                }
        case 3:
            values.base = +prompt('Введите длинну основания треугольника');
            values.height = +prompt('Введите высоту треугольника');
            return {
                    area: 0.5 * values.base * values.height,
                    figure: 'Треугольник',
                    input: `Длина основания треугольника = ${values.base}, высота треугольника = ${values.height}`
                }            
    }
};
calculateArea ();