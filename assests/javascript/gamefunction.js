//The words that are going to be guessed
//Created a variable where wordsAvaliable is egaul to the words in the array
var wordsAvaliable = ["Batman", "Superman", "Flash", "Robin", "Spiderman", "Thor", "Black Widow", "Captain America", "Hulk"];
//Variables for the game to function
//This const variable defines a constant reference to a value, we cannot change constant values.
//But you can change the properties of constant objects inside the const variable.
var chances = 10;
//Global variables
//The letters user guess wrong are put in the brackets
// var lettersGuessed = [];
//The letters that are correct for the word being guessed
var wordLetter = [];
//The word that is being guessed
var word;
//When the guesses hit 0 from the const chances of 10
var guesses = 0;
//How many times you win the game
var win = 0;
//How many times you lose the game
var losses =0
//This is a variable of the user guess
var userGuess =""
//This is a varible for the underscores
var underScores
//This is the variable for the wrong letters that are guessed
var wrongLetters =[]
//This is a constant variable for the alphabet
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//This is a reset function when the game start and when the game ends
function reset() {
    //Putting variables in the reset function
    chances = 10
    // lettersGuessed = []
    wrongLetters=[]
    word = []
    underScores=[]
    wordLetter = [];
    //The math.floor is a function that returns the largest integer less than or equal to a given number and having
    //Math.random inside the parantheses randomize the wordsAvaliable and adding .length gets the whole word instead
    //of just one letter. The .toLowerCase is a method that returns the calling string value converted to lower case.
    //The .split() method is used to split a string into an array of substrings, and returns the new array.
    word = wordsAvaliable[Math.floor(Math.random()*wordsAvaliable.length)].toLowerCase().split("")
    //This is a for loop, the let statement declares a block scope local variable. i is equal to 0, i is less then
    //to the word length, i is 1 plus whatever i is.
    for (let i = 0; i < word.length; i++) {
        //Under scores are used for the blank spaces
        underScores.push("_")    
    }
    //This is a if statement, word is the word that is being guessed, the .includes is a method that determines 
    //whether an array includes a certain value among its entries, (" ") is empty spaces that that .includes is 
    //putting in for the words.
    if(word.includes(" ")){
        //The indexOf() method returns the (" ") of the first occurrence of a specified word in a string under scores
        underScores[word.indexOf(" ")] = " "
    }
    console.log(word, underScores)
    // Hide game over and win images/text
    document.getElementById("tryagain").style.cssText = "display: none;";
    document.getElementById("youlose").style.cssText = "display: none;";
    document.getElementById("youwin").style.cssText = "display: none;";
}
reset()
//The .onkeyup happens when a key is pressed equal to the function called event
document.onkeyup = function(event){
    console.log(event.key)
    //User guess equals event.key which is the keyboard button that was pressed when a key event happened
    userGuess = event.key
    //This is a if/else statement that includes the user guess of the alphabet
    if (alphabet.includes(userGuess)){
        //This is a if/else statement if this is true the word letter includes the user guess
        if(!wordLetter.includes(userGuess)){
            console.log("first time used")
            //The letter will be pushed to user guess
            wordLetter.push(userGuess)
            //The check will see if the letter guess was right or wrong
            check()
        }
        //This is the else statement for the if becomes false alert choose another letter
        else{
            alert("choose another letter")
        }
    }
    //This is the else statement if the if wasn't true, alert you must guess a letter
    else{
        alert("you must guess a letter")
    }
    document.getElementById("win").innerText = win;
    document.getElementById("losses").innerText = losses;
    document.getElementById("word").innerText = underScores.join("");
}
//This is a function made for check
function check(){
    //Made a variable called location
    var location =[]
    //This is a if/else statement for the word being guessed .includes what the user guessed for the word.
    if(word.includes(userGuess)){
        //This is a for loop, the let statement declares a block scope local variable. i is equal to 0, i is less then
        //to the word length, i is 1 plus whatever i is. 
        for (let i = 0; i < word.length; i++) {
            //This is a if statement, word is i === <---both the type and the value we are comparing have to be the 
            //same and if it is true .push the variable location which is it's spot.
            if (word[i]===userGuess){
                location.push(i)
                document.getElementById("word").innerText = underScores.join("");
            }   
        }
        //This is a for loop, the let statement declares a block scope local variable. Since we already use i we
        //use j, j is equal to 0, j is less then to the word length, j is 1 plus whatever i is.
        for (let j = 0; j < location.length; j++) {
            //j is set in location which location is set for the underScores which equals to what the userGuess
            underScores[location[j]]=userGuess
        }
        console.log(underScores)
        //This a if statement if all the underscores are filled the you when and it goes back to the reset settings.
        if (!underScores.includes("_")){
            console.log("you won!!!!!!")
            //Shows that you win and to try again picture and button
            document.getElementById("youwin").style.cssText = "display: inline";
            document.getElementById("tryagain").style.cssText = "display: inline";
            win++
            reset()
        }
    }
    //This is the else statement from the if is not true
    else{
        //The wrong letter will be pushed to the the user guess
        wrongLetters.push(userGuess)
        //Chances go down one by one everytime the user do a wrong guess
        chances--
        console.log(chances, wrongLetters)
        //This is a if statement and if chances go to 0 you lose then the game resets
        if(chances===0){
            //Shows that you lose and to try again picture and button
            document.getElementById("youlose").style.cssText = "display: inline";
            document.getElementById("tryagain").style.cssText = "display: inline";
            losses++
            reset()
        }
    }
    document.getElementById("word").innerText = underScores.join("");
    document.getElementById("guesses").innerText = chances;
    document.getElementById("lettersGuessed").innerText = wrongLetters;
}


