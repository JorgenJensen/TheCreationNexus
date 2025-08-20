import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search, 
  Book, 
  Video, 
  MessageSquare,
  Lightbulb,
  Target,
  TrendingUp,
  Settings,
  Users,
  Zap,
  Play
} from 'lucide-react';

const AIHelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('getting-started');

  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: Play },
    { id: 'automation', name: 'Automation Setup', icon: Zap },
    { id: 'content-creation', name: 'Content Creation', icon: Video },
    { id: 'optimization', name: 'Optimization', icon: Target },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp },
    { id: 'team-management', name: 'Team Management', icon: Users },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: Settings }
  ];

  const helpContent = {
    'getting-started': [
      {
        title: 'Quick Start Guide: Create Your First Video in 5 Minutes',
        type: 'tutorial',
        description: 'Step-by-step walkthrough to get your first automated video published',
        content: 'Learn how to set up your account, connect platforms, and create your first video...',
        estimatedTime: '5 min'
      },
      {
        title: 'Understanding AutoPilot Mode',
        type: 'guide',
        description: 'How full automation works and what to expect',
        content: 'AutoPilot mode handles everything from content discovery to publishing...',
        estimatedTime: '3 min'
      },
      {
        title: 'Connecting Your Social Media Accounts',
        type: 'tutorial',
        description: 'Link YouTube, TikTok, Instagram, and other platforms',
        content: 'Follow these steps to securely connect your social media accounts...',
        estimatedTime: '7 min'
      }
    ],
    'automation': [
      {
        title: 'Setting Up Content Sources',
        type: 'tutorial',
        description: 'Configure RSS feeds, news sources, and trend monitoring',
        content: 'Add reliable content sources to fuel your automated video creation...',
        estimatedTime: '10 min'
      },
      {
        title: 'Customizing Automation Templates',
        type: 'guide',
        description: 'Create custom workflows for different content types',
        content: 'Build templates for daily shorts, weekly podcasts, and trending content...',
        estimatedTime: '8 min'
      },
      {
        title: 'Scheduling and Publishing Settings',
        type: 'tutorial',
        description: 'Optimize your posting schedule for maximum engagement',
        content: 'Learn how to set up smart scheduling that adapts to your audience...',
        estimatedTime: '6 min'
      }
    ],
    'content-creation': [
      {
        title: 'AI Script Generation Best Practices',
        type: 'guide',
        description: 'Get the most out of automated script writing',
        content: 'Tips for creating engaging, platform-optimized scripts automatically...',
        estimatedTime: '12 min'
      },
      {
        title: 'Voice and Video Customization',
        type: 'tutorial',
        description: 'Configure ElevenLabs voices and Pictory video settings',
        content: 'Personalize your content with the right voice, tone, and visual style...',
        estimatedTime: '15 min'
      },
      {
        title: 'Multi-Language Content Creation',
        type: 'guide',
        description: 'Expand globally with automated translations',
        content: 'Create content in multiple languages to reach a global audience...',
        estimatedTime: '9 min'
      }
    ],
    'optimization': [
      {
        title: 'Understanding Virality Predictions',
        type: 'guide',
        description: 'How AI analyzes and improves your content potential',
        content: 'Learn how the virality predictor works and how to act on its suggestions...',
        estimatedTime: '8 min'
      },
      {
        title: 'A/B Testing Your Content',
        type: 'tutorial',
        description: 'Test titles, thumbnails, and descriptions automatically',
        content: 'Set up automated A/B tests to continuously improve performance...',
        estimatedTime: '11 min'
      },
      {
        title: 'Platform-Specific Optimization',
        type: 'guide',
        description: 'Tailor content for YouTube, TikTok, Instagram, and more',
        content: 'Understand how content is automatically optimized for each platform...',
        estimatedTime: '13 min'
      }
    ]
  };

  const aiSuggestions = [
    {
      title: 'Boost Your Engagement by 40%',
      description: 'Add question hooks to your first 5 seconds',
      action: 'Enable Auto-Hook Generation',
      priority: 'high'
    },
    {
      title: 'Trending Topic Alert',
      description: 'AI productivity tools are gaining 300% more searches',
      action: 'Create Content on This Topic',
      priority: 'medium'
    },
    {
      title: 'Optimize Posting Schedule',
      description: 'Your audience is most active at 2-4 PM EST',
      action: 'Update Schedule Settings',
      priority: 'low'
    }
  ];

  const filteredContent = helpContent[selectedCategory as keyof typeof helpContent] || [];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Help Center</h1>
        <p className="text-gray-600">Get personalized guidance and tutorials powered by AI</p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative max-w-2xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ask me anything about video automation..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            
            <nav className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* AI Suggestions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
              AI Suggestions
            </h3>
            
            <div className="space-y-3">
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className={`p-3 rounded-lg border-l-4 ${
                  suggestion.priority === 'high' ? 'border-red-500 bg-red-50' :
                  suggestion.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                  'border-blue-500 bg-blue-50'
                }`}>
                  <h4 className="font-medium text-gray-900 text-sm mb-1">{suggestion.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">{suggestion.description}</p>
                  <button className="text-xs bg-white hover:bg-gray-50 text-gray-700 px-2 py-1 rounded border">
                    {suggestion.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="space-y-6">
            {filteredContent.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      item.type === 'tutorial' ? 'bg-blue-50' : 'bg-green-50'
                    }`}>
                      {item.type === 'tutorial' ? 
                        <Video className="w-5 h-5 text-blue-600" /> : 
                        <Book className="w-5 h-5 text-green-600" />
                      }
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === 'tutorial' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {item.type}
                        </span>
                        <span>⏱️ {item.estimatedTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">{item.content}</p>
                </div>
                
                <div className="flex space-x-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    {item.type === 'tutorial' ? 'Start Tutorial' : 'Read Guide'}
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm transition-colors">
                    Bookmark
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* AI Chat Assistant */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200 mt-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">AI Assistant</h3>
                <p className="text-sm text-gray-600">Get instant answers to your questions</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>You:</strong> How do I increase my video engagement rate?
              </p>
              <p className="text-sm text-gray-700">
                <strong>AI:</strong> Based on your current performance, I recommend: 1) Add question hooks in the first 5 seconds, 2) Use numbers in your titles (they perform 23% better for your audience), 3) Post during your peak hours (2-4 PM EST). Would you like me to automatically apply these optimizations?
              </p>
            </div>
            
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
                Ask
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHelpCenter;