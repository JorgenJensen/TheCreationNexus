import React, { useState } from 'react';
import { 
  Zap, 
  Play, 
  Calendar, 
  Settings, 
  Copy, 
  Edit, 
  Trash2,
  Plus,
  Clock,
  Target,
  TrendingUp,
  Mic,
  Video
} from 'lucide-react';

const AutomationTemplates: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const templates = [
    {
      id: 1,
      name: '3 Shorts a Day',
      description: 'Automated short-form content creation for TikTok, YouTube Shorts, and Instagram Reels',
      platforms: ['TikTok', 'YouTube Shorts', 'Instagram Reels'],
      frequency: 'Daily',
      videosPerDay: 3,
      duration: '30-60 seconds',
      status: 'active',
      performance: { views: '2.4M', engagement: '8.2%' }
    },
    {
      id: 2,
      name: 'Weekly Finance Podcast',
      description: 'Long-form financial education content with professional voiceover',
      platforms: ['YouTube', 'Spotify', 'Apple Podcasts'],
      frequency: 'Weekly',
      videosPerDay: 0.14,
      duration: '15-25 minutes',
      status: 'active',
      performance: { views: '486K', engagement: '12.4%' }
    },
    {
      id: 3,
      name: 'Trend-Only TikToks',
      description: 'React to trending topics with quick, engaging commentary',
      platforms: ['TikTok', 'Instagram Reels'],
      frequency: 'As trends emerge',
      videosPerDay: 2,
      duration: '15-30 seconds',
      status: 'paused',
      performance: { views: '1.8M', engagement: '15.7%' }
    },
    {
      id: 4,
      name: 'Daily Tech News',
      description: 'Comprehensive tech news roundup with multiple format variations',
      platforms: ['YouTube', 'LinkedIn', 'Twitter'],
      frequency: 'Daily',
      videosPerDay: 1,
      duration: '5-8 minutes',
      status: 'active',
      performance: { views: '892K', engagement: '6.8%' }
    }
  ];

  const quickSetups = [
    {
      name: 'Educational Series',
      description: 'Weekly educational content with consistent branding',
      icon: Target,
      color: 'blue'
    },
    {
      name: 'News Commentary',
      description: 'Daily news analysis and commentary',
      icon: TrendingUp,
      color: 'green'
    },
    {
      name: 'Product Reviews',
      description: 'Automated product review generation',
      icon: Video,
      color: 'purple'
    },
    {
      name: 'Podcast Highlights',
      description: 'Extract highlights from long-form content',
      icon: Mic,
      color: 'orange'
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Automation Templates</h1>
          <p className="text-gray-600">Pre-configured workflows for automated content creation</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Create Template</span>
        </button>
      </div>

      {/* Quick Setup Cards */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Setup</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickSetups.map((setup, index) => (
            <button
              key={index}
              className="p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                setup.color === 'blue' ? 'bg-blue-50' :
                setup.color === 'green' ? 'bg-green-50' :
                setup.color === 'purple' ? 'bg-purple-50' :
                'bg-orange-50'
              }`}>
                <setup.icon className={`w-5 h-5 ${
                  setup.color === 'blue' ? 'text-blue-600' :
                  setup.color === 'green' ? 'text-green-600' :
                  setup.color === 'purple' ? 'text-purple-600' :
                  'text-orange-600'
                }`} />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{setup.name}</h3>
              <p className="text-sm text-gray-600">{setup.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Active Templates */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Your Templates</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    template.status === 'active' ? 'bg-green-50' : 'bg-gray-50'
                  }`}>
                    <Zap className={`w-5 h-5 ${
                      template.status === 'active' ? 'text-green-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{template.name}</h3>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      template.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {template.status}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Copy className="w-4 h-4 text-gray-500" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit className="w-4 h-4 text-gray-500" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Settings className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{template.description}</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Platforms</span>
                  <div className="flex flex-wrap gap-1">
                    {template.platforms.map((platform, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Frequency</span>
                  <span className="text-sm text-gray-900">{template.frequency}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Duration</span>
                  <span className="text-sm text-gray-900">{template.duration}</span>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">{template.performance.views}</p>
                    <p className="text-xs text-gray-600">Total Views</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-green-600">{template.performance.engagement}</p>
                    <p className="text-xs text-gray-600">Engagement</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex space-x-2">
                {template.status === 'active' ? (
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm transition-colors">
                    Pause Template
                  </button>
                ) : (
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Activate Template
                  </button>
                )}
                <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Template Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Create Automation Template</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Template Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Daily Tech Updates"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>News & Updates</option>
                    <option>Educational</option>
                    <option>Entertainment</option>
                    <option>Product Reviews</option>
                    <option>Tutorials</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea 
                  rows={3}
                  placeholder="Describe what this template will create..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Publishing Frequency</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Daily</option>
                    <option>Every 12 hours</option>
                    <option>Every 8 hours</option>
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Video Duration</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>15-30 seconds</option>
                    <option>30-60 seconds</option>
                    <option>1-3 minutes</option>
                    <option>3-5 minutes</option>
                    <option>5-10 minutes</option>
                    <option>10+ minutes</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Platforms</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['YouTube', 'TikTok', 'Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((platform) => (
                    <div key={platform} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-gray-700">{platform}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Sources</label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">RSS Feeds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Trending Topics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Custom Keywords</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button 
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-700 font-medium"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowCreateModal(false)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Create Template
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutomationTemplates;