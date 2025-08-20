import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Rss, Video, Share, BarChart3, Settings, User, Menu, Zap, Crown, Brain, BookTemplate as Template, Users, Code, Rocket, Cog, Lightbulb, HelpCircle, CreditCard, Palette, Shield } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const navItems = [
    { icon: Home, label: 'Smart Dashboard', path: '/' },
    { icon: Rocket, label: 'Quick Setup', path: '/setup' },
    { icon: Cog, label: 'AutoPilot Settings', path: '/autopilot' },
    { icon: Rss, label: 'Content Sources', path: '/sources' },
    { icon: Video, label: 'Video Creation', path: '/create' },
    { icon: Share, label: 'Publishing', path: '/publish' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: Brain, label: 'AI Optimization', path: '/ai-optimization' },
    { icon: Template, label: 'Templates', path: '/templates' },
    { icon: Lightbulb, label: 'Prompt Generator', path: '/prompt-generator' },
    { icon: Users, label: 'Team', path: '/team' },
    { icon: Code, label: 'API & Webhooks', path: '/api' },
    { icon: HelpCircle, label: 'AI Help Center', path: '/help' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: CreditCard, label: 'Billing', path: '/billing' },
    { icon: Palette, label: 'White Label', path: '/white-label' },
    { icon: Shield, label: 'Licensing', path: '/licensing' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-lg border-r border-gray-200 transition-all duration-300 z-50 ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className={`flex items-center ${isOpen ? 'space-x-3' : 'justify-center'}`}>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          {isOpen && (
            <div>
              <h1 className="text-xl font-bold text-gray-900">VideoFlow</h1>
              <div className="flex items-center space-x-1 text-xs text-purple-600">
                <Crown className="w-3 h-3" />
                <span className="font-medium">AutoPilot Active</span>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={onToggle}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {isOpen && <span className="font-medium">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;