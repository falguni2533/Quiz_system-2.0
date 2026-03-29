import { userProfile, leaderboard, categories, recentActivity } from '../data/dummyData';
import StatCard from '../components/StatCard';
import Card from '../components/Card';
import Button from '../components/Button';
import { TrophyIcon, ChartBarIcon, FireIcon, StarIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: User Profile Card */}
        <Card className="max-w-2xl mx-auto mb-12 p-8 text-center">
          <img
            src={userProfile.avatar}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full shadow-xl mb-6 border-4 border-white"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{userProfile.name}</h1>
          <p className="text-xl text-gray-600 mb-8">{userProfile.bio}</p>
          <div className="flex justify-center space-x-6">
            <Button size="lg">Play Solo Quiz</Button>
            <Button variant="secondary" size="lg">Multiplayer</Button>
          </div>
        </Card>

        {/* Section 2: User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Questions Solved"
            value={userProfile.stats.totalQuestions.toLocaleString()}
            icon="📚"
            color="blue"
          />
          <StatCard
            title="Accuracy"
            value={`${userProfile.stats.accuracy}%`}
            icon="🎯"
            color="green"
          />
          <StatCard
            title="Current Streak"
            value={`${userProfile.stats.streak} days`}
            icon={<FireIcon className="w-8 h-8" />}
            color="orange"
          />
          <StatCard
            title="Total Score"
            value={userProfile.stats.totalScore.toLocaleString()}
            icon={<TrophyIcon className="w-8 h-8" />}
            color="purple"
          />
        </div>

        {/* Section 3: Leaderboard Preview */}
        <Card className="mb-12 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ChartBarIcon className="w-8 h-8 mr-3 text-blue-600" />
            Leaderboard Top 5
          </h2>
          <div className="space-y-3">
            {leaderboard.slice(0, 5).map((user, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  #{user.rank}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{user.name}</div>
                  <div className="text-sm text-gray-600">{user.accuracy}% Accuracy</div>
                </div>
                <div className="font-bold text-2xl text-gray-900">
                  {user.score.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Section 4: Quick Start Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Start</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="p-8 text-center cursor-pointer group">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl shadow-xl group-hover:scale-110 transition-transform duration-200`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{category.name}</h3>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 5: Recent Activity */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all duration-200">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md mr-6">
                  <span className="text-2xl">📝</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{activity.title}</div>
                  <div className="text-sm text-gray-600">{activity.score} • {activity.time}</div>
                </div>
                <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {activity.category}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;