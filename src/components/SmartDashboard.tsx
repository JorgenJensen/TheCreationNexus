import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Settings, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  Eye,
  Heart,
  Share,
  DollarSign,
  Zap,
  Brain,
  Target,
  Globe,
  Calendar,
  Activity
} from 'lucide-react';

const SmartDashboard: React.FC = () => {
  const [automationActive, setAutomationActive] = useState(true);

  const automationStatus = {
    isActive: automationActive,
    nextVideo: '2:30 PM today',
    videosInQueue: 12,
    lastCreated: '45 minutes ago',
    successRate: '98.5%'
  };

  const recentVideos = [
    {
      title: 'AI Revolution: 5 Tools That Will Change Everything',
      platform: 'YouTube Shorts',
      status: 'published',
      views: '24.5K',
      engagement: '8.2%',
      revenue: '$45.20',
      publishedAt: '2 hours ago'
    },
    {
      title: 'Breaking: New AI Breakthrough Announced',
      platform: 'TikTok',
      status: 'processing',
      views: '0',
      engagement: '0%',
      revenue: '$0',
      publishedAt: 'Processing...'
    },
    {
      title: 'Top 3 Investment Strategies for 2024',
      platform: 'Instagram Reels',
      status: 'scheduled',
      views: '0',
      engagement: '0%',
      revenue: '$0',
      publishedAt: 'In 3 hours'
    }
  ];

  const aiInsights = [
    {
      type: 'trending',
      title: 'Hot Topic Detected',
      message: 'AI automation tools are trending +340% this week',
      action: 'Creating 3 videos on this topic',
      priority: 'high'
    },
    {
      type: 'optimization',
      title: 'Performance Boost',
      message: 'Videos with numbers in titles perform 23% better for your audience',
      action: 'Applied to next 5 videos',
      priority: 'medium'
    },
    {
      type: 'schedule',
      title: 'Optimal Timing',
      message: 'Your audience is most active at 2-4 PM EST',
      action: 'Schedule adjusted automatically',
      priority: 'low'
    }
  ];

  const metrics = [
    {
      label: 'Videos Created',
      value: '247',
      change: '+12 this week',
      trend: 'up',
      icon: Play,
      color: 'blue'
    },
    {
      label: 'Total Views',
      value: '2.4M',
      change: '+324K this week',
      trend: 'up',
      icon: Eye,
      color: 'green'
    },
    {
      label: 'Engagement Rate',
      value: '7.8%',
      change: '+1.2% this week',
      trend: 'up',
      icon: Heart,
      color: 'purple'
    },
    {
      label: 'Revenue',
      value: '$2,847',
      change: '+$456 this week',
      trend: 'up',
      icon: DollarSign,
      color: 'orange'
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header with Automation Control */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Smart Dashboard</h1>
          <p className="text-gray-600">Your AI is working 24/7 to grow your audience</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            automationActive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              automationActive ? 'bg-green-500' : 'bg-red-500'
            }`}></div>
            <span className="font-medium">
              {automationActive ? 'Automation Active' : 'Automation Paused'}
            </span>
          </div>
          
          <button
            onClick={() => setAutomationActive(!automationActive)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              automationActive
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {automationActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{automationActive ? 'Pause' : 'Resume'}</span>
          </button>
        </div>
      </div>

      {/* Automation Status */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border border-blue-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">AI Automation Status</h3>
              <p className="text-gray-600">Next video: {automationStatus.nextVideo}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">{automationStatus.videosInQueue}</p>
              <p className="text-sm text-gray-600">In Queue</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">{automationStatus.successRate}</p>
              <p className="text-sm text-gray-600">Success Rate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600">{automationStatus.lastCreated}</p>
              <p className="text-sm text-gray-600">Last Created</p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                metric.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                metric.color === 'green' ? 'bg-green-50 text-green-600' :
                metric.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                'bg-orange-50 text-orange-600'
              }`}>
                <metric.icon className="w-5 h-5" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
              <p className="text-xs text-green-600">{metric.change}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Insights */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-500" />
              AI Insights & Actions
            </h3>
            
            <div className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${
                  insight.priority === 'high' ? 'border-red-500 bg-red-50' :
                  insight.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                  'border-blue-500 bg-blue-50'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">{insight.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{insight.message}</p>
                      <p className="text-xs text-gray-500 italic">{insight.action}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      insight.priority === 'high' ? 'bg-red-100 text-red-800' :
                      insight.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {insight.priority}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Videos */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Videos</h3>
            
            <div className="space-y-4">
              {recentVideos.map((video, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">{video.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{video.platform}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        video.status === 'published' ? 'bg-green-100 text-green-800' :
                        video.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {video.status}
                      </span>
                      <span>{video.publishedAt}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-900">{video.views}</p>
                        <p className="text-gray-600">Views</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{video.engagement}</p>
                        <p className="text-gray-600">Engagement</p>
                      </div>
                      <div>
                        <p className="font-medium text-green-600">{video.revenue}</p>
                        <p className="text-gray-600">Revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <Target className="w-5 h-5 text-blue-600" />
                <span className="text-blue-900 font-medium">Add New Topic</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <Calendar className="w-5 h-5 text-green-600" />
                <span className="text-green-900 font-medium">Adjust Schedule</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-purple-600" />
                <span className="text-purple-900 font-medium">Automation Settings</span>
              </button>
            </div>
          </div>

          {/* System Health */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Health</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Content Sources</span>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">Active</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">AI Generation</span>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">Operational</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Publishing APIs</span>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">Connected</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Analytics Sync</span>
                <div className="flex items-center space-x-1">
                  <Activity className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-600">Syncing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Videos Created</span>
                <span className="text-sm font-medium text-gray-900">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avg. Views</span>
                <span className="text-sm font-medium text-gray-900">18.5K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Best Performer</span>
                <span className="text-sm font-medium text-green-600">45.2K views</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Revenue</span>
                <span className="text-sm font-medium text-green-600">$456.20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartDashboard;