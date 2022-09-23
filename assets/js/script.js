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
var qIndex = 0;

//questions var object array that creates a list of each window in the quiz
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

//initialization of Functions
function initiation() {
    landingPageLoad();
    countdown();
    startQuiz();
}

//first sections show up at page load
function landingPageLoad() {
    topHeader.setAttribute("class","show-intro");
    thisIntro.setAttribute("class","show-intro");
    startButton.setAttribute("class","show-intro");
    startButton.addEventListener("click", startQuiz());  //Eevent listener to capture when the start button is clicked and calls the startquiz function
}

// function for the timer
function countdown() {
        startTime--;                                //Decreases the timer by 1 second from 75
        timerCountdown.textContent = startTime;     //This line displays the text + remaining time in timer
        if(startTime <= 0) {                        //If timer reaches 0 then the end game fuction is called and the game stops         
            endGame();                                        
          }
}      

//Start the questions section of the Quiz and hides the intro section of the quiz
function startQuiz() {
    thisIntro.setAttribute("class","hide");                    //hides the intro section of the quiz
    questionaire.removeAttribute("class");                     //Questions section are visible
    var timerInterval = setInterval(countdown, 1000);          // Sets interval in timer var
    timerCountdown.textContent = startTime;                    //Timer is activated
    getQuestions();                                            //get questions function is called
}


function getQuestions() {
    var currentQ = questions[qIndex];                           //local variable to hold index of each question in the questions array
    questTitles.textContent = currentQ.title;                   //Returning Title variable content
    questionChoice.innerHTML = "";                              //clearing line # 32 because all of the above
    currentQ.choices.forEach(function(choice,i){                //iterating through the choices 
        var choiceBtn = document.createElement("button");       //created element button on demand for each of the choices
        choiceBtn.setAttribute("class","choice");               //created class: choice
        choiceBtn.setAttribute("value",choice);                 //collecting all choices in array choice
        choiceBtn.textContent = i + 1 + ". " + choice;          //Printing the choices with # values in a list
        choiceBtn.onclick = rightOrWrongAnswer;                 //Calling the right or wrong funtion to check of answer is correct
        questionChoice.appendChild(choiceBtn);                  //Inserts selection into the var choiceBtn
    })
}

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

//A function to endGame
function endGame() {
    if(startTime <= 0) {                        //If the counter reaches 0
        endGame();                              //End the game          
      }
      theResults.removeAttribute("class");      //The results page shows up
} 

//Used at the results id section page
function endGamePage() {
    var gameScore = localStorage.getItem("score");                  //stores the score for ongoing game
    var thisGameInitials = localStorage.getItem("initials");        //stores initials for player of for ongoing game
    theScore.textContent = score;                                   //Prints the score
    theInitials.textContent = initials;                             //prints the initials
  }


//A function to keep the list of scores up to 5 games
function scoresList() {
    var allGamesScores = [                          //declared var array to store games stats
        {
            gameNumber: "",                         //stores game number (tries)
            gameIntitals: " ",                      //stores game initials
            gamescore: " "                          //stores game score
        }
    ]
//need to write while loop to store game stats on high scores game
//display or print final stats
}


  