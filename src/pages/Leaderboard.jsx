import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { TrophyIcon, ChartBarIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { leaderboard, userProfile } from '../data/dummyData';

const Leaderboard = () => {
  const [currentTab, setCurrentTab] = useState('global');

  const tabs = [
    { id: 'global', label: 'Global Leaderboard' },
    { id: 'weekly', label: 'This Week' },
    { id: 'friends', label: 'Friends' }
  ];

  // Find user's rank
  const userRank = leaderboard.findIndex(user => user.name === userProfile.name) + 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl shadow-2xl mb-8">
            <TrophyIcon className="w-12 h-12 text-white mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Leaderboard</h1>
              <p className="text-xl text-white/90">Compete with the best</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-1 shadow-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 rounded-2xl font-semibold mx-1 transition-all duration-200 ${
                  currentTab === tab.id
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white/50'
                }`}
                onClick={() => setCurrentTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top 10 Leaderboard */}
          <div className="lg:col-span-2">
            <Card className="p-8 h-fit">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <ChartBarIcon className="w-8 h-8 mr-3 text-orange-600" />
                Top 10 Players
              </h2>
              <div className="space-y-4">
                {leaderboard.slice(0, 10).map((user, index) => {
                  const isUser = user.name === userProfile.name;
                  return (
                    <div
                      key={index}
                      className={`flex items-center p-6 rounded-2xl transition-all duration-200 cursor-pointer group ${
                        isUser
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl'
                          : 'bg-white/50 hover:bg-white hover:shadow-xl border border-gray-100 group-hover:border-orange-200'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-6 ${
                        isUser ? 'bg-white/20' : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                      }`}>
                        #{user.rank}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold truncate">{user.name}</div>
                        <div className="text-sm opacity-75">{user.accuracy}% Accuracy</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{user.score.toLocaleString()}</div>
                        <div className="text-sm opacity-75">Points</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Your Rank */}
          <div>
            <Card className="p-8 h-fit sticky top-24">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-2xl">
                  <TrophyIcon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Rank</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  #{userRank}
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Total Score</span>
                  <span>{userProfile.stats.totalScore.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Accuracy</span>
                  <span>{userProfile.stats.accuracy}%</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Streak</span>
                  <span>{userProfile.stats.streak} days</span>
                </div>
              </div>

              <Button className="w-full mb-4">View Profile</Button>
              <Button variant="secondary" className="w-full">Share Rank</Button>
            </Card>

            {/* Tips Section */}
            <Card className="p-6 mt-8">
              <div className="flex items-start space-x-3">
                <SparklesIcon className="w-8 h-8 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Improve Your Rank</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Practice daily quizzes</li>
                    <li>• Focus on weak categories</li>
                    <li>• Join multiplayer battles</li>
                    <li>• Analyze your mistakes</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;