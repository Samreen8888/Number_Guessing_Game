"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
// Step 1 create a random number
const randomNumber = Math.floor(Math.random() * 100 + 1);
let remainingChances = 6;
//console.log(randomNumber)
// Step2
function validateNumber(input) {
    const number = parseFloat(input);
    if (isNaN(number)) {
        return "Please enter a valid number";
    }
    if (number < 0 || number > 100) {
        return "Please guess a number 1 to 100:";
    }
    return true;
}
function askForGuess() {
    return __awaiter(this, void 0, void 0, function* () {
        inquirer_1.default.prompt([{
                type: 'input',
                name: 'guess',
                message: 'Please guess a number between 1 and 100:',
                validate: validateNumber,
            }])
            //Step 3
            .then((answer) => {
            const guessedNumber = parseInt(answer.guess);
            if (guessedNumber === randomNumber) {
                console.log(chalk_1.default.bgBlue.yellow(`Congratulations! you guessed the number ${randomNumber} correct`));
                process.exit(0);
            }
            else if (guessedNumber < randomNumber) {
                remainingChances--;
                console.log(chalk_1.default.bgRed.white(`To low,kindly guess again your remaining chances are ${randomNumber}`));
                if (remainingChances = 0) {
                    console.log(chalk_1.default.bgGray.blue(`We are really sorry you have missed a chances correct num is ${remainingChances}`));
                }
                else {
                    askForGuess();
                }
            }
            else if (guessedNumber < randomNumber) {
                remainingChances--;
                console.log(chalk_1.default.bgRed.white(`To high , kindly guess again your remaining chances left ${randomNumber}`));
            }
            if (remainingChances = 0) {
                console.log(chalk_1.default.bgGrey.blue(`We are really sorry you have missed a chances correct num is`));
            }
            else {
                askForGuess();
            }
        });
    });
}
askForGuess();
