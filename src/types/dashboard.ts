import { LucideIcon } from 'lucide-react';

export type TrendType = 'up' | 'down' | 'neutral';

export interface StatItem {
  label: string;
  value: string;
  trend: string;
  trendType: TrendType;
  icon: LucideIcon;
}

export interface OrderItem {
  id: string;
  customer: string;
  status: 'Completed' | 'Processing' | 'Cancelled' | 'Shipped';
  amount: string;
  date: string;
}

export interface SalesData {
  month: string;
  sales: number;
  orders: number;
}