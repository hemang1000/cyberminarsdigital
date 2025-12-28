import { createClient } from '@supabase/supabase-js';

// Supabase credentials
const supabaseUrl = 'https://blbkgtyujiwhbrtccsll.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsYmtndHl1aml3aGJydGNjc2xsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MzYxMTUsImV4cCI6MjA4MTAxMjExNX0.cneCv-JNaeam6r73Ce4pD3MUUFHuBhrHdtMl9SPNGes';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// TypeScript interfaces for database tables
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image_url: string;
  features: string[];
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar_url?: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface Portfolio {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  metric: string;
  metricLabel: string;
  image_url?: string;
  technologies?: string[];
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface Team {
  id: string;
  name: string;
  position: string;
  bio?: string;
  image_url?: string;
  linkedin_url?: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image?: string;
  author: string;
  published_date: string;
  tags?: string[];
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface Settings {
  id: string;
  key: string;
  value: any;
  updated_at: string;
}