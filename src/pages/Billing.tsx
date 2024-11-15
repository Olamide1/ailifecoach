import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { plans } from '@/lib/sample-data';

export default function Billing() {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Choose Your Plan</h1>
        <p className="text-muted-foreground mt-2">
          Get the coaching support you need with our flexible pricing options
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.id} className={`flex flex-col ${plan.isPopular ? 'border-primary' : ''}`}>
            {plan.isPopular && (
              <div className="rounded-t-lg bg-primary py-1 text-center text-sm font-medium text-primary-foreground">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>
                {plan.messagesPerDay === -1
                  ? 'Unlimited coaching sessions'
                  : `${plan.messagesPerDay} coaching sessions per day`}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mt-2 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex">
                    <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                    <span className="ml-3 text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.isPopular ? 'default' : 'outline'}
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}