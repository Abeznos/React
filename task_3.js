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