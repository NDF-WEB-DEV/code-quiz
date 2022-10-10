//JS Global Vars
var questionsIndex = 0;
var startTime = 75;

// TOPS SECTION VARS
var tops = document.getElementById("tops");
var topHeader = document.getElementById("leaderboard");
var highScores = document.getElementById("highScores");
var timeAtZero = document.getElementById("timer");

// INTRO SECTION VARS
var containerIntro = document.getElementById("container-intro");
var startButton = document.getElementById("startButton");

// QUESTIONAIRE SECTION
var containerQuestions = document.getElementById("container-questions");
var questionTitle = document.getElementById("questionTitle");
var questionChoice = document.getElementById("choices");
var answer = document.getElementById("answer");
var timerCountdown = document.getElementById("timerCountdown");

//RESULTS SECTION
var results = document.getElementById("results");
var finalScore = document.getElementById("finalScore");
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submitBtn");

//HIGH SCORES SECTION
var highScoresSection = document.getElementById("highScoresSection");
var highScoresList = document.getElementById("highScoreList");
var btnsSection = document.getElementById("btnsSection");
var goBackBTN = document.getElementById("goBackBtn");
var clearlistBtn = document.getElementById("clearListBtn");

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

// Helper Timer Function
function countdown() {
        startTime--;                                //Decreases the timer by 1 second from 75
        timerCountdown.textContent = startTime;     //This line displays the text + remaining time in timer
        if(startTime <= 0) {                        //If timer reaches 0 then the end game fuction is called and the game stops         
            endGame();                                        
          }
}    

startButton.addEventListener("click", startQuiz);  

// 1. INTRO SECTION STARTS 
function startQuiz() {
    containerIntro.setAttribute("class","hide"); 
    timeAtZero.setAttribute("class","hide"); 
    containerQuestions.setAttribute("class","show");           //Questions section are visible
    var timerInterval = setInterval(countdown, 1000);          // Sets interval in timer var
    timerCountdown.textContent = startTime;                    //Timer is activated
    getQuestions();                                            //get questions function is called
}

// 2. QUESTIONS + ANSWERS SECTION
function getQuestions() {
    var currentQ = questions[questionsIndex];                   //local variable to hold index of each question in the questions array
    questionTitle.textContent = currentQ.title;                 //Returning Title variable content
    questionChoice.innerHTML = "";                              //clearing the variable
    currentQ.choices.forEach(function(choice, index) {          //iterating through the choices 
        var choiceBtn = document.createElement("button");       //created button element on demand for each of the choices
        choiceBtn.setAttribute("value",choice);                 //collecting all choices in array choice
        choiceBtn.textContent = index + 1 + ". " + choice;      //Displaying the choices with # values in a list
        choiceBtn.onclick = rightOrWrongAnswer;                 //Calling the right or wrong function to check if answer is correct
        questionChoice.appendChild(choiceBtn);                  //Inserts selection into the var choiceBtn
    })
}

// Helper function 
function rightOrWrongAnswer(event) {
    var btn = event.target;
       
    if(!btn.matches(".choice")){  //if we click a button and doesn't have the right choice 
        return;                   //stay on question page
    }
    //Keeps count of correct answers
    if(btn.value !== questions[questionsIndex].answer) { //if the choice does not match the right answer
        startTime = startTime - 1;  //time is decreased by 1
        if(startTime <= 0) {         //if timer is at zero 
            startTime = 0;          //then start time is set to zero
        }
        timerCountdown.textContent = startTime;  //The time is updated
        answer.textContent = "Wrong!";          // then display wrong answer
        plusScore++;                            // add 1 to the plusScore var
    }
    else {                                      //if the choice matches the right answer
        answer.textContent = "Correct!";        //Then print Correct! on the div id = answer
    }
    questionsIndex++; //move to the next question        
    if((startTime <= 0) || (questionsIndex === questions.length)) {  //if start time is zero or there are no more questions to go through
        gameEnd();                                                   // end the game
    }
    else {
        getQuestions();                                                 // else continue
    }
}

// Updates and prints finalScore on results div id=results
function finalScore() {
    finalScore.textContent; 
} 

//Used at the results id section page
function endGame() {
    clearInterval(timerInterval); //The interval is stopped
    results.removeAttribute('class');  //The results section shows up
    containerQuestions.setAttribute('class', 'hide');  // Questions dissappear
    finalScore.textContent = startTime;     //shows time as the score
    initials.textContent = initials;        //shows initials
  }


//A function to keep the list of scores
function scoresList() {
    initials = initials.value.trim();
    finalScore = finalScore.value.stringtify;
    submitBtn= submitBtn.count();

    while (submitBtn.click()) {
        initials.push(gameIntitals);
        submitBtn.push(gameNumber);
        finalScore.push(gameScore);
    }

    if(initials !== '') {
        var finalInitials = JSON.parse(localStorage.getItem('initials'));
        var highScores = JSON.parse(localStorage.getItem('finalScore'));
        var thisSubmitBtn = JSON.parse(localStorage,getItem('submitBtn'));
    }
    highScoresList = [                          //declared var array to store games stats
        {
            gameNumber: "",                         //stores game number (tries)
            gameIntitals: "",                      //stores game initials
            gameScore: ""                          //stores game score
        }
    ]
    return highScoresList;

}

submitBtn.onclick = scoresList;
