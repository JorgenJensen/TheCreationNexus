import React, { useState } from 'react';
import { 
  CreditCard, 
  Crown, 
  Users, 
  TrendingUp, 
  DollarSign,
  Calendar,
  Gift,
  Settings,
  Download,
  Star,
  Zap,
  Shield
} from 'lucide-react';

const BillingDashboard: React.FC = () => {
  const [currentPlan, setCurrentPlan] = useState('pro');

  const plans = [
    {
      id: 'core',
      name: 'Core',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for solo creators getting started',
      features: [
        'Basic automation',
        '1-2 platforms',
        'Limited metadata',
        '10 videos/month',
        'Basic analytics',
        'Email support'
      ],
      color: 'gray',
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$79.99',
      period: '/month',
      description: 'For serious creators and influencers',
      features: [
        'Platform-specific scripts',
        'Full publishing suite',
        'Smart disclaimers',
        'Custom voices (ElevenLabs)',
        'Advanced analytics',
        'Thumbnail generation',
        'A/B testing',
        'Unlimited videos',
        'Priority support'
      ],
      color: 'blue',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For agencies and media teams',
      features: [
        'Everything in Pro',
        'Team roles & permissions',
        'White-label dashboard',
        'Advanced optimization',
        'Virality AI',
        'API access',
        'Webhook integrations',
        'Custom integrations',
        'Dedicated support',
        'Revenue sharing'
      ],
      color: 'purple',
      popular: false
    }
  ];

  const usage = {
    videosCreated: 247,
    videosLimit: 'Unlimited',
    platformsConnected: 5,
    platformsLimit: 'All',
    storageUsed: '2.4 GB',
    storageLimit: '100 GB',
    apiCalls: 15420,
    apiLimit: 50000
  };

  const billing = {
    nextBilling: 'January 15, 2024',
    amount: '$79.99',
    method: '•••• •••• •••• 4242',
    status: 'Active'
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Billing & Plans</h1>
        <p className="text-gray-600">Manage your subscription and billing preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Plan & Usage */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Plan */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Current Plan</h3>
              <div className="flex items-center space-x-2 text-blue-600">
                <Crown className="w-5 h-5" />
                <span className="font-medium">Pro Plan</span>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-blue-900">Pro Plan</h4>
                  <p className="text-sm text-blue-700">Next billing: {billing.nextBilling}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-900">{billing.amount}</p>
                  <p className="text-sm text-blue-700">/month</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">{usage.videosCreated}</p>
                <p className="text-sm text-gray-600">Videos Created</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">{usage.platformsConnected}</p>
                <p className="text-sm text-gray-600">Platforms Connected</p>
              </div>
            </div>
          </div>

          {/* Usage Details */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage This Month</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Videos Created</span>
                  <span className="text-sm text-gray-900">{usage.videosCreated} / {usage.videosLimit}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Storage Used</span>
                  <span className="text-sm text-gray-900">{usage.storageUsed} / {usage.storageLimit}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '24%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">API Calls</span>
                  <span className="text-sm text-gray-900">{usage.apiCalls.toLocaleString()} / {usage.apiLimit.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '31%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Available Plans */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Available Plans</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan) => (
                <div key={plan.id} className={`relative p-4 rounded-lg border-2 ${
                  plan.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                    <div className="mt-2">
                      <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {plan.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.features.length > 4 && (
                      <li className="text-sm text-gray-500">+{plan.features.length - 4} more features</li>
                    )}
                  </ul>
                  
                  <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    currentPlan === plan.id
                      ? 'bg-gray-100 text-gray-600 cursor-not-allowed'
                      : plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}>
                    {currentPlan === plan.id ? 'Current Plan' : 'Upgrade'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Payment Method */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{billing.method}</p>
                <p className="text-sm text-gray-600">Expires 12/26</p>
              </div>
            </div>
            
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
              Update Payment Method
            </button>
          </div>

          {/* Billing History */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Invoices</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Dec 2024</p>
                  <p className="text-sm text-gray-600">Pro Plan</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">$79.99</p>
                  <button className="text-sm text-blue-600 hover:text-blue-700">
                    <Download className="w-4 h-4 inline mr-1" />
                    Download
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Nov 2024</p>
                  <p className="text-sm text-gray-600">Pro Plan</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">$79.99</p>
                  <button className="text-sm text-blue-600 hover:text-blue-700">
                    <Download className="w-4 h-4 inline mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Affiliate Program */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
            <div className="flex items-center space-x-2 mb-3">
              <Gift className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">Affiliate Program</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">Earn 30% commission on every referral</p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Referrals</span>
                <span className="text-sm font-medium text-gray-900">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Earnings</span>
                <span className="text-sm font-medium text-green-600">$287.64</span>
              </div>
            </div>
            
            <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
              Get Referral Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDashboard;