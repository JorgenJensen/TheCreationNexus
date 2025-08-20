import React, { useState } from 'react';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Zap, 
  Globe, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  BarChart3,
  MessageSquare,
  Sparkles
} from 'lucide-react';

const AIOptimization: React.FC = () => {
  const [activeTab, setActiveTab] = useState('virality');

  const tabs = [
    { id: 'virality', label: 'Virality Predictor', icon: TrendingUp },
    { id: 'hooks', label: 'Hooks & CTAs', icon: Zap },
    { id: 'compliance', label: 'Smart Disclaimers', icon: Shield },
    { id: 'moderation', label: 'Content Moderation', icon: AlertTriangle },
    { id: 'engagement', label: 'Engagement AI', icon: MessageSquare },
    { id: 'optimization', label: 'Performance AI', icon: BarChart3 }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Optimization Suite</h1>
        <p className="text-gray-600">Advanced AI tools for content optimization and compliance</p>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
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
      {activeTab === 'virality' && <ViralityPredictor />}
      {activeTab === 'hooks' && <HooksAndCTAs />}
      {activeTab === 'compliance' && <SmartDisclaimers />}
      {activeTab === 'moderation' && <ContentModeration />}
      {activeTab === 'engagement' && <EngagementAI />}
      {activeTab === 'optimization' && <PerformanceOptimization />}
    </div>
  );
};

