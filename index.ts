import inquirer from "inquirer"; // importing inquirer

// taking Number input from the user.
let userInput1 = await inquirer.prompt({
    type: 'input',
    name: 'number',
    message: 'Please enter a number between 0 and 100: '
},
);

// Function for checking weather the number is accurate or not.
function numberCheck(Number:number){
if(Number>100 || Number<0){
    console.log("Invalid Number!!! \n EXIT");
    process.exit(1); //EXIT with error
} 
}
numberCheck(parseInt(userInput1.number)); // calling numberCheck function


// Function for generating random number + comparing user's entered number.
function num(max:number, min:number){
let randNumber = Math.floor(Math.random()* (max - min +1)) +1; // Generating Random Number

// checking condition.
if(parseInt(userInput1.number) == randNumber){
    console.log("Great! You guessed the exact number" + randNumber);
}
else if(parseInt(userInput1.number) < randNumber){
    console.log("Opps! Your number is smaller than " + randNumber);
}
else if(parseInt(userInput1.number) > randNumber){
    console.log("Opps! Your number is larger than " + randNumber);
}
}

// calling function
num(100,0);
console.log("You have the opportunity to participate up to five times.")

 

// For loop for executing the functions multiple times.
for(let i=0;i<5;i++){
let userInput2 = await inquirer.prompt({
    type: 'input',
    name: 'again',
    message: '"Please press 1 to initiate another game or press 0 to exit."'
}
)

if(userInput2.again == 1){
   
    let userInputNew = await inquirer.prompt({
        type: 'input',
        name: 'number',
        message: 'Please enter a number between 0 and 100: '
    },
    );
   
    function num2(max:number, min:number){
        let randNumber = Math.floor(Math.random()* (max - min +1)) +min; // Generating Random Number
        
        // checking condition.
        if(userInputNew.number == randNumber){
            console.log("Great! You guessed the exact number" + randNumber);
        }
        else if(userInputNew.number < randNumber){
            console.log("Opps! Your number is smaller than " + randNumber);
        }
        else if(userInputNew.number > randNumber){
            console.log("Opps! Your number is larger than " + randNumber);
        }
        }
    numberCheck(parseInt(userInputNew.number));
    num2(100,0);

}
else if(userInput2.again == 0){
    console.log('EXIT');
    process.exit();
}
else{
    console.log("INVALID NUMBER ENTERED!!!");
    process.exit(1); // EXIT with an error
}
}
console.log("Thanks for Playing the Game");