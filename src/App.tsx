import React from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { StatCard } from './components/dashboard/StatCard';
import { SalesChart } from './components/dashboard/SalesChart';
import { OrdersTable } from './components/dashboard/OrdersTable';
import { DollarSign, ShoppingCart, Users, Activity, Search, Bell } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
            <p className="text-slate-500">Welcome back, here's what's happening today.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
              />
            </div>
            <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            label="Total Revenue" 
            value="$128,430.00" 
            trend="+12.5% from last month" 
            trendType="up" 
            icon={DollarSign} 
          />
          <StatCard 
            label="Total Orders" 
            value="4,320" 
            trend="+8.2% from last month" 
            trendType="up" 
            icon={ShoppingCart} 
          />
          <StatCard 
            label="New Customers" 
            value="892" 
            trend="-3.1% from last month" 
            trendType="down" 
            icon={Users} 
          />
          <StatCard 
            label="Active Sessions" 
            value="1,204" 
            trend="+24.8% from last month" 
            trendType="up" 
            icon={Activity} 
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div className="lg:col-span-1">
            <div className="bg-indigo-600 rounded-xl p-6 text-white h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Pro Plan Upgrade</h3>
                <p className="text-indigo-100 text-sm mb-4">Get access to advanced analytics and unlimited product listings.</p>
              </div>
              <button className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-50 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
          <div className="lg:col-span-3">
            <OrdersTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;