import React from 'react';
import { Calendar, Clock, Youtube, Instagram, Facebook } from 'lucide-react';

const ScheduledContent: React.FC = () => {
  const scheduled = [
    {
      title: 'AI Revolution in Healthcare',
      platform: 'YouTube',
      time: 'Today, 2:00 PM',
      status: 'ready',
      icon: Youtube,
      color: 'red'
    },
    {
      title: 'Quick Tech Tips #47',
      platform: 'Instagram',
      time: 'Today, 6:00 PM',
      status: 'processing',
      icon: Instagram,
      color: 'pink'
    },
    {
      title: 'Weekly Tech Roundup',
      platform: 'Facebook',
      time: 'Tomorrow, 10:00 AM',
      status: 'ready',
      icon: Facebook,
      color: 'blue'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Scheduled Content</h3>
      
      <div className="space-y-4">
        {scheduled.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              item.color === 'red' ? 'bg-red-50' :
              item.color === 'pink' ? 'bg-pink-50' :
              'bg-blue-50'
            }`}>
              <item.icon className={`w-4 h-4 ${
                item.color === 'red' ? 'text-red-600' :
                item.color === 'pink' ? 'text-pink-600' :
                'text-blue-600'
              }`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{item.platform}</p>
              <div className="flex items-center space-x-1 text-xs text-gray-500 mt-2">
                <Clock className="w-3 h-3" />
                <span>{item.time}</span>
              </div>
            </div>
            
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              item.status === 'ready' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
            }`}>
              {item.status}
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
        Manage schedule
      </button>
    </div>
  );
};

export default ScheduledContent;