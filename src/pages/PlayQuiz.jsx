import Card from '../components/Card';
import Button from '../components/Button';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const PlayQuiz = () => {
  const categories = ['All Categories', 'DSA', 'Aptitude', 'GK', 'Programming', 'Mathematics'];
  const difficulties = ['Easy', 'Medium', 'Hard'];
  const timers = ['10s', '20s', '30s'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
          Start a New Quiz
        </h1>

        <Card className="p-12">
          <div className="space-y-8">

            {/* Category Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Choose Category
              </label>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {categories.slice(1).map((category) => (
                  <div
                    key={category}
                    className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all duration-200 hover:shadow-md"
                  >
                    <span className="font-medium text-gray-900">
                      {category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Difficulty
              </label>

              <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-200">
                {difficulties.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            {/* Timer */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Timer
              </label>

              <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-200">
                {timers.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* Start Button */}
            <Button className="w-full py-4 text-lg">
              Start Quiz
            </Button>

          </div>
        </Card>
      </div>
    </div>
  );
};

export default PlayQuiz;