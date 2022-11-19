class Employee {
    // each employee, regardless of position, must have a name, ID no., and email address
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    printInfo() {
        console.log(`Employee Name: ${this.name}`);
        console.log(`Employee ID No.: ${this.id}`);
        console.log(`Employee EMail: ${this.email}`);
    }
}

module.exports = Employee;