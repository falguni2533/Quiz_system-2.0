export const userProfile = {
  name: "Alex Johnson",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  bio: "Quiz Master | 95% Accuracy",
  stats: {
    totalQuestions: 1247,
    accuracy: 95,
    streak: 12,
    totalScore: 8560
  }
};

export const leaderboard = [
  { rank: 1, name: "Sarah Wilson", score: 9850, accuracy: 97 },
  { rank: 2, name: "Mike Chen", score: 9420, accuracy: 94 },
  { rank: 3, name: "Alex Johnson", score: 8560, accuracy: 95 },
  { rank: 4, name: "Emma Davis", score: 8230, accuracy: 92 },
  { rank: 5, name: "John Smith", score: 7890, accuracy: 91 },
  { rank: 6, name: "Lisa Brown", score: 7450, accuracy: 89 },
  { rank: 7, name: "David Kim", score: 7120, accuracy: 88 },
  { rank: 8, name: "Anna Taylor", score: 6890, accuracy: 87 },
  { rank: 9, name: "Robert Lee", score: 6540, accuracy: 86 },
  { rank: 10, name: "Maria Garcia", score: 6230, accuracy: 85 }
];

export const categories = [
  { id: 1, name: "DSA", icon: "💻", color: "from-blue-500 to-indigo-600" },
  { id: 2, name: "Aptitude", icon: "🧮", color: "from-green-500 to-emerald-600" },
  { id: 3, name: "General Knowledge", icon: "🌍", color: "from-purple-500 to-violet-600" },
  { id: 4, name: "Programming", icon: "⚡", color: "from-orange-500 to-red-600" },
  { id: 5, name: "Mathematics", icon: "📐", color: "from-pink-500 to-rose-600" }
];

export const recentActivity = [
  { id: 1, title: "DSA Arrays Quiz", score: "45/50", time: "2 hours ago", category: "DSA" },
  { id: 2, title: "Aptitude Test", score: "38/40", time: "1 day ago", category: "Aptitude" },
  { id: 3, title: "GK Challenge", score: "28/30", time: "3 days ago", category: "GK" }
];

export const questions = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
    correct: 1,
    category: "DSA"
  },
  {
    id: 2,
    question: "Which of these is not a programming paradigm?",
    options: ["Procedural", "Functional", "Object-Oriented", "Mathematical"],
    correct: 3,
    category: "Programming"
  }
];