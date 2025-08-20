import React from 'react';
import { Clock, CheckCircle, AlertCircle, Play } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      type: 'success',
      title: 'Video published to YouTube',
      description: '"Top 10 AI Tools for 2024" went live on YouTube',
      time: '2 minutes ago',
      icon: CheckCircle,
      color: 'green'
    },
    {
      type: 'processing',
      title: 'Video generation in progress',
      description: 'Creating "Future of Web Development" for TikTok',
      time: '5 minutes ago',
      icon: Play,
      color: 'blue'
    },
    {
      type: 'warning',
      title: 'Content source needs attention',
      description: 'TechCrunch RSS feed returned errors',
      time: '1 hour ago',
      icon: AlertCircle,
      color: 'orange'
    },
    {
      type: 'success',
      title: 'Batch processing completed',
      description: '5 videos created and scheduled for Instagram',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'green'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              activity.color === 'green' ? 'bg-green-50' :
              activity.color === 'blue' ? 'bg-blue-50' :
              'bg-orange-50'
            }`}>
              <activity.icon className={`w-4 h-4 ${
                activity.color === 'green' ? 'text-green-600' :
                activity.color === 'blue' ? 'text-blue-600' :
                'text-orange-600'
              }`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900">{activity.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              <div className="flex items-center space-x-1 text-xs text-gray-500 mt-2">
                <Clock className="w-3 h-3" />
                <span>{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
        View all activity
      </button>
    </div>
  );
};

export default RecentActivity;