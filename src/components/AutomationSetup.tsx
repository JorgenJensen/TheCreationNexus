import React, { useState } from 'react';
import { 
  Zap, 
  Play, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Target,
  Calendar,
  Sparkles,
  Brain,
  Rocket
} from 'lucide-react';

const AutomationSetup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedNiche, setSelectedNiche] = useState('');
  const [automationLevel, setAutomationLevel] = useState('full');

  const niches = [
    { id: 'tech', name: 'Technology & AI', description: 'Latest tech news, AI developments, gadgets', trending: true },
    { id: 'finance', name: 'Finance & Investing', description: 'Market updates, crypto, personal finance tips', trending: true },
    { id: 'health', name: 'Health & Wellness', description: 'Fitness tips, nutrition, mental health', trending: false },
    { id: 'business', name: 'Business & Entrepreneurship', description: 'Startup news, business strategies, success stories', trending: true },
    { id: 'lifestyle', name: 'Lifestyle & Travel', description: 'Travel guides, lifestyle tips, culture', trending: false },
    { id: 'education', name: 'Education & Learning', description: 'Online courses, study tips, skill development', trending: false }
  ];

  const automationLevels = [
    {
      id: 'full',
      name: 'Full Autopilot',
      description: 'Complete hands-off automation. AI handles everything from topic selection to publishing.',
      features: ['Auto topic discovery', 'Smart scheduling', 'Platform optimization', 'Performance adaptation']
    },
    {
      id: 'guided',
      name: 'Guided Automation',
      description: 'AI suggests topics and schedules, you approve before publishing.',
      features: ['Topic suggestions', 'Review before publish', 'Manual overrides', 'Custom scheduling']
    },
    {
      id: 'manual',
      name: 'Manual Control',
      description: 'You choose topics and timing, AI handles creation and optimization.',
      features: ['Manual topic input', 'Custom scripts', 'Flexible scheduling', 'Full control']
    }
  ];

  const handleQuickStart = () => {
    // Simulate quick automation setup
    setCurrentStep(4);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to VideoFlow</h1>
        <p className="text-gray-600 text-lg">Let's set up your automated video creation system in under 2 minutes</p>
      </div>

      {/* Quick Start Option */}
      {currentStep === 1 && (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-8 border border-blue-200">
          <div className="text-center">
            <Rocket className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">🚀 Instant Setup</h2>
            <p className="text-gray-600 mb-6">Start creating videos immediately with our AI-powered quick setup</p>
            <button
              onClick={handleQuickStart}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Creating Videos Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-500 mt-3">AI will automatically choose your niche and optimize everything</p>
          </div>
        </div>
      )}

      {/* Step Progress */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
            </div>
            {step < 4 && (
              <div className={`w-16 h-1 ${currentStep > step ? 'bg-blue-600' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
        {currentStep === 1 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Choose Your Content Niche</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {niches.map((niche) => (
                <button
                  key={niche.id}
                  onClick={() => setSelectedNiche(niche.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedNiche === niche.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{niche.name}</h4>
                    {niche.trending && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Trending</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{niche.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Automation Level</h3>
            <div className="space-y-4">
              {automationLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setAutomationLevel(level.id)}
                  className={`w-full p-6 rounded-lg border-2 text-left transition-all ${
                    automationLevel === level.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">{level.name}</h4>
                      <p className="text-gray-600 mt-1">{level.description}</p>
                    </div>
                    {level.id === 'full' && (
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">
                        Recommended
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {level.features.map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Platform & Schedule Setup</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Target Platforms</h4>
                <div className="space-y-3">
                  {[
                    { name: 'YouTube Shorts', recommended: true },
                    { name: 'TikTok', recommended: true },
                    { name: 'Instagram Reels', recommended: true },
                    { name: 'YouTube Long-form', recommended: false },
                    { name: 'Facebook', recommended: false },
                    { name: 'Twitter/X', recommended: false }
                  ].map((platform) => (
                    <div key={platform.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <input type="checkbox" defaultChecked={platform.recommended} className="rounded" />
                        <span className="text-gray-900">{platform.name}</span>
                      </div>
                      {platform.recommended && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Recommended</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Publishing Schedule</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <input type="radio" name="schedule" defaultChecked className="rounded-full" />
                      <span className="font-medium text-blue-900">Smart Schedule (Recommended)</span>
                    </div>
                    <p className="text-sm text-blue-700">AI optimizes posting times based on your audience and platform algorithms</p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <input type="radio" name="schedule" className="rounded-full" />
                      <span className="font-medium text-gray-900">Custom Schedule</span>
                    </div>
                    <p className="text-sm text-gray-600">Set specific times and frequencies for each platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">🎉 You're All Set!</h3>
            <p className="text-gray-600 mb-6">Your automated video creation system is now active and will start generating content within the next hour.</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-medium text-gray-900 mb-3">What happens next:</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>AI is analyzing trending topics in your niche</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>First video will be created and scheduled within 1 hour</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>You'll receive notifications when videos go live</span>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              Go to Dashboard
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      {currentStep < 4 && (
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            className={`px-6 py-2 rounded-lg font-medium ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-700'
            }`}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          
          <button
            onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            disabled={currentStep === 1 && !selectedNiche}
          >
            {currentStep === 3 ? 'Complete Setup' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
};

export default AutomationSetup;