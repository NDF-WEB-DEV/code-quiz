//Global variables for ID's - query selectors + getElementById
var startTime = 75;
var timerCountdown = document.querySelector(".timer");
var topHeader = document.getElementById("leaderboard");
var startButton = document.querySelector("#start");
var saveButton = document.querySelector("#initials");
var thisContainer = document.getElementById("container");
var thisIntro = document.getElementById("intro");
var questionaire = document.getElementById("questions");
var questTitles = document.getElementById("question-title");
var questionChoice = document.getElementById("choices");
var response = document.getElementById("answer")
var theResults = document.getElementById("results");
var theScore = document.querySelector("#finalScore");
var theInitials = document.querySelector("initials");

//questions var object that creates a list of each window in the quiz
var questions = [
    {
        title: "Commonly used data types DO Not Include:", 
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
];

//adding event listener for each time a choice is clicked to move on to the next question
questionaire.addEventListener("click", function(event) {
    questionaire.className === 'hide';                  //id questionaire (questions) section hides
    theResults.className === 'show';                    //id theresults (results) section shows up
    for (var i = 0; i < questionaire.length; i++) {    //as we go through the array questions
        questionaire[i].textContent;                   //when I click on one of the choices
        rightOrWrongAnswer();                          //function rightOrWrongAnswer is called
    } 
});

//initialization Function
function initiation() {
    landingPageTime();
}

//functions that sets startTime to = 0
function landingPageTime() {
    startTime = 0;
    timerCountdown.textContent = "Time: " + startTime;  //when landing page loads timer is at 0 before starting quiz
}

// function for the timer
function countdown() {
      var timerInterval = setInterval(function() {          // Sets interval in timer var
        timerCountdown.textContent = "Time: " + startTime;  //This line displays the text + remaining time
        startTime--;                                        //start time starts decreasing
        if(startTime === 0) {                               //when time is 0 
            clearInterval(timerInterval);                   // Execution stops action of set interval
            theResults.className === 'show';
          }
}, 1000);
} initiation();      

//event listener for start button
startButton.addEventListener("click", function() {  //creating an event listener to capture when the start button is clicked
    if(thisIntro.className === 'show') {            //if the intro section is showing up in the page
        thisIntro.className = 'hide';               //when I click the Start Quiz button then the intro section
    } else {

    }
    questionaire.className = 'show';
    countdown();
});

//This function counts the right or wrong answers
function rightOrWrongAnswer() {
    var plusScore;                              //Keeps count of correct answers
    if(questions[choices] === answer) {         //if the choice MATCHES the right answer
        answer.textContent = "Correct!";        // then print Correct!
        plusScore++;                            // add 1 to the plusScore var
    }
    else if (questions[choices] !== answer) {   //if the choice DOES NOT match the right answer
        answer.textContent = "Wrong!";          //Then print Wrong! on the div id = answer
    }
    plusScore == theScore;                      //Keeps track of final score
    return answer;
}

// Updates and prints finalScore on results div id=results
function finalScore() {
    theScore.textContent; //prints final score on results div page
}




//A function to end the game

//A function to kepp the scores in a list data structure



  