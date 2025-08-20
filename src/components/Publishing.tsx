import React, { useState } from 'react';
import { Calendar, Clock, Youtube, Instagram, Facebook, Twitter, Linkedin, Play } from 'lucide-react';

const Publishing: React.FC = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['youtube']);

  const platforms = [
    { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'red' },
    { id: 'youtube-shorts', name: 'YouTube Shorts', icon: Youtube, color: 'red' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'pink' },
    { id: 'instagram-reels', name: 'Instagram Reels', icon: Instagram, color: 'pink' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'blue' },
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'blue' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'blue' },
    { id: 'tiktok', name: 'TikTok', icon: Play, color: 'purple' },
    { id: 'spotify', name: 'Spotify', icon: Play, color: 'green' },
    { id: 'apple-podcasts', name: 'Apple Podcasts', icon: Play, color: 'gray' }
  ];

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Publishing & Scheduling</h1>
        <p className="text-gray-600">Manage your content distribution across platforms</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Platform Selection */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Platforms</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => togglePlatform(platform.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedPlatforms.includes(platform.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <platform.icon className={`w-8 h-8 ${
                      platform.color === 'red' ? 'text-red-600' :
                      platform.color === 'pink' ? 'text-pink-600' :
                      'text-blue-600'
                    }`} />
                    <span className="font-medium text-gray-900">{platform.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Scheduling */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Schedule Publishing</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Publish Date</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Publish Time</label>
                  <input 
                    type="time" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>One-time</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>UTC (GMT+0)</option>
                  <option>EST (GMT-5)</option>
                  <option>PST (GMT-8)</option>
                  <option>CET (GMT+1)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Content Optimization */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform-Specific Optimization</h3>
            
            {selectedPlatforms.map((platformId) => {
              const platform = platforms.find(p => p.id === platformId);
              if (!platform) return null;
              
              return (
                <div key={platformId} className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-4">
                    <platform.icon className="w-5 h-5 text-blue-600" />
                    <h4 className="font-medium text-gray-900">{platform.name}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input 
                        type="text" 
                        placeholder={`Optimized for ${platform.name}`}
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea 
                        rows={3}
                        placeholder={`Platform-specific description for ${platform.name}`}
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tags/Hashtags</label>
                      <input 
                        type="text" 
                        placeholder="#tech #ai #automation"
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Queue Status */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Publishing Queue</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-green-900">Ready to Publish</h4>
                  <p className="text-sm text-green-700">5 videos</p>
                </div>
                <div className="text-2xl font-bold text-green-600">5</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-yellow-900">In Progress</h4>
                  <p className="text-sm text-yellow-700">2 videos</p>
                </div>
                <div className="text-2xl font-bold text-yellow-600">2</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-blue-900">Scheduled</h4>
                  <p className="text-sm text-blue-700">12 videos</p>
                </div>
                <div className="text-2xl font-bold text-blue-600">12</div>
              </div>
            </div>
          </div>

          {/* Quick Templates */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Templates</h3>
            
            <div className="space-y-3">
              <button className="w-full p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-left transition-colors">
                <h4 className="font-medium text-blue-900">Daily Tech News</h4>
                <p className="text-sm text-blue-700">3 platforms • 2:00 PM</p>
              </button>
              
              <button className="w-full p-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-left transition-colors">
                <h4 className="font-medium text-purple-900">Weekly Roundup</h4>
                <p className="text-sm text-purple-700">5 platforms • Fridays</p>
              </button>
              
              <button className="w-full p-3 bg-green-50 hover:bg-green-100 rounded-lg text-left transition-colors">
                <h4 className="font-medium text-green-900">Trending Topics</h4>
                <p className="text-sm text-green-700">2 platforms • Real-time</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publishing;