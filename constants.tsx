import React from 'react';
import { Twitter, Youtube, Send, Globe } from 'lucide-react';
import { SocialLink } from './types';

export const LINKS = {
  WEBSITE: "https://tpftechnology.com",
  STON_FI: "https://app.ston.fi/pools/EQC01e9SKCDSIh3TD2J-vZUHPPjBMWuofBbb8l4MF1GLKLRi",
  TELEGRAM: "https://t.me/ControlArtificialIntelligence",
  TWITTER: "https://x.com/_controlai_?s=11",
  YOUTUBE: "https://www.youtube.com/channel/UCPc4yjrNC7znmuG2ahkHhvg",
};

export const CONTRACT_ADDRESS = "EQA_6ibncej9ARxYg9AweinRXo5Gl_ONkvmfkg8p8RAoLLVV";

export const SOCIALS: SocialLink[] = [
  {
    platform: "Website",
    url: LINKS.WEBSITE,
    icon: <Globe className="w-5 h-5" />,
  },
  {
    platform: "Telegram",
    url: LINKS.TELEGRAM,
    icon: <Send className="w-5 h-5" />,
  },
  {
    platform: "X (Twitter)",
    url: LINKS.TWITTER,
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    platform: "YouTube",
    url: LINKS.YOUTUBE,
    icon: <Youtube className="w-5 h-5" />,
  },
];

export const IMAGES = {
  // Background abstract network
  HERO_BRAIN: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
};