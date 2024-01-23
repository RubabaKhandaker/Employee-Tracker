const inquirer = require('inquirer');
const consoleTable = require('console.table');

const queries = require('./query');

class prompts {
    constructor() {}

    initializeProgram() {
        this.menuPrompt();
    };

        menuPrompt() {

            inquirer.prompt({

                    type: 'list',
                    name: 'Menu',
                    message: "\nHow would you like to proceed?",
                    choices: [

                        'View departments',
                        'View roles',
                        'View employees',
                        'Add department',
                        'Add role',
                        'Add employee',
                        'Exit'

                    ]
                })

                .then(({ Menu }) => {

                    if (Menu === 'View departments') {
                        this.departmentView();
                    } else if (Menu === 'View roles') {
                        this.roleView();
                    } else if (Menu === 'View employees') {
                        this.employeeView();
                    } else if (Menu === 'Add department') {
                        this.departmentAddPrompt();
                    } else if (Menu === 'Add role') {
                        this.roleAddPrompt();
                    } else if (Menu === 'Add employee') {
                        this.employeeAddPrompt();
                    } else {
                        
                        queries.connectionEnd();
                        console.log('See ya!\n')
                        process.exit();

                    }
                });
        }

    };