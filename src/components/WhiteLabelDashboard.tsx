import React, { useState } from 'react';
import { 
  Palette, 
  Globe, 
  Settings, 
  Users, 
  DollarSign,
  Crown,
  Copy,
  Eye,
  Code,
  Zap,
  Shield,
  Star
} from 'lucide-react';

const WhiteLabelDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('branding');

  const tabs = [
    { id: 'branding', label: 'Branding', icon: Palette },
    { id: 'domain', label: 'Custom Domain', icon: Globe },
    { id: 'pricing', label: 'Pricing Control', icon: DollarSign },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'api', label: 'API Settings', icon: Code }
  ];

  const brandingSettings = {
    logoUrl: '',
    primaryColor: '#3B82F6',
    secondaryColor: '#8B5CF6',
    companyName: 'Your Agency',
    tagline: 'Automated Video Creation Platform',
    favicon: '',
    customCSS: ''
  };

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$19.99',
      yourCost: '$9.99',
      profit: '$10.00',
      features: ['Basic automation', '2 platforms', '50 videos/month']
    },
    {
      name: 'Professional',
      price: '$49.99',
      yourCost: '$29.99',
      profit: '$20.00',
      features: ['Advanced features', '5 platforms', 'Unlimited videos']
    },
    {
      name: 'Enterprise',
      price: '$199.99',
      yourCost: '$99.99',
      profit: '$100.00',
      features: ['All features', 'White-label', 'Priority support']
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">White-Label Dashboard</h1>
        <p className="text-gray-600">Customize and resell the platform under your brand</p>
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
      {activeTab === 'branding' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Brand Customization</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input 
                  type="text" 
                  value={brandingSettings.companyName}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                <input 
                  type="text" 
                  value={brandingSettings.tagline}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="color" 
                      value={brandingSettings.primaryColor}
                      className="w-12 h-10 border border-gray-300 rounded-lg"
                    />
                    <input 
                      type="text" 
                      value={brandingSettings.primaryColor}
                      className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="color" 
                      value={brandingSettings.secondaryColor}
                      className="w-12 h-10 border border-gray-300 rounded-lg"
                    />
                    <input 
                      type="text" 
                      value={brandingSettings.secondaryColor}
                      className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Logo Upload</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Upload your logo</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                    Choose File
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Custom CSS</label>
                <textarea 
                  rows={4}
                  placeholder="Add custom CSS to further customize the appearance..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
            
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{brandingSettings.companyName}</h4>
                    <p className="text-sm text-gray-600">{brandingSettings.tagline}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button 
                    className="w-full py-2 px-4 rounded-lg text-white font-medium"
                    style={{ backgroundColor: brandingSettings.primaryColor }}
                  >
                    Primary Button
                  </button>
                  <button 
                    className="w-full py-2 px-4 rounded-lg text-white font-medium"
                    style={{ backgroundColor: brandingSettings.secondaryColor }}
                  >
                    Secondary Button
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Save Changes
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'domain' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Domain Setup</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Domain</label>
              <input 
                type="text" 
                placeholder="app.yourdomain.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-600 mt-2">Enter the subdomain where you want to host your white-label platform</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">DNS Configuration Required</h4>
              <p className="text-sm text-blue-700 mb-3">Add these DNS records to your domain:</p>
              
              <div className="space-y-2 font-mono text-sm">
                <div className="bg-white p-2 rounded border">
                  <span className="text-gray-600">Type:</span> CNAME<br/>
                  <span className="text-gray-600">Name:</span> app<br/>
                  <span className="text-gray-600">Value:</span> white-label.videoflow.com
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-600 font-medium">SSL Certificate will be automatically provisioned</span>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Verify Domain
            </button>
          </div>
        </div>
      )}

      {activeTab === 'pricing' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing Control</h3>
            <p className="text-gray-600 mb-6">Set your own pricing for each plan. Your profit margin is automatically calculated.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">{tier.name}</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Price</label>
                      <input 
                        type="text" 
                        value={tier.price}
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <p>Your Cost: <span className="font-medium">{tier.yourCost}</span></p>
                      <p className="text-green-600">Profit: <span className="font-medium">{tier.profit}</span></p>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-2">Features:</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {tier.features.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
            <div className="flex items-center space-x-2 mb-3">
              <DollarSign className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">Revenue Projection</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">$2,450</p>
                <p className="text-sm text-gray-600">Monthly Revenue</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">47</p>
                <p className="text-sm text-gray-600">Active Customers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">68%</p>
                <p className="text-sm text-gray-600">Profit Margin</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Management</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Total Users</h4>
                <p className="text-sm text-gray-600">All registered users on your platform</p>
              </div>
              <div className="text-2xl font-bold text-blue-600">247</div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Active Subscriptions</h4>
                <p className="text-sm text-gray-600">Users with paid plans</p>
              </div>
              <div className="text-2xl font-bold text-green-600">89</div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Monthly Churn Rate</h4>
                <p className="text-sm text-gray-600">Percentage of users who cancelled</p>
              </div>
              <div className="text-2xl font-bold text-orange-600">3.2%</div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-3">User Management Tools</h4>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-left transition-colors">
                <Users className="w-5 h-5 text-blue-600 mb-2" />
                <h5 className="font-medium text-blue-900">View All Users</h5>
                <p className="text-sm text-blue-700">Manage user accounts and permissions</p>
              </button>
              
              <button className="p-3 bg-green-50 hover:bg-green-100 rounded-lg text-left transition-colors">
                <DollarSign className="w-5 h-5 text-green-600 mb-2" />
                <h5 className="font-medium text-green-900">Billing Management</h5>
                <p className="text-sm text-green-700">Handle subscriptions and payments</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'api' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">API Configuration</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">API Base URL</label>
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  value="https://api.yourdomain.com/v1"
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
                <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <Copy className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Webhook Endpoint</label>
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  value="https://api.yourdomain.com/webhooks"
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
                <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <Copy className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">API Features</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Full video creation API</li>
                <li>• User management endpoints</li>
                <li>• Billing and subscription APIs</li>
                <li>• Analytics and reporting</li>
                <li>• Webhook notifications</li>
              </ul>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Generate API Documentation
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhiteLabelDashboard;