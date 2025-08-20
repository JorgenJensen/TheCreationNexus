import React, { useState } from 'react';
import { Plus, Rss, Globe, TrendingUp, Settings, Trash2, Edit, CheckCircle, AlertCircle, Youtube, Search, FileText, Zap } from 'lucide-react';

const ContentSources: React.FC = () => {
  const [sources, setSources] = useState([
    {
      id: 1,
      name: 'TechCrunch',
      type: 'RSS',
      url: 'https://techcrunch.com/feed/',
      status: 'active',
      lastUpdate: '2 hours ago',
      articlesFound: 15
    },
    {
      id: 2,
      name: 'AI News',
      type: 'Web Scraper',
      url: 'https://artificialintelligence-news.com',
      status: 'active',
      lastUpdate: '1 hour ago',
      articlesFound: 8
    },
    {
      id: 3,
      name: 'YouTube Trending',
      type: 'Trend Monitor',
      url: 'Tech Category',
      status: 'error',
      lastUpdate: '6 hours ago',
      articlesFound: 0
    },
    {
      id: 4,
      name: 'Google News - AI',
      type: 'News Monitor',
      url: 'AI Technology',
      status: 'active',
      lastUpdate: '30 minutes ago',
      articlesFound: 12
    },
    {
      id: 5,
      name: 'Wikipedia Trending',
      type: 'Research Bot',
      url: 'Technology Topics',
      status: 'active',
      lastUpdate: '1 hour ago',
      articlesFound: 6
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Sources</h1>
          <p className="text-gray-600">Manage your content sources and trending topics</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add Source</span>
        </button>
      </div>

      {/* Sources Grid */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Rss className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">RSS Feeds</h3>
                <p className="text-sm text-blue-700">Auto-pull articles</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-green-900">YouTube Trends</h3>
                <p className="text-sm text-green-700">Monitor viral content</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-purple-900">Google News</h3>
                <p className="text-sm text-purple-700">Breaking news alerts</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-orange-900">Research Bot</h3>
                <p className="text-sm text-orange-700">Wikipedia & blogs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {sources.map((source) => (
          <div key={source.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  source.type === 'RSS' ? 'bg-orange-50' :
                  source.type === 'Web Scraper' ? 'bg-blue-50' :
                  source.type === 'News Monitor' ? 'bg-green-50' :
                  source.type === 'Research Bot' ? 'bg-purple-50' :
                  'bg-gray-50'
                }`}>
                  {source.type === 'RSS' ? <Rss className="w-5 h-5 text-orange-600" /> :
                   source.type === 'Web Scraper' ? <Globe className="w-5 h-5 text-blue-600" /> :
                   source.type === 'News Monitor' ? <Search className="w-5 h-5 text-green-600" /> :
                   source.type === 'Research Bot' ? <FileText className="w-5 h-5 text-purple-600" /> :
                   <TrendingUp className="w-5 h-5 text-gray-600" />}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{source.name}</h3>
                  <p className="text-sm text-gray-600">{source.type}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Edit className="w-4 h-4 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <div className={`flex items-center space-x-1 ${
                  source.status === 'active' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {source.status === 'active' ? 
                    <CheckCircle className="w-4 h-4" /> : 
                    <AlertCircle className="w-4 h-4" />
                  }
                  <span className="text-sm font-medium capitalize">{source.status}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last Update</span>
                <span className="text-sm text-gray-900">{source.lastUpdate}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Articles Found</span>
                <span className="text-sm font-medium text-gray-900">{source.articlesFound}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 truncate">{source.url}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Source Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Content Source</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Source Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>RSS Feed</option>
                  <option>Web Scraper</option>
                  <option>Google News Monitor</option>
                  <option>Wikipedia Research</option>
                  <option>YouTube Trend Monitor</option>
                  <option>Trend Monitor</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Source Name</label>
                <input 
                  type="text" 
                  placeholder="e.g., TechCrunch"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">URL</label>
                <input 
                  type="url" 
                  placeholder="https://example.com/feed"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button 
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-700 font-medium"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Add Source
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentSources;