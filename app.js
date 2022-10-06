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
        name: 'id',
        message: "What is the role ID?"
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the role?'
    }
];

const addRolePrompt = [
    {
        type: 'input',
        name: ''
    }
];


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
                addRole();
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
        console.log(answer.id);
        console.log(answer.name);
        
        db.query(
            `INSERT INTO department (id, name) VALUES (${answer.id}, "${answer.name}")`,
                function (err, result, fields) {
                    if (err) {
                        console.log(err)
                    }
                    console.log(
                    `
                    -------------------------
                    `)
                    showDepartment();
                })
    });
};

mainFunction();
