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


// function to initialize app and generate svg file
function init() {
    inquirer.prompt(questions)
    .then((data) => {

        function renderShape() {
            const userShape = data.logoShape;
            if (userShape === 'Square') {
                const userSquare = new Square();
                userSquare.color = data.shapeColor;
                return userSquare.render();
            } else if (userShape === 'Triangle') {
                const userTriangle = new Triangle();
                userTriangle.color = data.shapeColor;
                return userTriangle.render();
            } else if (userShape === 'Circle') {
                const userCircle = new Circle();
                userCircle.color = data.shapeColor;
                return userCircle.render();
            } else {
                console.log('Invalid Shape. No image generated')
            }

        }

        function generateSVG(data) {
            return `
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
${renderShape()}
<text x="150" y="150" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoText}</text>
</svg>`
        }

        fs.writeFile(`./samples/${data.logoText}.svg`, generateSVG(data), (err) =>
            err ? console.log(err) : console.log('Successfully created your svg file in samples folder (=✪ᆽ✪=)'))
    });
};

init();