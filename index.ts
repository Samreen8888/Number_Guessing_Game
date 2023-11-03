import inquirer from "inquirer"
import chalk from "chalk"

// Step 1 create a random number
const randomNumber: number = Math.floor(Math.random()*100+1)
let remainingChances= 6;
//console.log(randomNumber)

// Step2

function validateNumber(input:string):boolean | string
{
    const number= parseFloat(input)
    if(isNaN(number)){
return "Please enter a valid number"
    }
    if (number < 0 || number>100){
        return"Please guess a number 1 to 100:"

    }
    return true;
}

async function askForGuess() {
    inquirer.prompt([{
        type: 'input',
        name: 'guess',
        message:'Please guess a number between 1 and 100:',
        validate:validateNumber,


    }])
    //Step 3
    .then ((answer: any) =>{

        const guessedNumber = parseInt(answer.guess)

        if(guessedNumber === randomNumber) {

            console.log(chalk.bgBlue.yellow(`Congratulations! you guessed the number ${randomNumber} correct`))
        process.exit(0)
    }
    else if (guessedNumber < randomNumber)
    {
        remainingChances--;

        console.log(chalk.bgRed.white(`To low,kindly guess again your remaining chances are ${randomNumber}`))

        if (remainingChances=0){
            console.log(chalk.bgGray.blue(`We are really sorry you have missed a chances correct num is ${remainingChances}`))

        }else {
            askForGuess()
        }

    }
    else if(guessedNumber < randomNumber)
    {
        remainingChances--;
        
        console.log(chalk.bgRed.white(`To high , kindly guess again your remaining chances left ${randomNumber}`))
    }
    if (remainingChances=0){
        console.log(chalk.bgGrey.blue(`We are really sorry you have missed a chances correct num is`))
    }else{
        askForGuess()
    }
}
)
}
askForGuess();