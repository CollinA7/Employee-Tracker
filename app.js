const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db/connection');

// This is the array of inquirer prompts
const initPrompt = [
    {
        type: 'list',
        name: 'frontPage',
        choices: ['Add Employee', 'Update Employee Role', 'View all employees', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    }
];

const addDepPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the department?'
    }
];

// const addRolePrompt = [
//     {
//         type: 'input',
//         name: 'title',
//         message: "What is the name for this role?"
//     },
//     {
//         type: 'input',
//         name: 'salary',
//         message: "what is the salary of the rol?"
//     },
//     {
//         type: 'list',
//         name: 'department_id',
//         message: 'What department does this role belong to?',
//         choices: ["Sales","Engineering", "Finance", "Legal"]
//     }
// ];


// The user launches the application in the terminal and is presented with the 
const mainFunction = () => {
    inquirer
    .prompt(initPrompt)
    .then((answer) => {
        // console.log(answer.frontPage)
        // This switch case collects the users input and launches each function
        switch (answer.frontPage) {
            case 'View all employees':
                showEmployees();
            break;
            case 'Add Employee':

            break;
            case 'Update Employee Role':
                // 
            break;
            case 'View All Roles':
                console.log('Showing all roles');
                console.log('---------------------');
                showRoles();
            break;
            case 'Add Role':
                // addRole();
            break;
            case 'View All Departments':
                console.log('Displaying all departments');
                showDepartment(answer);
            break;
            case 'Add Department':
                addDepartment(); 
            break;
            case 'Quit':
                console.log('Closing application, bye bye for now!')
            break;
        }
    })
};

const showDepartment = function() {
    db.query(
        `SELECT * FROM department;`,
        function(err, results, fields) {
            if (err) {
                console.log(err)
            }
        console.log(
        `
        ------------------------------
        `)
        console.table(results)
        mainFunction();
        }
    );
    
};
const showEmployees = function() {
    db.query(
        `SELECT * FROM employee;`,
        function(err, result, fields) {
            if (err) {
                console.log(err)
            }
            console.log(
            `
            ---------------------------
            `)
            console.table(result);
        }
        );
    mainFunction();
};

const showRoles = function() {
    db.query(
        `SELECT * FROM role;`,
        function(err, result, fields) {
            if (err) {
                console.log(err)
            }
            console.log(
            `
            ---------------------------
            `)
            console.table(result);
        }
    );
    mainFunction();
};

const addDepartment = function() {
    inquirer
    .prompt(addDepPrompt)
    .then((answer) => {
        // console.log(answer.id);
        // console.log(answer.name);
        
        db.query(
            `INSERT INTO department (name) VALUES ("${answer.name}")`,
                function (err, result, fields) {
                    if (err) {
                        console.log(err)
                    }
                    showDepartment();
                })
    });
};

// const addRole = function() {
//     inquirer
//     .prompt(addRolePrompt)
//     .then((answer) => {
//         console.log(answer.title);
//         console.log(answer.salary);
//         console.log(answer.department_id);
//     db.query(
//         `INSERT INTO role (title, salary, department_id) VALUES ("${answer.title}", ${answer.salary}, ${answer.department_id});`,
//         function (err, result, fields) {
//             if (err) {
//                 console.log(err)
//             }
//             console.log(
//             `
//             -------------------------
//             `)
//             showDepartment();
//         })
//     })

// }

mainFunction();
