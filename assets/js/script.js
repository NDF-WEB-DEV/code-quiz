//JS Global Vars
var questionsIndex = 0;
var timer;
var timerCount;
var right = true;
var wrong = false;

// TOPS SECTION VARS
var tops = document.getElementById("tops");
var topHeader = document.getElementById("leaderboard");
var highScores = document.getElementById("highScores");
var timeAtZero = document.getElementById("timeAtZero");

// INTRO SECTION VARS
var containerIntro = document.getElementById("container-intro");
var startButton = document.getElementById("startButton");

// QUESTIONAIRE SECTION
var containerQuestions = document.getElementById("container-questions");
var questionTitle = document.getElementById("questionTitle");
var questionChoice = document.getElementById("choices");
var answer = document.getElementById("answer");
var rightOrWrong = document.getElementById("rightOrWrong")
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
    timer = setInterval(function() {
        timerCount--;    
        timerCountdown.textContent = timerCount; 
        if(timerCount == 0) {   //This line displays the text + remaining time in timer
            timerCount = finalScore.textContent;
            document.getElementById('finalScore').textContent;
            clearInterval(timer);
            endGame();
        }
    },1000);
}    

startButton.addEventListener("click", startQuiz);  //when press srat button we call the startQuiz function

// 1. INTRO SECTION STARTS 
function startQuiz() {
    timerCount = 76;
    timeAtZero.style.display = "none";                          //Corner timer at zero hides
    containerIntro.style.display = "none";                      //Container intro hides
    startButton.disabled = true;                                //start button is diasbled
    containerQuestions.setAttribute("class","show");            //Questions section becomes visible
    countdown();
    getQuestions();                                                            //get questions function is called
}
// event listener for questions
containerQuestions.addEventListener("click", function(event){   
    console.log(event)               //check what is happening on event
    console.dir(event.target)        //Display prooerties of the event target
    if (event.target.matches('button')) {
        console.log('on question index ', questionsIndex, ' of ', (questions.length - 1) ) // Another checkpoint: get user answer which is not event.target but event.target.textContent
        var userAnswer = event.target.textContent.slice(2);    // Get rid off number in the beginning of string to effectively compare
        var correctAnswer = questions[questionsIndex].answer; // get the correct answer
        if(userAnswer === correctAnswer){    //if user choice matches answer
            document.getElementById('rightOrWrong').innerHTML = "Correct!"; //Print Correct
        } else {
            document.getElementById('rightOrWrong').innerHTML = "Wrong!"    //else Print Wrong
        }       
        questionsIndex = questionsIndex + 1; // increment question index
        getQuestions(); // got to next questions
    }
});

// 2. QUESTIONS + ANSWERS SECTION
function getQuestions() {
    if (questionsIndex < questions.length) {
        var currentQ = questions[questionsIndex];                   //local variable to hold index of each question in the questions array
        questionTitle.textContent = currentQ.title;                 //Returning Title variable content
        questionChoice.innerHTML = "";                              //clearing the variable
        currentQ.choices.forEach(function(choice, index) {          //iterating through the choices 
            var choiceBtn = document.createElement("button");       //created button element on demand for each of the choices
            choiceBtn.setAttribute("value",choice);                 //collecting all choices in array choice
            choiceBtn.textContent = index + 1 + "." + choice;       //Displaying the choices with # values in a list
            choiceBtn.onclick = rightOrWrongAnswer;                 //Calling the right or wrong function to check if answer is correct
            questionChoice.appendChild(choiceBtn);                  //Inserts selection into the var choiceBtn
        })
    } else {
        startButton.disabled = true;                                //start button is diasbled
        containerQuestions.setAttribute("class","hide"); 
        results.setAttribute("class","show");
        results.style.display = "block";
        timerCount = document.getElementById("finalScore").innerHTML;
        document.getElementById('finalScore').textContent = finalScore;
        finalScore.textContent;
        console.log(finalScore);
    }
}

// Helper function 
function rightOrWrongAnswer(event) {
    var btn = event.target;
       
    if(!btn.matches(".choice")){  //if we click a button and doesn't have the right choice 
        return;                   //stay on question page
    }
    //Keeps count of correct answers
    if(btn.value != questions[questionsIndex].answer) { //if the choice does not match the right answer
        startTime = startTime - 5;  //time is decreased by 1
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
        startButton.disabled = true;                                //start button is diasbled
        containerQuestions.setAttribute("class","hide");  
        results.style.display = "block";          //Questions section becomes visible
        console.log(finalScore);
        // endGame();                                                   // end the game
    } else if ((startTime > 0) && (questionsIndex === questions.length)) {
        // endGame();
        startButton.disabled = true;                                //start button is diasbled
        containerQuestions.setAttribute("class","hide");  
        results.style.display = "block";
        timerCount = finalScore;
        // document.getElementById('finalScore').innerHTML = finalScore;
        // console.log(finalScore);
        // clearInterval(timer);
        // endGame();
    }
    else {
        getQuestions();                                                 // else continue
    }
}

// Updates and prints finalScore on results div id=results
function finalScore() {
    timerCount = finalScore.textContent; 
    // document.getElementById('finalScore').textContent;
} 

//Used at the results id section page
function endGame() {
    clearInterval(timerInterval).style.display = "hide"; //The interval is stopped
    results.style.display = "contents";
    //results.removeAttribute('class');  //The results section shows up
    containerQuestions.setAttribute('class', 'hide');  // Questions dissappear
    // finalScore.textContent = startTime;     //shows time as the score
    console.log(finalScore);
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
