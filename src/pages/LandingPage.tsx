import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Target, Sparkles, BarChart } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your Personal AI Life Coach
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Transform your life with personalized guidance, actionable insights, and continuous support from your AI companion.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/auth">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                    Try Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Bot className="h-64 w-64 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-gray-50/50 dark:bg-gray-950/50 py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group space-y-3">
              <Target className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Goal Setting</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Set and track meaningful goals with AI-powered guidance and accountability.
              </p>
            </div>
            <div className="group space-y-3">
              <Sparkles className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Personal Growth</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Get personalized insights and actionable advice for continuous improvement.
              </p>
            </div>
            <div className="group space-y-3">
              <BarChart className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Progress Tracking</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Visualize your journey with detailed analytics and milestone tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}