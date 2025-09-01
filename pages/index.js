// pages/index.js
import { useState } from "react";
import { addStyles, EditableMathField } from "react-mathquill";
import "katex/dist/katex.min.css";

addStyles();

export default function Home() {
  const [answer, setAnswer] = useState("");
  const correctAnswer = "5"; // limit value of (x+3) as x->2

  const checkAnswer = () => {
    if (answer.replace(/\s/g, "") === correctAnswer) {
      alert("✅ Correct! The limit is 5.");
    } else {
      alert("❌ Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">
          AP Calculus BC Practice
        </h1>
        <p className="text-lg mb-6 text-center">
          Find the limit value of <span className="font-mono">(x + 3)</span> as {" "}
          <span className="font-mono">x → 2</span>
        </p>
        <div className="border rounded-xl p-4 mb-4 bg-gray-50">
          <EditableMathField
            latex={answer}
            onChange={(mathField) => {
              setAnswer(mathField.latex());
            }}
            className="text-xl"
          />
        </div>
        <button
          onClick={checkAnswer}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl"
        >
          Check Answer
        </button>
      </div>
    </div>
  );
}

// package.json eklemelerinde şunlar olmalı:
// "react-mathquill": "^0.4.2",
// "katex": "^0.16.9",
// TailwindCSS yapılandırması için official nextjs-tailwind starter kullanılabilir.
