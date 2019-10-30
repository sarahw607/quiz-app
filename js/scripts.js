(function() {
  const questions = [
    {
      id: 1,
      text: 'Question 1',
      answerOptions: ['Answer1', 'Answer2', 'Answer3'],
      correctAnswer: 'Answer 2'
    },
    {
      id: 2,
      text: 'Question 2',
      answerOptions: ['Answer1', 'Answer2', 'Answer3'],
      correctAnswer: 'Answer 3'
    },
    {
      id: 3,
      text: 'Question 3',
      answerOptions: ['Answer1', 'Answer2', 'Answer3'],
      correctAnswer: 'Answer 1'
    }
  ];

  const questionMarkup = ``;

  {
    /* <input type="radio" id="answer1" name="question" value="answer1"
checked>
<label for="answer1">${question[answer1]}</label>
<input type="radio" id="answer2" name="question" value="answer2"
checked>
<label for="answer1">{{answer2}}</label>
<input type="radio" id="answer3" name="question" value="answer3"
checked>
<label for="answer1">{{answer3}}</label> */
  }

  const quiz = document.getElementById('quiz-content');
  const quizQuestions = document.getElementsByClassName('quiz-questions');
  console.log(quiz);
  console.log(quizQuestions);

  if (quiz != null && quizQuestions) {
    selectedQuestionIndex = 0;
    totalScore = 0;
    questionCount = questions.length;

    questions.forEach(question =>
      quizQuestions.appendChild(
        document.createElement(`<div class="quiz-question">
      <p>${question.text}</p>
    </div>`)
      )
    );
  }
})();
