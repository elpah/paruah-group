import { BusinessUnit } from '@/types/business.type';
import { Monitor, PlaneTakeoff, Home } from 'lucide-react';

export const BUSINESS_UNITS: BusinessUnit[] = [
  {
    id: 'systems',
    name: 'PARUAH Systems',
    title: 'Technology & Digital Transformation',
    description:
      "The Group's technology arm, providing IT solutions that improve operational efficiency and business performance. We specialize in software development and digital strategy.",
    icon: Monitor,
    iconBg: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    gradient: 'from-emerald-500/20 via-emerald-500/10 to-transparent',

    features: ['Software Development', 'IT Support', 'Digital Transformation', 'Tech Consulting'],
    color: 'from-blue-600 to-indigo-900',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'travel',
    name: 'ELPA Travel Consult',
    title: 'Professional Travel Advisory',
    description:
      'Delivering expert travel guidance for individuals and corporate clients with focus on accuracy and customer satisfaction across all major international destinations.',
    icon: PlaneTakeoff,
    gradient: 'from-amber-500/20 via-amber-500/10 to-transparent',
    iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600',
    features: ['Visa Assistance', 'Study Abroad', 'Flight Bookings', 'Travel Planning'],
    color: 'from-amber-500 to-orange-800',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'properties',
    name: 'EL-Gate Properties',
    title: 'Value-Driven Real Estate',
    description:
      'Comprehensive real estate services emphasizing transparency, compliance, and strategic investment. We manage a diverse portfolio of prime properties.',
    icon: Home,
    iconBg: 'bg-gradient-to-br from-emerald-600 to-emerald-700',
    gradient: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
    features: ['Property Sales', 'Land Acquisition', 'Property Management', 'Rentals'],
    color: 'from-emerald-600 to-teal-900',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
  },
];
