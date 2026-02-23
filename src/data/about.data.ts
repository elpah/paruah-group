import type { AboutType } from '@/types/about.type';
import { Target, Briefcase, TrendingUp, MapPin } from 'lucide-react';

export const ABOUT_DATA: AboutType[] = [
  {
    icon: Target,
    label: 'Strategic Interests',
    value: 'Technology, Real Estate, Travel',
  },
  {
    icon: TrendingUp,
    label: 'Market Focus',
    value: 'High-Growth Sectors',
  },
  {
    icon: Briefcase,
    label: 'Management',
    value: 'Professional & Independent',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Ghana, West Africa',
  },
];
