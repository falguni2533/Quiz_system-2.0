import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Get data from PlayQuiz
  const {
    category = "General",
    difficulty = "Easy",
    timer = "10s",
  } = location.state || {};

  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which is not a CSS property?",
      options: ["color", "background", "font-style", "text-line"],
      answer: "text-line",
    },
    {
      question: "What is the correct HTML for a new line?",
      options: ["<br>", "<lb>", "<nl>", "<newLine>"],
      answer: "<br>",
    },
    {
      question: "How can you make a list that lists the items with numbers?",
      options: ["<list>", "<ol>", "<ul>", "<dl>"],
      answer: "<ol>",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  if (showResults) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Quiz Completed!</h1>
          <h2 className="text-2xl mb-4">
            Score: {score}/{questions.length}
          </h2>
          <p className="mb-6">
            {category} | {difficulty} | {timer}
          </p>
          <button
            onClick={handleBack}
            className="bg-blue-500 text-white px-6 py-3 rounded-xl"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full p-6 bg-white rounded-xl shadow-lg">

        <h2 className="text-xl font-bold mb-2">
          {category} | {difficulty}
        </h2>

        <h3 className="text-lg mb-4">
          Question {currentQuestion + 1} / {questions.length}
        </h3>

        <p className="text-lg mb-6">
          {questions[currentQuestion].question}
        </p>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`w-full p-3 rounded-lg border ${
                selectedAnswer === option
                  ? "bg-blue-200"
                  : "bg-gray-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedAnswer}
          className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg disabled:opacity-50"
        >
          {currentQuestion === questions.length - 1
            ? "Finish"
            : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;