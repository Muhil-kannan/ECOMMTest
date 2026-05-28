import React from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <button className="lg:hidden p-2 -ml-2" aria-label="Open menu">
              <Menu className="h-6 w-6 text-slate-600" />
            </button>
            <a href="/" className="text-xl font-bold tracking-tight text-slate-900">
              ECOMM<span className="text-blue-600">SITE</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {['Shop', 'New Arrivals', 'Categories', 'Sale'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors relative" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;