import React, { useState } from 'react';
import { 
  Shield, 
  FileText, 
  Globe, 
  Users, 
  DollarSign,
  Info,
  CheckCircle,
  AlertTriangle,
  Download,
  Eye
} from 'lucide-react';

const LicensingControl: React.FC = () => {
  const [selectedLicense, setSelectedLicense] = useState('standard');

  const licenses = [
    {
      id: 'standard',
      name: 'Standard License',
      description: 'For personal and small business use',
      price: 'Included',
      features: [
        'Personal and commercial use',
        'Up to 1M views per video',
        'Social media platforms',
        'Basic attribution required',
        'No resale rights'
      ],
      restrictions: [
        'Cannot resell or redistribute',
        'Cannot claim as original work',
        'Must include attribution'
      ],
      color: 'blue'
    },
    {
      id: 'extended',
      name: 'Extended License',
      description: 'For larger businesses and agencies',
      price: '+$29/month',
      features: [
        'Unlimited commercial use',
        'No view limits',
        'All platforms including TV/broadcast',
        'No attribution required',
        'Client work allowed',
        'Resale rights for end products'
      ],
      restrictions: [
        'Cannot resell raw content',
        'Cannot create competing platforms'
      ],
      color: 'purple'
    },
    {
      id: 'exclusive',
      name: 'Exclusive License',
      description: 'Full ownership and exclusive rights',
      price: '+$99/month',
      features: [
        'Exclusive ownership of content',
        'Full commercial rights',
        'Resale and redistribution rights',
        'No restrictions on use',
        'Priority content generation',
        'Custom licensing terms'
      ],
      restrictions: [
        'No restrictions - full ownership'
      ],
      color: 'green'
    }
  ];

  const contentHistory = [
    {
      id: 1,
      title: 'AI Revolution in Healthcare',
      created: '2024-01-15',
      license: 'Standard License',
      status: 'active',
      views: '245K',
      platforms: ['YouTube', 'TikTok']
    },
    {
      id: 2,
      title: 'Top 5 Investment Strategies',
      created: '2024-01-14',
      license: 'Extended License',
      status: 'active',
      views: '892K',
      platforms: ['YouTube', 'Instagram', 'Facebook']
    },
    {
      id: 3,
      title: 'Future of Remote Work',
      created: '2024-01-13',
      license: 'Standard License',
      status: 'archived',
      views: '156K',
      platforms: ['LinkedIn', 'Twitter']
    }
  ];

  const generateLicenseDocument = (license: any) => {
    return `
VIDEO CONTENT LICENSE AGREEMENT

License Type: ${license.name}
Date: ${new Date().toLocaleDateString()}
Content Creator: [Your Name/Company]

GRANT OF LICENSE:
Subject to the terms and conditions of this Agreement, Licensor hereby grants to Licensee a ${license.id === 'exclusive' ? 'exclusive' : 'non-exclusive'} license to use the video content.

PERMITTED USES:
${license.features.map((feature: string) => `• ${feature}`).join('\n')}

RESTRICTIONS:
${license.restrictions.map((restriction: string) => `• ${restriction}`).join('\n')}

This license agreement is automatically generated and legally binding.
    `;
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Licensing Control</h1>
        <p className="text-gray-600">Manage content licensing and usage rights for your videos</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* License Selection */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your License</h3>
            
            <div className="space-y-4">
              {licenses.map((license) => (
                <div
                  key={license.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedLicense === license.id
                      ? `border-${license.color}-500 bg-${license.color}-50`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedLicense(license.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{license.name}</h4>
                      <p className="text-sm text-gray-600">{license.description}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${
                        license.price === 'Included' ? 'text-green-600' : 'text-gray-900'
                      }`}>
                        {license.price}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Features</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {license.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Restrictions</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {license.restrictions.map((restriction, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span>{restriction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content History */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Licensing History</h3>
            
            <div className="space-y-4">
              {contentHistory.map((content) => (
                <div key={content.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{content.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span>Created: {content.created}</span>
                      <span>Views: {content.views}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        content.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {content.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-sm text-gray-600">License:</span>
                      <span className="text-sm font-medium text-blue-600">{content.license}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <Eye className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <Download className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Current License */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current License</h3>
            
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900">
                {licenses.find(l => l.id === selectedLicense)?.name}
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                {licenses.find(l => l.id === selectedLicense)?.description}
              </p>
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mb-3">
              Generate License Document
            </button>
            
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
              View License Terms
            </button>
          </div>

          {/* License Statistics */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">License Usage</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Videos</span>
                <span className="text-sm font-medium text-gray-900">247</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Standard License</span>
                <span className="text-sm font-medium text-gray-900">189</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Extended License</span>
                <span className="text-sm font-medium text-gray-900">45</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Exclusive License</span>
                <span className="text-sm font-medium text-gray-900">13</span>
              </div>
            </div>
          </div>

          {/* AI License Assistant */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center space-x-2 mb-3">
              <Info className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">AI License Assistant</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">Get personalized licensing recommendations based on your content and usage patterns.</p>
            
            <div className="space-y-2 text-sm">
              <div className="p-2 bg-white rounded border">
                <p className="text-purple-900 font-medium">Recommendation:</p>
                <p className="text-purple-700">Consider Extended License for your finance content to remove attribution requirements.</p>
              </div>
            </div>
            
            <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
              Get License Advice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicensingControl;