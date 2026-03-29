import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { UsersIcon, PlusIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const Multiplayer = () => {
  const [roomCode, setRoomCode] = useState('');
  const [showWaitingRoom, setShowWaitingRoom] = useState(false);

  const players = [
    { name: 'Sarah Wilson', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face', ready: true },
    { name: 'Mike Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face', ready: false },
    { name: 'Emma Davis', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face', ready: true },
  ];

  const handleCreateRoom = () => {
    setShowWaitingRoom(true);
  };

  const handleJoinRoom = () => {
    if (roomCode.trim()) {
      setShowWaitingRoom(true);
    }
  };

  if (showWaitingRoom) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-12 text-center">
            <div className="mb-12">
              <div className="w-32 h-32 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl mx-auto flex items-center justify-center mb-8 shadow-2xl">
                <UsersIcon className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
                Waiting Room
              </h1>
              <p className="text-xl text-gray-600 mb-8">Room Code: <span className="font-mono font-bold text-2xl text-emerald-600">ABC123</span></p>
            </div>

            <div className="space-y-4 mb-12">
              {players.map((player, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center space-x-4">
                    <img src={player.avatar} alt={player.name} className="w-12 h-12 rounded-full shadow-lg" />
                    <div>
                      <div className="font-semibold text-gray-900">{player.name}</div>
                      <div className="text-sm text-gray-500">Player {index + 1}</div>
                    </div>
                  </div>
                  <div className={`px-4 py-1 rounded-full text-sm font-medium ${
                    player.ready 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {player.ready ? 'Ready' : 'Waiting...'}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <Button className="w-full" size="lg">Start Game</Button>
              <Button 
                variant="secondary" 
                className="w-full" 
                onClick={() => setShowWaitingRoom(false)}
              >
                Leave Room
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl shadow-2xl mb-8">
            <UsersIcon className="w-12 h-12 text-white mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Multiplayer</h1>
              <p className="text-xl text-white/90">Challenge your friends in real-time</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Create Room */}
          <Card className="p-12 group hover:scale-[1.02] transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-2xl group-hover:rotate-6 transition-transform duration-300">
                <PlusIcon className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
                Create Room
              </h2>
              <p className="text-xl text-gray-600">Start a new multiplayer game</p>
            </div>
            <Button 
              className="w-full text-xl py-8" 
              size="lg"
              onClick={handleCreateRoom}
            >
              Create Room Now
            </Button>
          </Card>

          {/* Join Room */}
          <Card className="p-12">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-2xl">
                <ArrowRightIcon className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Join Room
              </h2>
              <p className="text-xl text-gray-600">Enter room code to join</p>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                  placeholder="Enter Room Code (e.g. ABC123)"
                  className="w-full p-6 text-2xl font-mono tracking-widest text-center border-2 border-gray-200 rounded-3xl focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-200 shadow-xl"
                  maxLength={6}
                />
              </div>
              <Button 
                className="w-full text-xl py-8" 
                size="lg"
                onClick={handleJoinRoom}
                disabled={!roomCode.trim()}
              >
                Join Room
              </Button>
            </div>
          </Card>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-2xl mx-auto flex items-center justify-center mb-6">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time</h3>
            <p className="text-gray-600">Play with friends instantly</p>
          </Card>
          <Card className="p-8 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl mx-auto flex items-center justify-center mb-6">
              <span className="text-3xl">👥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Up to 4 Players</h3>
            <p className="text-gray-600">Compete with multiple opponents</p>
          </Card>
          <Card className="p-8 text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-2xl mx-auto flex items-center justify-center mb-6">
              <span className="text-3xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Live Leaderboard</h3>
            <p className="text-gray-600">See rankings update in real-time</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Multiplayer;