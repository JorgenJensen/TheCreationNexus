import React from 'react';
import { User, Crown, Trophy, Target, TrendingUp } from 'lucide-react';

const UserProfile: React.FC = () => {
  const achievements = [
    { title: 'First Video', description: 'Created your first automated video', earned: true },
    { title: 'Viral Content', description: 'Reached 100K views on a single video', earned: true },
    { title: 'Multi-Platform', description: 'Published to 5+ platforms', earned: true },
    { title: 'Power User', description: 'Created 100+ videos', earned: false },
    { title: 'Revenue Milestone', description: 'Earned $1000+ in a month', earned: false },
    { title: 'Community Builder', description: 'Gained 10K+ subscribers', earned: false }
  ];

  const stats = [
    { label: 'Videos Created', value: '247', change: '+12 this month' },
    { label: 'Total Views', value: '2.4M', change: '+324K this month' },
    { label: 'Subscribers', value: '24.1K', change: '+2.1K this month' },
    { label: 'Revenue', value: '$2,847', change: '+$456 this month' }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">User Profile</h1>
        <p className="text-gray-600">Your VideoFlow journey and achievements</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
              <div className="flex items-center space-x-1 bg-purple-50 px-3 py-1 rounded-full">
                <Crown className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Pro Member</span>
              </div>
            </div>
            <p className="text-gray-600 mb-2">john@example.com</p>
            <p className="text-sm text-gray-500">Member since January 2024</p>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-gray-600">Account Status</p>
            <p className="text-lg font-semibold text-green-600">Active</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-xs text-green-600">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Achievements */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
            Achievements
          </h3>
          
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${
                achievement.earned 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className={`font-medium ${
                      achievement.earned ? 'text-green-900' : 'text-gray-600'
                    }`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${
                      achievement.earned ? 'text-green-700' : 'text-gray-500'
                    }`}>
                      {achievement.description}
                    </p>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    achievement.earned 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-300 text-gray-500'
                  }`}>
                    {achievement.earned ? '✓' : '○'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Summary */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
            Recent Activity
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Video Published</p>
                <p className="text-sm text-gray-600">AI Revolution in Healthcare • 2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Trophy className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Achievement Unlocked</p>
                <p className="text-sm text-gray-600">Multi-Platform Publisher • 1 day ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Crown className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Upgraded to Pro</p>
                <p className="text-sm text-gray-600">Subscribed to Pro Plan • 3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;