(function() {
  const questions = [
    {
      id: 1,
      text: 'Question 1',
      answerOptions: ['Answer1', 'Answer2', 'Answer3'],
      correctAnswer: 'Answer 2',
      imgUrl: ''
    },
    {
      id: 2,
      text: 'Question 2',
      answerOptions: ['Answer1', 'Answer2', 'Answer3'],
      correctAnswer: 'Answer 3',
      imgUrl: ''
    },
    {
      id: 3,
      text: 'Question 3',
      answerOptions: ['Answer1', 'Answer2', 'Answer3'],
      correctAnswer: 'Answer 1',
      imgUrl: ''
    }
  ];

  const quiz = document.getElementById('quiz-content');

  if (quiz != null) {
    let selectedQuestionIndex = 0;
    let totalScore = 0;
    const questionCount = questions.length;

    questions.forEach((question, index) => {
      const questionElement = document.createElement('div');
      questionElement.className =
        selectedQuestionIndex === index
          ? 'quiz-question active'
          : 'quiz-question';
      questionElement.innerHTML = `<p>${
        question.text
      }</p><div class="quiz-answers"><input type="radio" id="answer1" name="question" value="answer1"
      checked>
      <label for="answer1">${question.answerOptions[0]}</label>
      <input type="radio" id="answer2" name="question" value="answer2"
      checked>
      <label for="answer1">${question.answerOptions[1]}</label>
      <input type="radio" id="answer3" name="question" value="answer3"
      checked>
      <label for="answer1">${question.answerOptions[2]}</label></div> `;
      quiz.appendChild(questionElement);
    });

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', function() {
      selectedQuestionIndex - 1 >= 0
        ? (selectedQuestionIndex -= 1)
        : (selectedQuestionIndex = questionCount - 1);
      document.getElementsByClassName('active')[0].className = 'quiz-question';
      document.getElementsByClassName('quiz-question')[
        selectedQuestionIndex
      ].className = 'quiz-question active';
    });

    nextButton.addEventListener('click', function() {
      selectedQuestionIndex + 1 < questionCount
        ? (selectedQuestionIndex += 1)
        : (selectedQuestionIndex = 0);

      document.getElementsByClassName('active')[0].className = 'quiz-question';
      document.getElementsByClassName('quiz-question')[
        selectedQuestionIndex
      ].className = 'quiz-question active';
    });
  }
})();
