import React from 'react';
import { StatItem } from '../../types/dashboard';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const StatCard: React.FC<StatItem> = ({ label, value, trend, trendType, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-slate-500">{label}</span>
        <div className="p-2 bg-slate-50 rounded-lg">
          <Icon size={20} className="text-slate-600" />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        <p className={cn(
          "text-xs mt-1 font-medium",
          trendType === 'up' ? "text-emerald-600" : "text-rose-600"
        )}>
          {trend}
        </p>
      </div>
    </div>
  );
};