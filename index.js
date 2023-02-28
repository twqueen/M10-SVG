const inquirer = require("inquirer")
const fs = require("fs")
const { Square, Circle, Triangle } = require("./lib/shapes")

const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter up to three characters for your logo:',
        validate: logoTextInput => {
            if (logoTextInput.length > 0 && logoTextInput.length < 4) {
                return true;
            } else {
                console.log('Please enter at least 1 character and only up to 3 characters.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be? (Enter a color keyword or a hexadecimal number)',
        default: '#FFFFFF'
    },
    {
        type: 'list',
        name: 'logoShape',
        message: 'Choose a desired shape:',
        choices: ['Square', 'Circle', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape be? (Enter a color keyword or a hexadecimal number)',
        default: '#000000'
    },
];

