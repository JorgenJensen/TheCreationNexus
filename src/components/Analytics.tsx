import React, { useState } from 'react';
import { TrendingUp, Eye, Heart, Share, DollarSign, Users } from 'lucide-react';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const performanceData = [
    { platform: 'YouTube', views: '2.4M', engagement: '4.8%', revenue: '$1,249', growth: '+15%' },
    { platform: 'YouTube Shorts', views: '3.1M', engagement: '8.2%', revenue: '$892', growth: '+34%' },
    { platform: 'TikTok', views: '1.8M', engagement: '12.3%', revenue: '$628', growth: '+28%' },
    { platform: 'Instagram', views: '947K', engagement: '6.2%', revenue: '$445', growth: '+8%' },
    { platform: 'Instagram Reels', views: '1.2M', engagement: '9.1%', revenue: '$567', growth: '+22%' },
    { platform: 'Facebook', views: '634K', engagement: '3.1%', revenue: '$287', growth: '+12%' }
  ];

  const topVideos = [
    { title: 'AI Revolution in 2024', views: '486K', engagement: '8.4%', platform: 'YouTube' },
    { title: 'Quick AI Hack', views: '892K', engagement: '15.2%', platform: 'YouTube Shorts' },
    { title: 'Quick Python Tips', views: '324K', engagement: '12.1%', platform: 'TikTok' },
    { title: 'Web Dev Trends', views: '198K', engagement: '5.7%', platform: 'Instagram' },
    { title: 'Tech News Daily', views: '156K', engagement: '4.2%', platform: 'Facebook' },
    { title: 'AI Productivity Boost', views: '445K', engagement: '11.8%', platform: 'Instagram Reels' }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
          <p className="text-gray-600">Track your content performance across platforms</p>
        </div>
        <div className="flex space-x-2">
          {['7d', '30d', '90d', '1y'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                timeRange === range
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Views</p>
              <p className="text-2xl font-bold text-gray-900">5.8M</p>
              <p className="text-sm text-green-600">+18.2%</p>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Engagement</p>
              <p className="text-2xl font-bold text-gray-900">7.2%</p>
              <p className="text-sm text-green-600">+2.1%</p>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$2,609</p>
              <p className="text-sm text-green-600">+15.8%</p>
            </div>
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Subscribers</p>
              <p className="text-2xl font-bold text-gray-900">24.1K</p>
              <p className="text-sm text-green-600">+8.4%</p>
            </div>
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Platform Performance */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Platform Performance</h3>
            
            <div className="space-y-4">
              {performanceData.map((platform, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Share className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{platform.platform}</h4>
                      <p className="text-sm text-gray-600">{platform.views} views</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-sm text-gray-600">Engagement</p>
                        <p className="font-medium text-gray-900">{platform.engagement}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Revenue</p>
                        <p className="font-medium text-gray-900">{platform.revenue}</p>
                      </div>
                      <div className="text-green-600 font-medium">
                        {platform.growth}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Videos */}
        <div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Videos</h3>
            
            <div className="space-y-4">
              {topVideos.map((video, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">{video.title}</h4>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{video.views} views</span>
                    <span>{video.engagement}</span>
                  </div>
                  <p className="text-xs text-blue-600 mt-1">{video.platform}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;