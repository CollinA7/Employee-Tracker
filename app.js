const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');

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
    .then((answers) => {
        console.log(answers)
    })
// the user is presented with an inquirer prompt asking what they would like to do with the list of employees

// The users selected option then is displayed in the console as a table

