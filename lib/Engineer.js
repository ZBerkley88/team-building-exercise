const Employee = require(`./Employee`);

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.email = email;
    }
}

module.exports = Engineer;