//The words that are going to be guessed
//Created a variable where wordsAvaliable is egaul to the words in the array
var wordsAvaliable = ["Batman", "Superman", "Flash", "Robin", "Spiderman", "Thor", "Black Widow", "Captain America", "Hulk"];

//Variables for the game to function
//This const variable defines a constant reference to a value, we cannot change constant values.
//But you can change the properties of constant objects inside the const variable.
var chances = 10;
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
var losses =0
var userGuess =""
var underScores
var wrongLetters =[]
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
function reset() {
    chances = 10
    lettersGuessed = []
    wrongLetters=[]
    word = []
    underScores=[]
    word = wordsAvaliable[Math.floor(Math.random()*wordsAvaliable.length)].toLowerCase().split("")
    for (let i = 0; i < word.length; i++) {
        underScores.push("_")    
    }
    if(word.includes(" ")){
        underScores[word.indexOf(" ")] = " "
    }
    console.log(word, underScores)
}
reset()
document.onkeyup = function(event){
    console.log(event.key)
    userGuess = event.key
    if (alphabet.includes(userGuess)){
        if(!wordLetter.includes(userGuess)){
            console.log("first time used")
            wordLetter.push(userGuess)
            check()
        }
        else{
            alert("choose another letter")
        }
    }
    else{
        alert("you must guess a letter")
    }
}
function check(){
    var location =[]
    if(word.includes(userGuess)){
        for (let i = 0; i < word.length; i++) {
            if (word[i]===userGuess){
                location.push(i)
            }   
        }
        for (let j = 0; j < location.length; j++) {
            underScores[location[j]]=userGuess
            
        }
        console.log(underScores)
        if (!underScores.includes("_")){
            console.log("you won!!!!!!")
            win++
            reset()
        }
    }
    else{
        wrongLetters.push(userGuess)
        chances--
        console.log(chances, wrongLetters)
        if(chances===0){
            losses--
            reset()
        }
    }
}

