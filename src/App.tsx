import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import LandingPage from '@/pages/LandingPage';
import Dashboard from '@/pages/Dashboard';
import Chat from '@/pages/Chat';
import Billing from '@/pages/Billing';
import Auth from '@/pages/Auth';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-background">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;