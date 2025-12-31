import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  NETWORK = 'network',
  CONTRACT = 'contract',
  CHAT = 'chat',
  COMMUNITY = 'community'
}