const fs = require('fs');
const inquirer = require('inquirer');

// Prompt the user for input using Inquirer
const promptUser = async () => {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text:',
      validate: value => value.trim() !== '' ? true : 'Text cannot be empty',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color:',
      validate: value => /^#[0-9A-F]{6}$/i.test(value) ? true : 'Please enter a valid color hex code (e.g. #RRGGBB)',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'rectangle', 'triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color:',
      validate: value => /^#[0-9A-F]{6}$/i.test(value) ? true : 'Please enter a valid color hex code (e.g. #RRGGBB)',
    },
  ]);

  return userInput;
};

// Function to generate SVG file based on user input
const generateSVG = (userInput) => {
  const { text, textColor, shape, shapeColor } = userInput;

  const svgContent = `
    <svg width="300" height="200">
      <rect width="300" height="200" fill="${shapeColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  fs.writeFileSync('output.svg', svgContent);
  console.log('SVG file generated successfully!');
};

// Main function to prompt user, handle input, and generate SVG
const main = async () => {
  const userInput = await promptUser();
  generateSVG(userInput);
};

// Run the main function
main();
