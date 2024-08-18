//creates a quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
      question: "Ben is currently:",
      answers: {
        a: "Completing a PhD with James Cook University",
        b: "Eating a salad",
        c: "Completing a PhD with University of Southern Queensland",
        d: "Wearing a hat"
      },
      correctAnswer: "a"
    },
    {
      question: "Ben's career background is in",
      answers: {
        a: "Trees",
        b: "Business consulting",
        c: "Career development",
        d: "Radio"
      },
      correctAnswer: "c"
    },
    {
      question: "Ben's ability to code is",
      answers: {
        a: "Legendary",
        b: "Exceptional",
        c: "Remarkably average",
        d: "Green"      
        },
      correctAnswer: "c"
    },
    {
      question: "Ben is super passionate about:",
      answers: {
        a: "People",
        b: "Innovation",
        c: "Employment",
        d: "All of the above and more!"
      },
      correctAnswer: "d"
    }
  ];

  function buildQuiz(){
    function buildQuiz(){

        // variable to store the HTML output
        
        const output = [];
        for(i=0; i<quizQuestions.length; i++){
        
        // store list of answer choices
        
        const answers = [];
        
        // for each available answer to this question add an HTML radio button
        
        for(letter in quizQuestions[i].answers)
        {
        answers.push(
        '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        + letter + ': '
        + quizQuestions[i].answers[letter]
        + '</label>'
        );
        }
        
        // add this question and its answers to the output
        
        output.push(
        '<div class="question">' + quizQuestions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
        );
        }
        
        // combine our output list into one string of HTML and put it on the page
        
        quizContainer.innerHTML = output.join('');
        }
    }
    function showResults(){
    }