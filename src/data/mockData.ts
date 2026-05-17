import { DollarSign, ShoppingBag, Users, Activity } from 'lucide-react';

export const stats = [
  {
    label: 'Total Revenue',
    value: '$45,231.89',
    trend: '+20.1% from last month',
    trendType: 'up' as const,
    icon: DollarSign,
  },
  {
    label: 'Total Orders',
    value: '+2,350',
    trend: '+180.1% from last month',
    trendType: 'up' as const,
    icon: ShoppingBag,
  },
  {
    label: 'New Customers',
    value: '+12,234',
    trend: '+19% from last month',
    trendType: 'up' as const,
    icon: Users,
  },
  {
    label: 'Active Sessions',
    value: '+573',
    trend: '-201 since last hour',
    trendType: 'down' as const,
    icon: Activity,
  },
];

export const salesData = [
  { month: 'Jan', sales: 4000, orders: 240 },
  { month: 'Feb', sales: 3000, orders: 198 },
  { month: 'Mar', sales: 2000, orders: 980 },
  { month: 'Apr', sales: 2780, orders: 390 },
  { month: 'May', sales: 1890, orders: 480 },
  { month: 'Jun', sales: 2390, orders: 380 },
  { month: 'Jul', sales: 3490, orders: 430 },
];

export const recentOrders = [
  {
    id: 'ORD-7392',
    customer: 'Olivia Martin',
    status: 'Completed' as const,
    amount: '$350.00',
    date: '2023-10-23',
  },
  {
    id: 'ORD-8271',
    customer: 'Jackson Lee',
    status: 'Processing' as const,
    amount: '$120.50',
    date: '2023-10-24',
  },
  {
    id: 'ORD-1234',
    customer: 'Isabella Nguyen',
    status: 'Shipped' as const,
    amount: '$299.00',
    date: '2023-10-24',
  },
  {
    id: 'ORD-9921',
    customer: 'William Kim',
    status: 'Cancelled' as const,
    amount: '$89.00',
    date: '2023-10-25',
  },
  {
    id: 'ORD-4432',
    customer: 'Sofia Davis',
    status: 'Completed' as const,
    amount: '$450.00',
    date: '2023-10-25',
  },
];