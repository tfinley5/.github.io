$( function() {
    $( "#tabs" ).tabs();
} );

$( function() {
    $( "#accordion" ).accordion();
} );

//Array of questions with answers
const quiz = [
    {
      question: "What is the closing tag for the 'html' opening tag??",
      answers: {
        a: "<html>",
        b: "</html>",
        c: "<close>"
      },
      correctAnswer: "b"
    },
    {
      question: "What type of brackets create a tag?",
      answers: {
        a: "[]",
        b: "{}",
        c: "<>"
      },
      correctAnswer: "c"
    },
    {
      question: "Which language controls all the formatting of the page?",
      answers: {
        a: "HTML",
        b: "CSS",
        c: "JavaScript"
      },
      correctAnswer: "b"
    },
    {
      question: "Which is NOT a way a stylesheet can be used in html?",
      answers: {
        a: "external",
        b: "embedded",
        c: "outline"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following tags must be at the beginning of an html document?",
      answers: {
        a: "<!DOCTYPE html>",
        b: "<html>",
        c: "<start>"
      },
      correctAnswer: "a"
    },
    {
      question: "Where do the header, main, and footer tags belong in html?",
      answers: {
        a: "head",
        b: "body",
        c: "neither"
      },
      correctAnswer: "b"
    },
    {
      question: "Which tage is used to link an external CSS stylesheet?",
      answers: {
        a: "script",
        b: "style",
        c: "link"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tag is used for embedded CSS code?",
      answers: {
        a: "style",
        b: "script",
        c: "link"
      },
      correctAnswer: "a"
    },
    {
      question: "Which tag is used to link an external JavaScript file?",
      answers: {
        a: "style",
        b: "script",
        c: "link"
      },
      correctAnswer: "b"
    },
    {
      question: "The language that deals with all of the content and structure of the page is _____",
      answers: {
        a: "HTML",
        b: "CSS",
        c: "JavaScript"
      },
      correctAnswer: "a"
    },
    {
      question: "What is JQuery?",
      answers: {
        a: "An open source JavaScript library",
        b: "An open source HTML library",
        c: "An open source Java library"
      },
      correctAnswer: "a"
    },
    {
      question: "Which declares a function called 'add'",
      answers: {
        a: "add function() {}",
        b: "add() {}",
        c: "function add() {}"
      },
      correctAnswer: "c"
    },
    {
      question: "What is a variable that can be passed into a function?",
      answers: {
        a: "element",
        b: "parameter",
        c: "method"
      },
      correctAnswer: "b"
    },
    {
      question: "What tag can you use to create a hyperlink to another page?",
      answers: {
        a: "<link>",
        b: "<hyper>",
        c: "<a>"
      },
      correctAnswer: "c"
    }
];
  
//variables for current question and current score
let current = 0;
let score = 0;
  
//displays current question and answers
function displayQuiz() {
    //gets current question
    const quizQuestion = quiz[current];
  
    //gets html element for question
    const quizQuestionElement = document.getElementById("quiz-question");
  
    //sets html text to question
    quizQuestionElement.textContent = quizQuestion.question;
  
    //sets const to answers in html
    const answerAElement = document.getElementById("answer-a");
    const answerBElement = document.getElementById("answer-b");
    const answerCElement = document.getElementById("answer-c");
  
    //sets correct answers
    answerAElement.textContent = quizQuestion.answers.a;
    answerBElement.textContent = quizQuestion.answers.b;
    answerCElement.textContent = quizQuestion.answers.c;
}
  
//Checks to see if correct answer and updates score
function checkAnswer(userAnswer) {
    const correctAnswer = quiz[current].correctAnswer;

    if (userAnswer === correctAnswer) {

      score++;
    }
  
    current++;
  
    //If else to show final score or next question
    if (current >= quiz.length) {

      result.innerHTML = `You scored ${score} out of ${quiz.length}`
    } else {
      
      displayQuiz();
    }
}
  
//Display Quiz
displayQuiz();
  