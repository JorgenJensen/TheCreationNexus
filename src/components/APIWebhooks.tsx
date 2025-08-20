import React, { useState } from 'react';
import { 
  Code, 
  Webhook, 
  Key, 
  Copy, 
  Eye, 
  EyeOff, 
  Plus,
  Settings,
  Activity,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';

const APIWebhooks: React.FC = () => {
  const [activeTab, setActiveTab] = useState('api');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  const tabs = [
    { id: 'api', label: 'API Keys', icon: Key },
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },
    { id: 'docs', label: 'Documentation', icon: Code }
  ];

  const apiKeys = [
    {
      id: 1,
      name: 'Production API Key',
      key: 'vf_prod_1234567890abcdef',
      created: '2024-01-15',
      lastUsed: '2 hours ago',
      status: 'active',
      permissions: ['read', 'write', 'delete']
    },
    {
      id: 2,
      name: 'Development API Key',
      key: 'vf_dev_abcdef1234567890',
      created: '2024-02-01',
      lastUsed: '1 day ago',
      status: 'active',
      permissions: ['read', 'write']
    },
    {
      id: 3,
      name: 'Analytics Only',
      key: 'vf_analytics_9876543210fedcba',
      created: '2024-02-15',
      lastUsed: '1 week ago',
      status: 'inactive',
      permissions: ['read']
    }
  ];

  const webhooks = [
    {
      id: 1,
      name: 'Video Published',
      url: 'https://api.yourapp.com/webhooks/video-published',
      events: ['video.published', 'video.failed'],
      status: 'active',
      lastTriggered: '2 hours ago',
      successRate: '99.2%'
    },
    {
      id: 2,
      name: 'Analytics Update',
      url: 'https://analytics.yourapp.com/webhook',
      events: ['analytics.daily', 'analytics.weekly'],
      status: 'active',
      lastTriggered: '1 day ago',
      successRate: '100%'
    },
    {
      id: 3,
      name: 'Error Notifications',
      url: 'https://alerts.yourapp.com/errors',
      events: ['error.critical', 'error.warning'],
      status: 'paused',
      lastTriggered: '3 days ago',
      successRate: '95.8%'
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">API & Webhooks</h1>
        <p className="text-gray-600">Integrate VideoFlow with your applications and services</p>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'api' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">API Keys</h3>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Key</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {apiKeys.map((apiKey) => (
                  <div key={apiKey.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-medium text-gray-900">{apiKey.name}</h4>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          apiKey.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {apiKey.status}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Settings className="w-4 h-4 text-gray-500" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Copy className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <code className="flex-1 bg-gray-50 px-3 py-2 rounded text-sm font-mono">
                        {showApiKey ? apiKey.key : '••••••••••••••••••••••••••••••••'}
                      </code>
                      <button
                        onClick={() => setShowApiKey(!showApiKey)}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-4">
                        <span>Created: {apiKey.created}</span>
                        <span>Last used: {apiKey.lastUsed}</span>
                      </div>
                      <div className="flex space-x-1">
                        {apiKey.permissions.map((permission, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                            {permission}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">API Usage</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Requests Today</span>
                  <span className="text-sm font-medium text-gray-900">2,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Rate Limit</span>
                  <span className="text-sm font-medium text-gray-900">10,000/hour</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Success Rate</span>
                  <span className="text-sm font-medium text-green-600">99.8%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Start</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">Create Video</h4>
                  <code className="text-xs text-gray-600">POST /api/v1/videos</code>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">Get Analytics</h4>
                  <code className="text-xs text-gray-600">GET /api/v1/analytics</code>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">List Videos</h4>
                  <code className="text-xs text-gray-600">GET /api/v1/videos</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'webhooks' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Webhooks</h3>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Webhook</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {webhooks.map((webhook) => (
                  <div key={webhook.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-medium text-gray-900">{webhook.name}</h4>
                        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                          webhook.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {webhook.status === 'active' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                          <span>{webhook.status}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Activity className="w-4 h-4 text-gray-500" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Settings className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <code className="bg-gray-50 px-3 py-2 rounded text-sm font-mono block">
                        {webhook.url}
                      </code>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-4">
                        <span>Last triggered: {webhook.lastTriggered}</span>
                        <span>Success rate: {webhook.successRate}</span>
                      </div>
                      <div className="flex space-x-1">
                        {webhook.events.map((event, index) => (
                          <span key={index} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">
                            {event}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Webhook Events</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">video.published</span>
                  <span className="text-green-600">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">video.failed</span>
                  <span className="text-green-600">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">analytics.daily</span>
                  <span className="text-green-600">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">error.critical</span>
                  <span className="text-gray-400">Paused</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <div className="text-sm">
                    <p className="text-gray-900">Video published webhook</p>
                    <p className="text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <div className="text-sm">
                    <p className="text-gray-900">Analytics update sent</p>
                    <p className="text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <XCircle className="w-4 h-4 text-red-600" />
                  <div className="text-sm">
                    <p className="text-gray-900">Webhook delivery failed</p>
                    <p className="text-gray-500">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'docs' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">API Documentation</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Authentication</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <code className="text-sm">
                  curl -H "Authorization: Bearer YOUR_API_KEY" \<br/>
                  &nbsp;&nbsp;https://api.videoflow.com/v1/videos
                </code>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Create Video</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <code className="text-sm">
                  POST /api/v1/videos<br/>
                  Content-Type: application/json<br/><br/>
                  {`{
  "title": "My Video Title",
  "script": "Video script content...",
  "platforms": ["youtube", "tiktok"],
  "schedule": "2024-03-15T14:00:00Z"
}`}
                </code>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Get Video Status</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <code className="text-sm">
                  GET /api/v1/videos/VIDEO_ID<br/><br/>
                  Response:<br/>
                  {`{
  "id": "video_123",
  "status": "published",
  "platforms": {
    "youtube": "published",
    "tiktok": "processing"
  }
}`}
                </code>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {activeTab === 'api' ? 'Create API Key' : 'Add Webhook'}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder={activeTab === 'api' ? 'Production API Key' : 'Video Published Webhook'}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {activeTab === 'webhooks' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">URL</label>
                  <input 
                    type="url" 
                    placeholder="https://your-app.com/webhook"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {activeTab === 'api' ? 'Permissions' : 'Events'}
                </label>
                <div className="space-y-2">
                  {activeTab === 'api' ? (
                    <>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-700">Read</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-700">Write</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-700">Delete</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-700">video.published</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-700">video.failed</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-700">analytics.daily</span>
                      </div>
                    </>
                  )}
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
                {activeTab === 'api' ? 'Create Key' : 'Add Webhook'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default APIWebhooks;