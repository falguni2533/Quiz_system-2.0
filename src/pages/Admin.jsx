import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Admin = () => {
  const [questions, setQuestions] = useState([
    "What is React?",
    "What is JavaScript?",
    "Explain useState hook"
  ]);

  const [newQuestion, setNewQuestion] = useState("");

  const user = {
    name: "Alex Johnson",
    accuracy: 95,
    totalQuizzes: 120,
    points: 120,
    streak: 15,
    played: 50
  };

  const leaderboard = [
    { name: "Alex", score: 950 },
    { name: "John", score: 900 },
    { name: "Emma", score: 870 }
  ];

  const progressData = [
    { name: "Correct", value: user.accuracy },
    { name: "Wrong", value: 100 - user.accuracy }
  ];

  const COLORS = ["#4ade80", "#f87171"];

  const addQuestion = () => {
    if (newQuestion.trim() !== "") {
      setQuestions([...questions, newQuestion]);
      setNewQuestion("");
    }
  };

  const deleteQuestion = (index) => {
    const updated = questions.filter((_, i) => i !== index);
    setQuestions(updated);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">

      {/* 🔥 PREMIUM USER INFO CARD */}
      <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-r from-[#0f172a] via-[#1e1b4b] to-[#312e81] border border-purple-500/30 shadow-2xl">
        <div className="flex justify-between items-center flex-wrap gap-4">

          {/* LEFT */}
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              {user.name[0]}
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-white">{user.name}</h2>

              <div className="flex gap-3 mt-2 flex-wrap">
                <span className="bg-white/10 text-purple-300 px-3 py-1 rounded-full text-sm">
                  💎 {user.points} pts
                </span>
                <span className="bg-white/10 text-yellow-300 px-3 py-1 rounded-full text-sm">
                  ⚡ {user.streak} streak
                </span>
                <span className="bg-white/10 text-blue-300 px-3 py-1 rounded-full text-sm">
                  🎮 {user.played} played
                </span>
                <span className="bg-white/10 text-green-300 px-3 py-1 rounded-full text-sm">
                  🎯 {user.accuracy}% accuracy
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <button className="border border-purple-400 text-purple-300 px-4 py-2 rounded-lg hover:bg-purple-500/20 transition">
            ✏️ Edit Profile
          </button>

        </div>
      </div>

      {/* 📊 PIE CHART */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Progress</h2>
        <div className="flex justify-center">
          <PieChart width={300} height={300}>
            <Pie
              data={progressData}
              dataKey="value"
              outerRadius={100}
            >
              {progressData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

      {/* 🏆 LEADERBOARD */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
        {leaderboard.map((user, index) => (
          <div key={index} className="flex justify-between py-2 border-b">
            <span>{user.name}</span>
            <span>{user.score}</span>
          </div>
        ))}
      </div>

      {/* ❓ QUESTIONS MANAGEMENT */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Manage Questions</h2>

        {/* ADD QUESTION */}
        <div className="flex gap-2 mb-4">
          <input
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Add new question"
            className="border p-2 rounded w-full"
          />
          <button
            onClick={addQuestion}
            className="bg-blue-500 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        {/* LIST */}
        {questions.map((q, index) => (
          <div key={index} className="flex justify-between py-2 border-b">
            <span>{q}</span>
            <button
              onClick={() => deleteQuestion(index)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Admin;