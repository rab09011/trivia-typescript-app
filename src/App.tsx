import React, { useState } from "react";
import { fetchTriviaQuestions } from "./API";

// Components
import QuestionCard from "./components/QuestionCard";

// Types
import { QuestionState, Difficulty, Quantity } from "./API";

// Styles
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  response: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState<Quantity>(Quantity.FIVE);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questionNum, setQuestionNum] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    setGameActive(true);

    const newQuestions = await fetchTriviaQuestions(
      quantity, difficulty
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setQuestionNum(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // User response
      const response = e.currentTarget.value;

      // Check response against correct answer
      const correct = questions[questionNum].correct_answer === response;

      // Update score
      if (correct) setScore((prev) => prev + 1);

      // Save response in the array of user answers
      const answerObject = {
        question: questions[questionNum].question,
        response,
        correct,
        correctAnswer: questions[questionNum].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move on to next if not on the last question
    setQuestionNum(questionNum + 1);
  };

  const endGame = () => {
    setGameOver(true);
  };

  const startOver = () => {
    window.location.reload();
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Trivia!</h1>

        {gameActive ? gameOver ? <p className='score'>Final Score: {score}</p> : <p className='score'>Score: {score}</p> : null}

        {loading ? <p>Loading Questions...</p> : null}

        {!loading && !gameOver && (
          <QuestionCard
            number={questionNum + 1}
            totalQuestions={quantity}
            question={questions[questionNum].question}
            answers={questions[questionNum].answers}
            userAnswer={userAnswers ? userAnswers[questionNum] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameOver && !loading && userAnswers.length === questionNum + 1 && questionNum !== quantity - 1 && (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        )}

        {!gameOver && !loading && questionNum === quantity - 1 && (<button className='end' onClick={endGame}>Finish</button>)}

        {!gameActive ? (
          <div>
            <div className="settings">
              <label>Choose number of questions and difficulty:</label>
              <br />
              <select name="quantity" onChange={e => setQuantity(parseInt(e.target.value) as Quantity)
              }>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
              <select name="difficulty" onChange={e => setDifficulty(e.target.value as Difficulty)}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <button className='start' onClick={startTrivia}>
              Start
            </button>
          </div>
        ) : <button className='restart' onClick={startOver}>Start Over</button>}
      </Wrapper>
    </>
  );
};

export default App;
