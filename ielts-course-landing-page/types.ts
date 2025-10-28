// FIX: Import React to provide types for JSX and ComponentProps.
import React from 'react';

export interface Testimonial {
  name: string;
  title: string;
  avatarText: string;
  quote: string;
  score: string;
}

export interface CourseFeature {
  title: string;
  description: string;
}

export interface Wilaya {
  value: string;
  label: string;
}

export interface TargetAudience {
  // FIX: Replaced JSX.Element with React.ReactElement to resolve namespace issue.
  icon: (props: React.ComponentProps<'svg'>) => React.ReactElement;
  title: string;
  description: string;
}

export interface CourseBenefit {
  // FIX: Replaced JSX.Element with React.ReactElement to resolve namespace issue.
  icon: (props: React.ComponentProps<'svg'>) => React.ReactElement;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
