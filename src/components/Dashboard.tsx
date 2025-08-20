import React from 'react';
import { 
  TrendingUp, 
  Clock, 
  Play, 
  Users, 
  DollarSign,
  ArrowUpRight,
  Calendar,
  Zap,
  Target,
  Eye,
  Brain,
  Lightbulb,
  AlertTriangle
} from 'lucide-react';
import MetricCard from './MetricCard';
import RecentActivity from './RecentActivity';
import ScheduledContent from './ScheduledContent';

const Dashboard: React.FC = () => {
  const metrics = [
    {
      title: 'Total Videos Created',
      value: '2,847',
      change: '+12%',
      trend: 'up',
      icon: Play,
      color: 'blue'
    },
    {
      title: 'Active Viewers',
      value: '486K',
      change: '+8.2%',
      trend: 'up',
      icon: Eye,
      color: 'green'
    },
    {
      title: 'Revenue (Monthly)',
      value: '$12,849',
      change: '+23%',
      trend: 'up',
      icon: DollarSign,
      color: 'purple'
    },
    {
      title: 'Engagement Rate',
      value: '7.8%',
      change: '+2.1%',
      trend: 'up',
      icon: Target,
      color: 'orange'
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
      type: 'compliance',
      title: 'Disclaimer Added',
      message: 'Financial advice content detected - auto-added disclaimers',
      action: 'Compliance ensured',
      priority: 'low'
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your content.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          {/* AI Insights */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-600" />
              AI Insights & Automation
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

          <RecentActivity />
        </div>

        {/* Scheduled Content */}
        <div>
          <ScheduledContent />
          
          {/* AI Recommendations */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
              AI Recommendations
            </h3>
            
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 text-sm">Optimal Posting Time</h4>
                <p className="text-xs text-green-700">Your audience is most active at 2-4 PM EST</p>
              </div>
              
              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 text-sm">Trending Topic</h4>
                <p className="text-xs text-blue-700">"AI productivity tools" is gaining traction</p>
              </div>
              
              <div className="p-3 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900 text-sm">Content Gap</h4>
                <p className="text-xs text-purple-700">Consider creating more short-form content</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-medium text-gray-900">Create Video</h4>
              <p className="text-sm text-gray-600">Start automated creation</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-medium text-gray-900">Schedule Campaign</h4>
              <p className="text-sm text-gray-600">Set up publishing schedule</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-medium text-gray-900">Analyze Trends</h4>
              <p className="text-sm text-gray-600">Discover trending topics</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;