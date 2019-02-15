class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }
    
    displayInfo() {
        return `${this.name}, ${this.age}, ${this.dateOfBirth}`;
    }
};

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }
    displayInfo() {
        return `${super.displayInfo()}, ${this.salary}, ${this.department}`;
    }
}

class Manager extends Employee {
    constructor (name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.listOfEmployees = ['Ivan', 'Oleg', 'Vladimir'];
    }
    
    removeEmployee(person) {
        this.listOfEmployees.forEach(key => {
            if (key === person) {
                this.listOfEmployees
                    .unshift(...this.listOfEmployees.splice(this.listOfEmployees.indexOf(key), 1));
                this.listOfEmployees.shift();
                console.log(this.listOfEmployees);
            }
        });
    }
    
    addEmployee(person) {
        this.listOfEmployees.push(person);
        console.log(this.listOfEmployees);
    }
}

let ivan = new Manager('Иван', 24, '04.08.1995', 10000, 'Marketing');
ivan.removeEmployee('Oleg');