const ViralityPredictor: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div className="lg:col-span-2">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Virality Analysis</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Video Title</label>
            <input 
              type="text" 
              placeholder="Enter your video title..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Script Preview</label>
            <textarea 
              rows={6}
              placeholder="Paste your script here for analysis..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2">
            <Brain className="w-5 h-5" />
            <span>Analyze Viral Potential</span>
          </button>
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Viral Score</h3>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">8.7/10</div>
          <p className="text-sm text-gray-600">High viral potential</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Suggestions</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
            <p className="text-sm text-gray-700">Strong emotional hook detected</p>
          </div>
          <div className="flex items-start space-x-2">
            <Lightbulb className="w-4 h-4 text-yellow-600 mt-0.5" />
            <p className="text-sm text-gray-700">Add numbers to title for 23% higher CTR</p>
          </div>
          <div className="flex items-start space-x-2">
            <Target className="w-4 h-4 text-blue-600 mt-0.5" />
            <p className="text-sm text-gray-700">Consider adding question in first 3 seconds</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HooksAndCTAs: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Hook Generator</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Content Topic</label>
          <input 
            type="text" 
            placeholder="e.g., AI productivity tools"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>YouTube Shorts</option>
            <option>TikTok</option>
            <option>Instagram Reels</option>
            <option>YouTube Long-form</option>
          </select>
        </div>
        
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg">
          Generate Hooks
        </button>
        
        <div className="mt-6">
          <h4 className="font-medium text-gray-900 mb-3">Generated Hooks</h4>
          <div className="space-y-2">
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-sm">"This AI tool just saved me 10 hours of work..."</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-sm">"You won't believe what happened when I tried this..."</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-sm">"Everyone's talking about this, but here's what they missed..."</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">CTA Optimizer</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Goal</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>Subscribe & Like</option>
            <option>Visit Website</option>
            <option>Download App</option>
            <option>Join Community</option>
            <option>Purchase Product</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tone</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>Casual & Friendly</option>
            <option>Professional</option>
            <option>Urgent</option>
            <option>Educational</option>
          </select>
        </div>
        
        <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg">
          Generate CTAs
        </button>
        
        <div className="mt-6">
          <h4 className="font-medium text-gray-900 mb-3">Optimized CTAs</h4>
          <div className="space-y-2">
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm">"If this helped you, smash that subscribe button for more AI tips!"</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm">"Want more content like this? Hit subscribe and ring the bell!"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SmartDisclaimers: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div className="lg:col-span-2">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Analysis & Disclaimer Generation</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content Script</label>
            <textarea 
              rows={8}
              placeholder="Paste your video script here for automatic compliance analysis..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>United States</option>
                <option>European Union</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>YouTube</option>
                <option>TikTok</option>
                <option>Instagram</option>
                <option>Facebook</option>
              </select>
            </div>
          </div>
          
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>Analyze & Generate Disclaimers</span>
          </button>
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detected Topics</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Financial Advice</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Health Claims</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Educational Content</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Generated Disclaimers</h3>
        <div className="space-y-3 text-xs text-gray-600">
          <div className="p-3 bg-red-50 rounded-lg">
            <p><strong>Financial:</strong> This content is for educational purposes only and should not be considered financial advice...</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded-lg">
            <p><strong>Health:</strong> Information provided is not medical advice. Consult healthcare professionals...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContentModeration: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Safety Check</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Content to Analyze</label>
          <textarea 
            rows={6}
            placeholder="Enter content for safety analysis..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm text-gray-700">Toxicity Filter</span>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm text-gray-700">Plagiarism Check</span>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm text-gray-700">Keyword Blacklist</span>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm text-gray-700">Safe Media Only</span>
          </div>
        </div>
        
        <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg">
          Run Safety Analysis
        </button>
      </div>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Safety Report</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-900">Toxicity Check</span>
          </div>
          <span className="text-sm text-green-600">Passed</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-900">Plagiarism Check</span>
          </div>
          <span className="text-sm text-green-600">Original</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-900">Keyword Alert</span>
          </div>
          <span className="text-sm text-yellow-600">Review Needed</span>
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium text-gray-900 mb-2">Flagged Keywords</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">investment</span>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const EngagementAI: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div className="lg:col-span-2">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Comment Analysis & Response Suggestions</h3>
        
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-blue-600">JD</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 mb-1">@johndoe</p>
                <p className="text-sm text-gray-700">"This is amazing! Can you make a video about machine learning next?"</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-xs text-gray-500">YouTube • 2 hours ago</span>
                  <span className="text-xs text-green-600">Positive sentiment</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900 mb-2"><strong>AI Suggested Reply:</strong></p>
              <p className="text-sm text-blue-800">"Thanks John! Machine learning is definitely on my list. What specific aspect would you like me to cover first?"</p>
              <div className="mt-2 flex space-x-2">
                <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded">Use Reply</button>
                <button className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded">Edit</button>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-purple-600">SM</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 mb-1">@sarahmiller</p>
                <p className="text-sm text-gray-700">"I tried this but it didn't work for me. Any troubleshooting tips?"</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-xs text-gray-500">TikTok • 4 hours ago</span>
                  <span className="text-xs text-yellow-600">Needs help</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-900 mb-2"><strong>AI Suggested Reply:</strong></p>
              <p className="text-sm text-yellow-800">"Sorry to hear that Sarah! Can you tell me which step you're stuck on? I'd be happy to help troubleshoot."</p>
              <div className="mt-2 flex space-x-2">
                <button className="text-xs bg-yellow-600 text-white px-3 py-1 rounded">Use Reply</button>
                <button className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Insights</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Response Rate</span>
            <span className="text-sm font-medium text-gray-900">87%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Avg Response Time</span>
            <span className="text-sm font-medium text-gray-900">2.3 hours</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Positive Sentiment</span>
            <span className="text-sm font-medium text-green-600">94%</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Topic Suggestions</h3>
        <div className="space-y-2">
          <div className="p-2 bg-gray-50 rounded text-sm">Machine Learning Basics</div>
          <div className="p-2 bg-gray-50 rounded text-sm">Python for Beginners</div>
          <div className="p-2 bg-gray-50 rounded text-sm">Data Visualization</div>
        </div>
      </div>
    </div>
  </div>
);

const PerformanceOptimization: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">A/B Testing Results</h3>
      
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-900">Title Test</h4>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Winner</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Version A: "5 AI Tools You Need"</span>
              <span className="text-sm text-gray-900">CTR: 4.2%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Version B: "These 5 AI Tools Will Change Your Life"</span>
              <span className="text-sm font-medium text-green-600">CTR: 6.8%</span>
            </div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-900">Thumbnail Test</h4>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Running</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Version A: Face + Text</span>
              <span className="text-sm text-gray-900">CTR: 5.1%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Version B: Product Screenshot</span>
              <span className="text-sm text-gray-900">CTR: 4.9%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Recommendations</h3>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Optimize Upload Time</h4>
            <p className="text-sm text-gray-600">Your audience is most active at 2-4 PM EST. Consider scheduling uploads during this window.</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <Target className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Improve Retention</h4>
            <p className="text-sm text-gray-600">Add a hook in the first 15 seconds. Videos with strong openings have 34% better retention.</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-purple-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Trending Topics</h4>
            <p className="text-sm text-gray-600">"AI automation" is trending in your niche. Consider creating content around this topic.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AIOptimization;