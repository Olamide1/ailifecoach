export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  subscription: 'free' | 'pro' | 'enterprise';
  createdAt: Date;
}

export interface Conversation {
  id: string;
  userId: string;
  messages: Message[];
  topic: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  messagesPerDay: number;
  isPopular?: boolean;
}