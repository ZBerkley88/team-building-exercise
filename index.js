const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');


const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs'); 


const teamMembers = [];

function appMenu() {
    function createManager() {
        inquirer.prompt([
            {
                type: `input`,
                name: `name`,
                message: `What the team manager's name?`,
                validate: (answer) => {
                    if (answer !== '') {
                        return true;                
                    }
                    return `Please enter the team manager's name.`;
                }, 
            },
            {
                type: `input`,
                name: `id`,
                message: `What the manager's ID number?`,
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                    return true;
                    }
                    return 'Please enter a number greater than zero.';
                },
            },
            {
                type: `input`,
                name: `email`,
                message: `What the manager's email address?`,
                validate: (answer) => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if (pass) {
                    return true;
                    }
                    return 'Please enter a valid email address.';
                }, 
            },
            {
                type: `input`,
                name: `officeNumber`,
                message: `What the manager's office number?`,
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                    return true;
                    }
                    return 'Please enter a number greater than zero.';
                }, 
            },
        ])
        .then(function(answer) {
            const manager = new Manager(
                answer.name,
                answer.id,
                answer.email,
                answer.officeNumber
            )
            teamMembers.push(manager);
            addTeamMember();
        });
    }


    function addTeamMember() {
        inquirer.prompt([ 
            {
                type: `list`,
                name: `continue`,
                message: `Would you like to continue building your team?`,
                choices: ['Yes, add an enginner', 'Yes, add an intern', 'No, finish building my team.'],
                when: (answer) => {
                    if (answer.continue === 'Yes, add an enginner') {
                        return addEngineer();
                    } else if (answer.continue === 'Yes, add an intern') {
                        return addIntern();
                    } else {
                        // WHAT ELSE NEEDS TO BE DONE HERE?
                        return
                    }
                }
            }
        ]);
    }


    function addEngineer() {
        inquirer.prompt([
            {
                type: `input`,
                name: `name`,
                message: `What is this engineer's name?`,
                validate: (answer) => {
                    if (answer !== '') {
                        return true;                
                    }
                    return `Please enter the engineer's name.`;
                },  
            },
            {
                type: `input`,
                name: `id`,
                message: `What is this engineer's ID number?`,
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                    return true;
                    }
                    return 'Please enter a number greater than zero.';
                },
            },
            {
                type: `input`,
                name: `email`,
                message: `What is this engineer's email address?`,
                validate: (answer) => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if (pass) {
                    return true;
                    }
                    return 'Please enter a valid email address.';
                },  
            },
            {
                type: `input`,
                name: `github`,
                message: `What is this engineer's GitHub user name?`,
                validate: (answer) => {
                    if (answer !== '') {
                        return true;                
                    }
                    return `Please enter the engineer's GitHub user name.`;
                },  
            },
        ])
        .then(function(answer) {
            const engineer = new Engineer(
                answer.name,
                answer.id,
                answer.email,
                answer.github
            )
            teamMembers.push(engineer);
        });
    }


    function addIntern() {
        inquirer.prompt([
            {
                type: `input`,
                name: `name`,
                message: `What is this intern's name?`,
                validate: (answer) => {
                    if (answer !== '') {
                        return true;                
                    }
                    return `Please enter the intern's name.`;
                },   
            },
            {
                type: `input`,
                name: `id`,
                message: `What is this intern's ID number?`,
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                    return true;
                    }
                    return 'Please enter a number greater than zero.';
                }, 
            },
            {
                type: `input`,
                name: `email`,
                message: `What is this intern's email address?`,
                validate: (answer) => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if (pass) {
                    return true;
                    }
                    return 'Please enter a valid email address.';
                },  
            },
            {
                type: `input`,
                name: `school`,
                message: `Where did this intern attend school?`,
                validate: (answer) => {
                    if (answer !== '') {
                        return true;                
                    }
                    return `Please enter the intern's school name.`;
                },   
            },
        ])
        .then(function(answer) {
            const intern = new Intern(
                answer.name,
                answer.id,
                answer.email,
                answer.school
            )
            teamMembers.push(intern);
        });
    }

    createManager();
}

appMenu();