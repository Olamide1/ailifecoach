import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Sparkles, Bot } from 'lucide-react';

export default function Navbar() {
  const isLoggedIn = false; // Replace with actual auth logic

  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Bot className="h-6 w-6" />
          <span className="font-bold">LifeCoachAI</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          {isLoggedIn ? (
            <>
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link to="/chat">
                <Button variant="ghost">Chat</Button>
              </Link>
              <Link to="/billing">
                <Button variant="ghost">Billing</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/auth">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/auth">
                <Button>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}