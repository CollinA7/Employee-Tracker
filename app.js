const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db/connection');

// This is the array of inquirer prompts
const prompts = [
    {
        type: 'list',
        name: 'frontPage',
        choices: ['Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    }
]
// The user launches the application in the terminal and is presented with the 
inquirer
    .prompt(prompts[0])
    .then((answer) => {
        // console.log(answer)
        // This switch case collects the users input and launches each function
        switch (answer) {
            case 'Add Employee':
                // add functions to prompt new inquirer
            break;
            case 'Update Employee Role':
                // 
            break;
            case 'View All Roles':
                // 
            break;
            case 'Add Role':
                // 
            break;
            case 'View All Departments':
                // console.log(answer);
                // 
            break;
            case 'Add Department':
                // 
            break;
            case 'Quit':
                // 
            break;
        }
})
