import React, { useState } from 'react';
import { 
  Lightbulb, 
  Wand2, 
  Target, 
  TrendingUp, 
  Zap,
  Copy,
  RefreshCw,
  Sparkles,
  Brain
} from 'lucide-react';

const PromptGenerator: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [niche, setNiche] = useState('technology');
  const [platform, setPlatform] = useState('youtube');
  const [generatedIdeas, setGeneratedIdeas] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const niches = [
    'Technology & AI',
    'Finance & Investing',
    'Health & Wellness',
    'Business & Entrepreneurship',
    'Lifestyle & Travel',
    'Education & Learning',
    'Entertainment',
    'Food & Cooking',
    'Fitness & Sports',
    'DIY & Crafts'
  ];

  const platforms = [
    { id: 'youtube', name: 'YouTube Long-form' },
    { id: 'youtube-shorts', name: 'YouTube Shorts' },
    { id: 'tiktok', name: 'TikTok' },
    { id: 'instagram', name: 'Instagram Reels' },
    { id: 'podcast', name: 'Podcast' },
    { id: 'twitter', name: 'Twitter/X' }
  ];

  const generateIdeas = () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const ideas = [
        {
          title: `${keyword ? keyword : 'AI'} Revolution: 5 Game-Changing Tools You Need to Know`,
          hook: `What if I told you there's an ${keyword ? keyword.toLowerCase() : 'AI'} tool that could save you 10 hours a week?`,
          outline: [
            'Hook: Shocking statistic about productivity',
            'Problem: Current workflow inefficiencies',
            'Solution 1: Tool #1 with demo',
            'Solution 2: Tool #2 with results',
            'Solution 3: Tool #3 with case study',
            'CTA: Subscribe for more productivity tips'
          ],
          viralityScore: 8.7,
          estimatedViews: '250K - 500K'
        },
        {
          title: `The ${keyword ? keyword : 'AI'} Mistake 99% of People Make (And How to Fix It)`,
          hook: `Stop! You're probably making this critical ${keyword ? keyword.toLowerCase() : 'AI'} mistake right now...`,
          outline: [
            'Hook: Warning about common mistake',
            'Story: Personal experience or case study',
            'Mistake: What most people do wrong',
            'Solution: The correct approach',
            'Results: Before and after comparison',
            'CTA: Try this method and comment results'
          ],
          viralityScore: 9.2,
          estimatedViews: '500K - 1M'
        },
        {
          title: `I Tested ${keyword ? keyword : 'AI'} for 30 Days - Here's What Happened`,
          hook: `Day 1 vs Day 30 of using ${keyword ? keyword.toLowerCase() : 'AI'} - the results shocked me`,
          outline: [
            'Hook: Before/after teaser',
            'Setup: The 30-day challenge',
            'Week 1: Initial struggles and learning',
            'Week 2-3: Breakthrough moments',
            'Week 4: Final results and metrics',
            'CTA: Start your own 30-day challenge'
          ],
          viralityScore: 7.9,
          estimatedViews: '150K - 300K'
        }
      ];
      
      setGeneratedIdeas(ideas);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Prompt Generator</h1>
        <p className="text-gray-600">Generate viral video ideas, hooks, and outlines instantly</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Wand2 className="w-5 h-5 mr-2 text-purple-600" />
              Generate Ideas
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Keyword/Topic</label>
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="e.g., AI productivity, crypto trading, fitness"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Niche</label>
                <select
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  {niches.map((n) => (
                    <option key={n} value={n.toLowerCase()}>{n}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Platform</label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  {platforms.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={generateIdeas}
                disabled={isGenerating}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Generate Ideas</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Generated Ideas */}
        <div className="lg:col-span-2">
          {generatedIdeas.length > 0 ? (
            <div className="space-y-6">
              {generatedIdeas.map((idea, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{idea.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Target className="w-4 h-4 text-green-600" />
                          <span>Virality Score: {idea.viralityScore}/10</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4 text-blue-600" />
                          <span>Est. Views: {idea.estimatedViews}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(idea.title)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Copy className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-1 text-yellow-500" />
                      Hook
                    </h4>
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <p className="text-sm text-yellow-800 italic">"{idea.hook}"</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <Brain className="w-4 h-4 mr-1 text-purple-500" />
                      Content Outline
                    </h4>
                    <div className="space-y-2">
                      {idea.outline.map((point, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-purple-600">{idx + 1}</span>
                          </div>
                          <p className="text-sm text-gray-700">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                      Create Video from This Idea
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-200 text-center">
              <Lightbulb className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Generate Ideas?</h3>
              <p className="text-gray-600">Enter a keyword or topic and let AI create viral video concepts for you</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromptGenerator;