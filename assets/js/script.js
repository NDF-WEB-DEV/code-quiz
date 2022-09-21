//Global variables for ID's - query selectors + getElementById
var startTime = 75;
var timerCountdown = document.querySelector(".timer");
var topHeader = document.getElementById("#leaderboard");
var startButton = document.querySelector("#start");
var saveButton = document.querySelector("#initials");
var thisContainer = document.getElementById("#container");
var thisIntro = document.getElementById("#intro");
var questionaire = document.getElementById("#questions");
var questTitles = document.getElementById("#question-title");
var questionChoice = document.getElementById("#choices");
var theResults = document.getElementById("#results");
var theScore = document.querySelector("#finalScore");
var theInitials = document.querySelector("#initials");

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

//initialization Function
function initiation() {
    landingPageTime();
}

//functions that sets startTime to = 0
function landingPageTime() {
    startTime = 0;
    timerCountdown.textContent = "Time: " + startTime;  //when landing page loads timer is at 0 before starting quiz
}

// function initiation() {
//     landingPageTime();
//     countdown();
// }

function countdown() {
      var timerInterval = setInterval(function() { // Sets interval in timer var
        // startTime = 0;  //when landing page loads timer is at 0
        // console.log("Time: " + startTime);  //Added for checking purposes only
        timerCountdown.textContent = "Time: " + startTime;  //This line displays the text + remaining time
        startTime--;
        if(startTime === 0) {
            clearInterval(timerInterval); // Stops execution of action at set interval
            sendMessage("Game Over"); // Calls function to create and append image

          }
}, 1000);
} initiation();      
      
startButton.addEventListener("click", function() {
    if(thisIntro.style.visibility == 'visible') {
        thisIntro.style.visibility == 'visible';
    }
});

function hideIntroSection() {

}

// startButton.onclick = function() {
//     if(thisIntro.style.display == "block") {
//         thisIntro.style.display == "none";
//     } 
//     else {
//         thisIntro.style.display == "block";
//     }
// };

//start button creates event listener, and starts the quiz
//when I press the start button 
// The first object from the list of the questions array is shown
//and the leaderboard id is hidden
// startButton.addEventListener("onclick", function() {
//     thisIntro.style.display === 'none'; //
//     questionaire.style.display === 'show'; //unhide var questionaire
//     //countdown(); //countdown function is called to start the countdown from 75 seconds
//     //start quiz button is clicked then
//     //timer starts
//     //First title-question appears
//     //List of multiple choice appears
//     //Multiple choice selection turns puple when hover over button
//     //when clicked on a multiple choice
//     //Then multiple choice array [] is compared with answer
//     //if multiplechoice array [] selection === answers
//     //then display text == "Correct!"
//     //else display text == "wrong"

// }

// function hideIntro(event) {
//     // event.stopPropagation();
//     event.currentTarget.setAttribute(
//       "style",
//       "display: none",
//     )
//   }
  
//   thisIntro.addEventListener("click", hideIntro));



//this function starts quiz
// function startQuiz() {
//When I start the quiz it hides intro section
//First question in questions var shows up
// call start timer function
// }

//This function should displays the questions and buttons
//only bring questions

//another function to compare if the answer is right or wrong
//Ask myself do I still have questions 
//Ask myself do i still have time
//end game

//A function to end the game

//A function to kepp the scores in a list data structure



  