import React, { useState } from 'react';
import { Brain, Settings, ToggleLeft as Toggle, Zap, Target, Clock, Globe, Shield, TrendingUp, Mic, Video, Share, DollarSign, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const AutoPilotSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    contentSourcing: {
      autoDiscovery: true,
      trendMonitoring: true,
      duplicateFilter: true,
      qualityThreshold: 8
    },
    contentCreation: {
      autoScriptGeneration: true,
      platformOptimization: true,
      voiceSelection: 'auto',
      videoStyle: 'auto'
    },
    publishing: {
      autoScheduling: true,
      smartTiming: true,
      crossPlatform: true,
      autoHashtags: true
    },
    optimization: {
      abTesting: true,
      performanceAdaptation: true,
      viralityOptimization: true,
      audienceAnalysis: true
    },
    compliance: {
      autoDisclaimers: true,
      contentModeration: true,
      regionCompliance: true,
      safetyFilters: true
    }
  });

  const toggleSetting = (category: string, setting: string) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: !(prev[category as keyof typeof prev] as any)[setting]
      }
    }));
  };

  const SettingCard = ({ 
    title, 
    description, 
    icon: Icon, 
    color, 
    children 
  }: { 
    title: string; 
    description: string; 
    icon: any; 
    color: string; 
    children: React.ReactNode;
  }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center space-x-3 mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          color === 'blue' ? 'bg-blue-50 text-blue-600' :
          color === 'green' ? 'bg-green-50 text-green-600' :
          color === 'purple' ? 'bg-purple-50 text-purple-600' :
          color === 'orange' ? 'bg-orange-50 text-orange-600' :
          'bg-red-50 text-red-600'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );

  const ToggleSwitch = ({ 
    enabled, 
    onChange, 
    label, 
    description,
    recommended = false 
  }: { 
    enabled: boolean; 
    onChange: () => void; 
    label: string; 
    description: string;
    recommended?: boolean;
  }) => (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-900">{label}</span>
          {recommended && (
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Recommended</span>
          )}
        </div>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? 'bg-blue-600' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AutoPilot Settings</h1>
        <p className="text-gray-600">Configure your AI automation preferences for hands-off content creation</p>
      </div>

      {/* Automation Level Indicator */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 mb-8 border border-green-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Full AutoPilot Mode</h3>
              <p className="text-gray-600">AI handles 100% of your content creation and publishing</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">98.5%</p>
            <p className="text-sm text-gray-600">Automation Level</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Sourcing */}
        <SettingCard
          title="Content Sourcing"
          description="Automated content discovery and research"
          icon={Target}
          color="blue"
        >
          <div className="space-y-3">
            <ToggleSwitch
              enabled={settings.contentSourcing.autoDiscovery}
              onChange={() => toggleSetting('contentSourcing', 'autoDiscovery')}
              label="Auto Topic Discovery"
              description="AI finds trending topics in your niche automatically"
              recommended
            />
            <ToggleSwitch
              enabled={settings.contentSourcing.trendMonitoring}
              onChange={() => toggleSetting('contentSourcing', 'trendMonitoring')}
              label="Real-time Trend Monitoring"
              description="Monitor social platforms for viral content opportunities"
              recommended
            />
            <ToggleSwitch
              enabled={settings.contentSourcing.duplicateFilter}
              onChange={() => toggleSetting('contentSourcing', 'duplicateFilter')}
              label="Duplicate Content Filter"
              description="Ensure each topic is only used once"
            />
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content Quality Threshold: {settings.contentSourcing.qualityThreshold}/10
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={settings.contentSourcing.qualityThreshold}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  contentSourcing: { ...prev.contentSourcing, qualityThreshold: parseInt(e.target.value) }
                }))}
                className="w-full"
              />
              <p className="text-xs text-gray-600 mt-1">Only create content from high-quality sources</p>
            </div>
          </div>
        </SettingCard>

        {/* Content Creation */}
        <SettingCard
          title="Content Creation"
          description="AI-powered script and video generation"
          icon={Video}
          color="purple"
        >
          <div className="space-y-3">
            <ToggleSwitch
              enabled={settings.contentCreation.autoScriptGeneration}
              onChange={() => toggleSetting('contentCreation', 'autoScriptGeneration')}
              label="Auto Script Generation"
              description="Generate scripts automatically from source content"
              recommended
            />
            <ToggleSwitch
              enabled={settings.contentCreation.platformOptimization}
              onChange={() => toggleSetting('contentCreation', 'platformOptimization')}
              label="Platform-Specific Optimization"
              description="Tailor content for each platform's best practices"
              recommended
            />
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 mb-2">Voice Selection</label>
              <select
                value={settings.contentCreation.voiceSelection}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  contentCreation: { ...prev.contentCreation, voiceSelection: e.target.value }
                }))}
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="auto">Auto-select best voice</option>
                <option value="professional-male">Professional Male</option>
                <option value="professional-female">Professional Female</option>
                <option value="casual-male">Casual Male</option>
                <option value="casual-female">Casual Female</option>
              </select>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 mb-2">Video Style</label>
              <select
                value={settings.contentCreation.videoStyle}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  contentCreation: { ...prev.contentCreation, videoStyle: e.target.value }
                }))}
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="auto">Auto-select best style</option>
                <option value="modern">Modern Tech</option>
                <option value="corporate">Corporate</option>
                <option value="casual">Casual</option>
                <option value="educational">Educational</option>
              </select>
            </div>
          </div>
        </SettingCard>

        {/* Publishing */}
        <SettingCard
          title="Publishing & Distribution"
          description="Automated scheduling and cross-platform publishing"
          icon={Share}
          color="green"
        >
          <div className="space-y-3">
            <ToggleSwitch
              enabled={settings.publishing.autoScheduling}
              onChange={() => toggleSetting('publishing', 'autoScheduling')}
              label="Auto Scheduling"
              description="AI determines optimal posting times"
              recommended
            />
            <ToggleSwitch
              enabled={settings.publishing.smartTiming}
              onChange={() => toggleSetting('publishing', 'smartTiming')}
              label="Smart Timing Optimization"
              description="Analyze audience activity for best posting times"
              recommended
            />
            <ToggleSwitch
              enabled={settings.publishing.crossPlatform}
              onChange={() => toggleSetting('publishing', 'crossPlatform')}
              label="Cross-Platform Publishing"
              description="Automatically publish to all connected platforms"
            />
            <ToggleSwitch
              enabled={settings.publishing.autoHashtags}
              onChange={() => toggleSetting('publishing', 'autoHashtags')}
              label="Auto Hashtag Generation"
              description="Generate relevant hashtags for each platform"
            />
          </div>
        </SettingCard>

        {/* Optimization */}
        <SettingCard
          title="Performance Optimization"
          description="AI-driven performance improvements"
          icon={TrendingUp}
          color="orange"
        >
          <div className="space-y-3">
            <ToggleSwitch
              enabled={settings.optimization.abTesting}
              onChange={() => toggleSetting('optimization', 'abTesting')}
              label="A/B Testing"
              description="Test different titles, thumbnails, and descriptions"
              recommended
            />
            <ToggleSwitch
              enabled={settings.optimization.performanceAdaptation}
              onChange={() => toggleSetting('optimization', 'performanceAdaptation')}
              label="Performance Adaptation"
              description="Learn from video performance to improve future content"
              recommended
            />
            <ToggleSwitch
              enabled={settings.optimization.viralityOptimization}
              onChange={() => toggleSetting('optimization', 'viralityOptimization')}
              label="Virality Optimization"
              description="Optimize content for maximum viral potential"
            />
            <ToggleSwitch
              enabled={settings.optimization.audienceAnalysis}
              onChange={() => toggleSetting('optimization', 'audienceAnalysis')}
              label="Audience Analysis"
              description="Analyze audience behavior to improve targeting"
            />
          </div>
        </SettingCard>

        {/* Compliance */}
        <SettingCard
          title="Compliance & Safety"
          description="Automated legal and safety compliance"
          icon={Shield}
          color="red"
        >
          <div className="space-y-3">
            <ToggleSwitch
              enabled={settings.compliance.autoDisclaimers}
              onChange={() => toggleSetting('compliance', 'autoDisclaimers')}
              label="Auto Disclaimers"
              description="Automatically add legal disclaimers when needed"
              recommended
            />
            <ToggleSwitch
              enabled={settings.compliance.contentModeration}
              onChange={() => toggleSetting('compliance', 'contentModeration')}
              label="Content Moderation"
              description="Filter inappropriate or harmful content"
              recommended
            />
            <ToggleSwitch
              enabled={settings.compliance.regionCompliance}
              onChange={() => toggleSetting('compliance', 'regionCompliance')}
              label="Regional Compliance"
              description="Adapt content for different regional regulations"
            />
            <ToggleSwitch
              enabled={settings.compliance.safetyFilters}
              onChange={() => toggleSetting('compliance', 'safetyFilters')}
              label="Safety Filters"
              description="Block potentially problematic content automatically"
            />
          </div>
        </SettingCard>
      </div>

      {/* Save Settings */}
      <div className="mt-8 flex items-center justify-between p-6 bg-blue-50 rounded-xl border border-blue-200">
        <div className="flex items-center space-x-3">
          <Info className="w-5 h-5 text-blue-600" />
          <div>
            <h4 className="font-medium text-blue-900">Settings Auto-Save</h4>
            <p className="text-sm text-blue-700">Your preferences are automatically saved and applied immediately</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-green-600">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">All settings saved</span>
        </div>
      </div>
    </div>
  );
};

export default AutoPilotSettings;