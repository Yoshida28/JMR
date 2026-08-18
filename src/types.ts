export interface BrandFile {
  id: string;
  name: string;
  icon: string;
  iconColor: string;
  type: string;
  size: string;
  lastUpdated: string;
  tags: string[];
  description: string;
}

export interface TeamUseCase {
  id: string;
  category: 'Strategy' | 'Marketing' | 'Design' | 'Sales';
  title: string;
  description: string;
  imageUrl: string;
  badge: string;
  metrics?: string;
  details?: string;
}

export interface ArticleUpdate {
  id: string;
  tag: string;
  date: string;
  title: string;
  readTime: string;
  imageUrl: string;
  summary: string;
  content: string[];
}

export interface GenerationPrompt {
  id: string;
  label: string;
  prompt: string;
  response: string;
  toneScore: number;
  channels: string[];
}

export interface RoadmapMilestone {
  id: string;
  title: string;
  subtitle: string;
  quarter: string;
  year: number;
  monthIndex: number; // 0 to 11 for timeline positioning
  category: 'AI & Neural' | 'Ecosystem' | 'Governance' | 'Multimodal';
  status: 'In Beta' | 'In Development' | 'Architecture' | 'Planned';
  progress: number; // 0-100%
  description: string;
  impact: string;
  keyFeatures: string[];
  teamLead: string;
  tags: string[];
}
