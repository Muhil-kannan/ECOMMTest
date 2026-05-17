import { recentOrders } from '../../data/mockData';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const statusStyles = {
  Completed: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Processing: "bg-amber-50 text-amber-700 border-amber-100",
  Shipped: "bg-blue-50 text-blue-700 border-blue-100",
  Cancelled: "bg-rose-50 text-rose-700 border-rose-100",
} as const;

export const OrdersTable = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">Recent Orders</h3>
        <p className="text-sm text-slate-500">A list of the most recent transactions</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {recentOrders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">{order.id}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{order.customer}</td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "px-2.5 py-0.5 rounded-full text-xs font-medium border",
                    statusStyles[order.status as keyof typeof statusStyles]
                  )}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 font-medium">{order.amount}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};