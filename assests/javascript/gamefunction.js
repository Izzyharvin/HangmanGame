//The words that are going to be guessed
//Created a variable where wordsAvaliable is egaul to the words in the array
var wordsAvaliable = ["Batman", "Superman", "Flash", "Robin", "Spiderman", "Thor", "Black Widow", "Captain America", "Hulk"];

//Variables for the game to function
//This const variable defines a constant reference to a value, we cannot change constant values.
//But you can change the properties of constant objects inside the const variable.
const chances = 10;
//Global variables
//The letters user guess wrong are put in the brackets
var lettersGuessed = [];
//The letters that are correct for the word being guessed
var wordLetter = [];
//The word that is being guessed
var word;
//When the guesses hit 0 from the const chances of 10
var guesses = 0;
//How man times you win the game
var win = 0;

//Function on what to do in the game
// This function takes a letter and finds all possiability.
function evaluateGuess(letter) {
    // Store positions of letters
    var positions = [];
    //This is a for loop: the variable i will be set to 0 (empty slots for the words) using the word that is being
    //guessed inside the parentheses for wordsAvaliable in the array and .length is the length of an object.
    for (var i = 0; i < wordsAvaliable[word].length; i++) {
        //Using the if/else statement so when the word that is being guessed if you guessed the letter (i) in the
        //wordsAvaliable it will push that letter in the empty spot, also the === means it has to be the same.
        if (wordsAvaliable[word][i] === letter) {
            positions.push(i);
        }
        //if there is no letter remove a guess
        else (positions.length <= 0) {
            //Guesses-- is the same as i-- minusing the number of guesses each time you type the wrong letter
            guesses--;
        }
    }
};

//Making the guesses
// Makes a guess
function makeGuess(letter) {
    if (remainingGuesses > 0) {
        // Make sure we didn't use this letter yet
        if (lettersGuessed.indexOf(letter) === -1) {
            lettersGuessed.push(letter);
            evaluateGuess(letter);
        }
    }
};

//Wins or Lose function
//
function winOrLose () {
    if (wordLetter.indexOf('_') === 0) {
        console.log(you win!)
        wins++
    }
    else () {
        console.log(you lose!)
    }
};

//Guesses


//Tries


//Letters that are already guessed


//Reset Game