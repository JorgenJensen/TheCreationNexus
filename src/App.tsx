import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SmartDashboard from './components/SmartDashboard';
import AutomationSetup from './components/AutomationSetup';
import AutoPilotSettings from './components/AutoPilotSettings';
import ContentSources from './components/ContentSources';
import VideoCreation from './components/VideoCreation';
import Publishing from './components/Publishing';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import UserProfile from './components/UserProfile';
import AIOptimization from './components/AIOptimization';
import AutomationTemplates from './components/AutomationTemplates';
import TeamManagement from './components/TeamManagement';
import APIWebhooks from './components/APIWebhooks';
import PromptGenerator from './components/PromptGenerator';
import AIHelpCenter from './components/AIHelpCenter';
import BillingDashboard from './components/BillingDashboard';
import WhiteLabelDashboard from './components/WhiteLabelDashboard';
import LicensingControl from './components/LicensingControl';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
          <Routes>
            <Route path="/" element={<SmartDashboard />} />
            <Route path="/setup" element={<AutomationSetup />} />
            <Route path="/autopilot" element={<AutoPilotSettings />} />
            <Route path="/sources" element={<ContentSources />} />
            <Route path="/create" element={<VideoCreation />} />
            <Route path="/publish" element={<Publishing />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/ai-optimization" element={<AIOptimization />} />
            <Route path="/templates" element={<AutomationTemplates />} />
            <Route path="/team" element={<TeamManagement />} />
            <Route path="/api" element={<APIWebhooks />} />
            <Route path="/prompt-generator" element={<PromptGenerator />} />
            <Route path="/help" element={<AIHelpCenter />} />
            <Route path="/billing" element={<BillingDashboard />} />
            <Route path="/white-label" element={<WhiteLabelDashboard />} />
            <Route path="/licensing" element={<LicensingControl />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;