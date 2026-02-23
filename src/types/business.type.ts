import { LucideIcon } from 'lucide-react';

export type BusinessUnit = {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  gradient: string;
  features: string[];
  color: string;
  image: string;
};
