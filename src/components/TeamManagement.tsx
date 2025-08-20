import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  Crown, 
  Shield, 
  Eye, 
  Edit, 
  Trash2,
  Settings,
  Mail,
  Calendar,
  Activity
} from 'lucide-react';

const TeamManagement: React.FC = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@company.com',
      role: 'Admin',
      status: 'active',
      lastActive: '2 hours ago',
      joinDate: 'Jan 15, 2024',
      permissions: ['All Access'],
      avatar: 'JD'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah@company.com',
      role: 'Editor',
      status: 'active',
      lastActive: '1 day ago',
      joinDate: 'Feb 3, 2024',
      permissions: ['Create Content', 'Edit Scripts', 'Publish'],
      avatar: 'SW'
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike@company.com',
      role: 'Viewer',
      status: 'inactive',
      lastActive: '1 week ago',
      joinDate: 'Mar 12, 2024',
      permissions: ['View Analytics', 'View Content'],
      avatar: 'MC'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      email: 'emily@company.com',
      role: 'Editor',
      status: 'active',
      lastActive: '3 hours ago',
      joinDate: 'Feb 28, 2024',
      permissions: ['Create Content', 'Edit Scripts'],
      avatar: 'ER'
    }
  ];

  const roles = [
    {
      name: 'Admin',
      description: 'Full access to all features and settings',
      icon: Crown,
      color: 'purple',
      permissions: ['All Access', 'User Management', 'Billing', 'API Access']
    },
    {
      name: 'Editor',
      description: 'Can create and edit content, manage publishing',
      icon: Edit,
      color: 'blue',
      permissions: ['Create Content', 'Edit Scripts', 'Publish', 'View Analytics']
    },
    {
      name: 'Viewer',
      description: 'Read-only access to content and analytics',
      icon: Eye,
      color: 'green',
      permissions: ['View Content', 'View Analytics']
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Team Management</h1>
          <p className="text-gray-600">Manage team members, roles, and permissions</p>
        </div>
        <button
          onClick={() => setShowInviteModal(true)}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <UserPlus className="w-5 h-5" />
          <span>Invite Member</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Team Overview */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Team Members</h3>
            
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">{member.avatar}</span>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-gray-900">{member.name}</h4>
                        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                          member.role === 'Admin' ? 'bg-purple-50 text-purple-600' :
                          member.role === 'Editor' ? 'bg-blue-50 text-blue-600' :
                          'bg-green-50 text-green-600'
                        }`}>
                          {member.role === 'Admin' ? <Crown className="w-3 h-3" /> :
                           member.role === 'Editor' ? <Edit className="w-3 h-3" /> :
                           <Eye className="w-3 h-3" />}
                          <span>{member.role}</span>
                        </div>
                        <div className={`w-2 h-2 rounded-full ${
                          member.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      <p className="text-sm text-gray-600">{member.email}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                        <span>Last active: {member.lastActive}</span>
                        <span>Joined: {member.joinDate}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <Settings className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <Mail className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Roles & Permissions */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Stats</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Members</span>
                <span className="text-sm font-medium text-gray-900">4</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Members</span>
                <span className="text-sm font-medium text-green-600">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Admins</span>
                <span className="text-sm font-medium text-gray-900">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Editors</span>
                <span className="text-sm font-medium text-gray-900">2</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Roles</h3>
            
            <div className="space-y-3">
              {roles.map((role, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-6 h-6 rounded flex items-center justify-center ${
                      role.color === 'purple' ? 'bg-purple-50' :
                      role.color === 'blue' ? 'bg-blue-50' :
                      'bg-green-50'
                    }`}>
                      <role.icon className={`w-3 h-3 ${
                        role.color === 'purple' ? 'text-purple-600' :
                        role.color === 'blue' ? 'text-blue-600' :
                        'text-green-600'
                      }`} />
                    </div>
                    <h4 className="font-medium text-gray-900">{role.name}</h4>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{role.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.slice(0, 2).map((permission, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {permission}
                      </span>
                    ))}
                    {role.permissions.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{role.permissions.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Invite Member Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Invite Team Member</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="colleague@company.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Editor</option>
                  <option>Viewer</option>
                  <option>Admin</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Personal Message (Optional)</label>
                <textarea 
                  rows={3}
                  placeholder="Welcome to our team! Looking forward to working with you."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button 
                onClick={() => setShowInviteModal(false)}
                className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-700 font-medium"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowInviteModal(false)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Send Invite
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamManagement;