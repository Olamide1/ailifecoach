import { Plan, User, Conversation } from './types';

export const sampleCredentials = {
  email: 'demo@example.com',
  password: 'demo1234',
};

export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    features: [
      '5 coaching sessions per day',
      'Basic goal tracking',
      'Text-based conversations',
      'Email support',
    ],
    messagesPerDay: 5,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    features: [
      'Unlimited coaching sessions',
      'Advanced goal tracking',
      'Priority support',
      'Custom action plans',
      'Progress analytics',
    ],
    messagesPerDay: -1,
    isPopular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    features: [
      'Everything in Pro',
      'Custom AI model training',
      'Team collaboration',
      'API access',
      'Dedicated account manager',
    ],
    messagesPerDay: -1,
  },
];

export const sampleUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'demo@example.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
  subscription: 'free',
  createdAt: new Date('2024-01-01'),
};

export const sampleConversations: Conversation[] = [
  {
    id: '1',
    userId: '1',
    topic: 'Career Development',
    messages: [
      {
        id: '1',
        content: "I'm feeling stuck in my current job. How can I make progress?",
        role: 'user',
        timestamp: new Date('2024-03-20T10:00:00'),
      },
      {
        id: '2',
        content: "Let's break this down together. What aspects of your current role do you find most challenging? Understanding this will help us create a targeted development plan.",
        role: 'assistant',
        timestamp: new Date('2024-03-20T10:00:05'),
      },
    ],
    createdAt: new Date('2024-03-20T10:00:00'),
  },
  {
    id: '2',
    userId: '1',
    topic: 'Work-Life Balance',
    messages: [
      {
        id: '3',
        content: "I'm working too much and feeling burnt out. Need help finding balance.",
        role: 'user',
        timestamp: new Date('2024-03-19T15:30:00'),
      },
      {
        id: '4',
        content: "I hear you. Burnout is a serious concern. Let's start by mapping out your typical day and identify areas where we can create boundaries and introduce self-care practices.",
        role: 'assistant',
        timestamp: new Date('2024-03-19T15:30:05'),
      },
    ],
    createdAt: new Date('2024-03-19T15:30:00'),
  },
];