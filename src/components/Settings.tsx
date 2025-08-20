import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Settings as SettingsIcon,
  Key,
  Globe,
  Zap,
  Crown
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'api', label: 'API Keys', icon: Key },
    { id: 'preferences', label: 'Preferences', icon: SettingsIcon }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {activeTab === 'profile' && <ProfileSettings />}
          {activeTab === 'notifications' && <NotificationSettings />}
          {activeTab === 'security' && <SecuritySettings />}
          {activeTab === 'billing' && <BillingSettings />}
          {activeTab === 'api' && <APISettings />}
          {activeTab === 'preferences' && <PreferenceSettings />}
        </div>
      </div>
    </div>
  );
};

const ProfileSettings: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input type="text" value="John" className="w-full p-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input type="text" value="Doe" className="w-full p-3 border border-gray-300 rounded-lg" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" value="john@example.com" className="w-full p-3 border border-gray-300 rounded-lg" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
          <input type="text" value="Tech Innovations Inc." className="w-full p-3 border border-gray-300 rounded-lg" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
          <textarea 
            rows={4} 
            value="Content creator focused on tech and AI innovations."
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
      
      <div className="mt-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  </div>
);

const NotificationSettings: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900">Email Notifications</h4>
            <p className="text-sm text-gray-600">Receive updates via email</p>
          </div>
          <input type="checkbox" defaultChecked className="rounded" />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900">Video Processing Complete</h4>
            <p className="text-sm text-gray-600">Notify when videos are ready</p>
          </div>
          <input type="checkbox" defaultChecked className="rounded" />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900">Publishing Alerts</h4>
            <p className="text-sm text-gray-600">Alerts for scheduled publishing</p>
          </div>
          <input type="checkbox" defaultChecked className="rounded" />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900">Performance Reports</h4>
            <p className="text-sm text-gray-600">Weekly performance summaries</p>
          </div>
          <input type="checkbox" className="rounded" />
        </div>
      </div>
    </div>
  </div>
);

const SecuritySettings: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
          <input type="password" className="w-full p-3 border border-gray-300 rounded-lg" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
          <input type="password" className="w-full p-3 border border-gray-300 rounded-lg" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
          <input type="password" className="w-full p-3 border border-gray-300 rounded-lg" />
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
            <p className="text-sm text-gray-600">Add an extra layer of security</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Enable
          </button>
        </div>
      </div>
    </div>
  </div>
);

const BillingSettings: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Current Plan</h3>
        <div className="flex items-center space-x-2 text-purple-600">
          <Crown className="w-5 h-5" />
          <span className="font-medium">Pro Plan</span>
        </div>
      </div>
      
      <div className="bg-purple-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-purple-900">Pro Plan</h4>
            <p className="text-sm text-purple-700">$79.99/month • Renews on Jan 15, 2024</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-purple-900">$79.99</p>
            <p className="text-sm text-purple-700">/month</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Payment Method</h4>
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
            <p className="text-sm text-gray-600">Expires 12/26</p>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Update Payment
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
            Cancel Subscription
          </button>
        </div>
      </div>
    </div>
  </div>
);

const APISettings: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">API Keys</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">ElevenLabs API Key</label>
          <input 
            type="password" 
            value="sk-***************************"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Pictory API Key</label>
          <input 
            type="password" 
            value="pk-***************************"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">YouTube API Key</label>
          <input 
            type="password" 
            value="ya-***************************"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">OpenAI API Key</label>
          <input 
            type="password" 
            value="sk-***************************"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
      
      <div className="mt-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Save API Keys
        </button>
      </div>
    </div>
  </div>
);

const PreferenceSettings: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Default Language</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>English (US)</option>
            <option>English (UK)</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>UTC (GMT+0)</option>
            <option>EST (GMT-5)</option>
            <option>PST (GMT-8)</option>
            <option>CET (GMT+1)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Default Video Quality</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>1080p (Full HD)</option>
            <option>720p (HD)</option>
            <option>480p (SD)</option>
          </select>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900">Auto-generate Thumbnails</h4>
            <p className="text-sm text-gray-600">Automatically create video thumbnails</p>
          </div>
          <input type="checkbox" defaultChecked className="rounded" />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900">Auto-publish</h4>
            <p className="text-sm text-gray-600">Automatically publish when videos are ready</p>
          </div>
          <input type="checkbox" className="rounded" />
        </div>
      </div>
    </div>
  </div>
);

export default Settings;