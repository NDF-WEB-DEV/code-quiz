//Global variables
const startTime = 75;
var topHeader = document.getElementById("#leaderboard");
var startButton = document.querySelector("#start");
var saveButton = document.querySelector("#initials");
var timerCountDown = document.querySelector("#timer-secs");
var thisContainer = document.getElementById("#container");
var thisIntro = document.getElementById("#intro");
var questionaire = document.getElementById("#questions");
var questTitles = document.getElementById("#question-title");
var questionChoice = document.getElementById("#choices");
var theResults = document.getElementById("#results");
var theScore = document.querySelector("#finalScore");
var theInitials = document.querySelector("#initials");

//create id's variables - query selectors

//questions object
var questions = [
    {
        title: "Commonly used data types DO Not Include", 
        choices: ['string','booleans','alerts','numbers'],
        answer: "alerts",
    },
    {
        title: "The condition in a if/else statement is enclosed with___", 
        choices: ['quotes','curly brackets','parenthesis','square brackets'],
        answer: "parenthesis",
    },
    {
        title: "Arrays is JavaScript can be used to store___", 
        choices: ['numbers and strings','other arrays','booleans','all of the above'],
        answer: "all of the above",
    },
    {
        title: "String values must be enclosed within ___ when beign assigned to variables.", 
        choices: ['commas','curly brackets','quotes','parenthesis'],
        answer: "quotes",
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        choices: ['JavaScript','terminal/bash','for loops','console.log'],
        answer: "console.log",
    }
]

setInterval(timerCountDown, 1000);
// Timer Function
function timerCountDown() {
    const secTimer = new Date ();
    document.getElementById("timer-sec").innerHTML = d.getSeconds();
}

//start button create event listener, send it to start 

//this function starts quiz
function startQuiz() {
//When I start the quiz it hides intro section
//First question in questions var shows up
// call start timer function
}

//This function should displays the questions and buttons
//only bring questions

//another function to compare if the answer is right or wrong
//Ask myself do I still have questions 
//Ask myself do i still have time
//end game

//A function to end the game

//A function to kepp the scores in a list data structure 

//A function to clear all scores
