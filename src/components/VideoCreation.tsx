import React, { useState } from 'react';
import { Play, Mic, Film, Wand2, Settings, Download, Zap, Globe, Target, Sparkles } from 'lucide-react';

const VideoCreation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('script');

  const tabs = [
    { id: 'script', label: 'Script Generation', icon: Wand2 },
    { id: 'voice', label: 'Voiceover', icon: Mic },
    { id: 'video', label: 'Video Creation', icon: Film },
    { id: 'optimize', label: 'Optimization', icon: Settings },
    { id: 'hooks', label: 'Hooks & CTAs', icon: Zap },
    { id: 'multilang', label: 'Multi-Language', icon: Globe }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Video Creation</h1>
        <p className="text-gray-600">Create engaging videos with AI-powered automation</p>
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {activeTab === 'script' && <ScriptGeneration />}
          {activeTab === 'voice' && <VoiceoverSettings />}
          {activeTab === 'video' && <VideoSettings />}
          {activeTab === 'optimize' && <OptimizationSettings />}
          {activeTab === 'hooks' && <HooksAndCTAs />}
          {activeTab === 'multilang' && <MultiLanguageSettings />}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                <Play className="w-4 h-4" />
                <span>Generate Video</span>
              </button>
              <button className="w-full flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                <span>Save Template</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Templates</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900">Tech News Daily</h4>
                <p className="text-sm text-gray-600">YouTube • 5:30 min</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900">Quick Tips</h4>
                <p className="text-sm text-gray-600">TikTok • 60 sec</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900">AI Breakthrough</h4>
                <p className="text-sm text-gray-600">Multi-platform • Auto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScriptGeneration: React.FC = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Script Generation</h3>
    
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Content Source</label>
        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>Latest from TechCrunch</option>
          <option>Google News - AI Topics</option>
          <option>Wikipedia Trending</option>
          <option>Trending on YouTube</option>
          <option>Custom Topic</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Video Length</label>
        <div className="flex space-x-4">
          <button className="flex-1 p-3 border border-gray-300 rounded-lg hover:bg-gray-50">Short (30-60s)</button>
          <button className="flex-1 p-3 border border-gray-300 rounded-lg hover:bg-gray-50">Medium (2-5min)</button>
          <button className="flex-1 p-3 border border-gray-300 rounded-lg hover:bg-gray-50">Long (5-15min)</button>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Generated Script</label>
        <textarea 
          className="w-full h-64 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Your AI-generated script will appear here... The system will automatically optimize for your selected platforms and include hooks, CTAs, and compliance disclaimers."
        />
      </div>
      
      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">AI Enhancements Active</h4>
        <div className="grid grid-cols-2 gap-2 text-sm text-blue-700">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>Hook Generation</span>
          </div>
          <div className="flex items-center space-x-2">
            <Target className="w-4 h-4" />
            <span>CTA Optimization</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span>Multi-Language Ready</span>
          </div>
          <div className="flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Platform Optimization</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const VoiceoverSettings: React.FC = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Voiceover Settings</h3>
    
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Voice Type</label>
        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>Auto-Select Best Voice</option>
          <option>Professional Male</option>
          <option>Professional Female</option>
          <option>Casual Male</option>
          <option>Casual Female</option>
          <option>Energetic Young Male</option>
          <option>Energetic Young Female</option>
          <option>Authoritative Expert</option>
          <option>Friendly Narrator</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>English (US)</option>
          <option>English (UK)</option>
          <option>English (Australian)</option>
          <option>Spanish</option>
          <option>Spanish (Mexico)</option>
          <option>French</option>
          <option>German</option>
          <option>Italian</option>
          <option>Portuguese</option>
          <option>Japanese</option>
          <option>Korean</option>
          <option>Mandarin</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Emotion & Tone</label>
        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>Auto-Detect from Content</option>
          <option>Neutral Professional</option>
          <option>Excited & Energetic</option>
          <option>Calm & Soothing</option>
          <option>Authoritative</option>
          <option>Friendly & Conversational</option>
          <option>Dramatic & Engaging</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Speaking Speed</label>
        <input type="range" min="0.5" max="2" step="0.1" className="w-full" />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Slow</span>
          <span>Normal</span>
          <span>Fast</span>
        </div>
      </div>
      
      <div className="bg-green-50 rounded-lg p-4">
        <h4 className="font-medium text-green-900 mb-2">ElevenLabs Integration</h4>
        <p className="text-sm text-green-700 mb-2">High-quality AI voice generation with emotion control</p>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-green-600">Connected & Ready</span>
        </div>
      </div>
    </div>
  </div>
);

