#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
console.log("\n\tWelcome to CodewithAisha - Number Guessing Game\n");
var randomNumber = Math.floor(Math.random() * 5 + 1);
var answer = await inquirer_1.default.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    }
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulation ! You guess a correct number.");
}
else {
    console.log("You guess a wrong number");
}