const VideoSettings: React.FC = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Video Settings</h3>
    
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Video Format</label>
        <div className="grid grid-cols-2 gap-4">
          <button className="p-3 border-2 border-blue-500 bg-blue-50 rounded-lg">Auto-Format</button>
          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">16:9 (YouTube)</button>
          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">9:16 (Shorts/TikTok)</button>
          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">1:1 (Instagram)</button>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Visual Style</label>
        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>AI Auto-Select</option>
          <option>Modern Tech</option>
          <option>Corporate</option>
          <option>Casual</option>
          <option>Educational</option>
          <option>News Style</option>
          <option>Entertainment</option>
          <option>Minimalist</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Stock Footage Source</label>
        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>Pictory Premium Library</option>
          <option>Pexels (Free)</option>
          <option>Unsplash (Free)</option>
          <option>Custom Upload</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Include Captions</label>
        <div className="flex items-center space-x-2">
          <input type="checkbox" defaultChecked className="rounded" />
          <span className="text-sm text-gray-600">Auto-generate captions</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <input type="checkbox" defaultChecked className="rounded" />
          <span className="text-sm text-gray-600">Sync captions with voiceover</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <input type="checkbox" className="rounded" />
          <span className="text-sm text-gray-600">Add text overlays for key points</span>
        </div>
      </div>
      
      <div className="bg-purple-50 rounded-lg p-4">
        <h4 className="font-medium text-purple-900 mb-2">Pictory Integration</h4>
        <p className="text-sm text-purple-700 mb-2">AI-powered video creation with stock footage and transitions</p>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span className="text-sm text-purple-600">Connected & Ready</span>
        </div>
      </div>
    </div>
  </div>
);

const OptimizationSettings: React.FC = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Optimization</h3>
    
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Target Platforms</label>
        <div className="space-y-2">
          {['YouTube', 'YouTube Shorts', 'TikTok', 'Instagram Reels', 'Facebook', 'Twitter/X', 'LinkedIn'].map((platform) => (
            <div key={platform} className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked={['YouTube', 'TikTok', 'Instagram Reels'].includes(platform)} className="rounded" />
              <span className="text-sm text-gray-700">{platform}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">SEO Keywords</label>
        <input 
          type="text" 
          placeholder="Enter keywords separated by commas"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Call to Action</label>
        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>Subscribe & Like</option>
          <option>Visit Website</option>
          <option>Download App</option>
          <option>Custom CTA</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail Generation</label>
        <div className="flex items-center space-x-2">
          <input type="checkbox" defaultChecked className="rounded" />
          <span className="text-sm text-gray-600">Auto-generate thumbnails</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <input type="checkbox" className="rounded" />
          <span className="text-sm text-gray-600">A/B test thumbnail variations</span>
        </div>
      </div>
    </div>
  </div>
);

const HooksAndCTAs: React.FC = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Hooks & Call-to-Actions</h3>
    
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Hook Style</label>
        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>AI Auto-Generate</option>
          <option>Question Hook</option>
          <option>Shocking Statement</option>
          <option>Number/Statistic</option>
          <option>Story Opening</option>
          <option>Problem/Solution</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Hook Duration</label>
        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>3-5 seconds (Optimal)</option>
          <option>5-7 seconds</option>
          <option>7-10 seconds</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">CTA Placement</label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm text-gray-700">Beginning (Subscribe reminder)</span>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm text-gray-700">Middle (Engagement boost)</span>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm text-gray-700">End (Strong CTA)</span>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 rounded-lg p-4">
        <h4 className="font-medium text-yellow-900 mb-2">Generated Hook Examples</h4>
        <div className="space-y-2 text-sm text-yellow-800">
          <p>"This AI breakthrough will change everything you know about..."</p>
          <p>"What if I told you there's a way to automate 90% of your work?"</p>
          <p>"The top 1% of creators use this secret technique..."</p>
        </div>
      </div>
    </div>
  </div>
);

const MultiLanguageSettings: React.FC = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Multi-Language Support</h3>
    
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Primary Language</label>
        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>English (US)</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Portuguese</option>
          <option>Japanese</option>
          <option>Korean</option>
          <option>Mandarin</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Auto-Translate To</label>
        <div className="grid grid-cols-2 gap-2">
          {['Spanish', 'French', 'German', 'Portuguese', 'Italian', 'Japanese', 'Korean', 'Mandarin'].map((lang) => (
            <div key={lang} className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm text-gray-700">{lang}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle Generation</label>
        <div className="flex items-center space-x-2">
          <input type="checkbox" defaultChecked className="rounded" />
          <span className="text-sm text-gray-600">Auto-generate subtitles for all languages</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <input type="checkbox" className="rounded" />
          <span className="text-sm text-gray-600">Burn subtitles into video</span>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Voice Localization</label>
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="rounded" />
          <span className="text-sm text-gray-600">Generate native voice for each language</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <input type="checkbox" defaultChecked className="rounded" />
          <span className="text-sm text-gray-600">Keep original voice with translated text</span>
        </div>
      </div>
      
      <div className="bg-green-50 rounded-lg p-4">
        <h4 className="font-medium text-green-900 mb-2">Global Reach</h4>
        <p className="text-sm text-green-700">Expand your audience by automatically creating content in multiple languages. Each version will be optimized for local platforms and cultural preferences.</p>
      </div>
    </div>
  </div>
);

export default VideoCreation;