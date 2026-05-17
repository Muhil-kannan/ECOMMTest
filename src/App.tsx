import React from 'react';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow bg-slate-50/50">
        <Dashboard />
      </main>
      <footer className="border-t bg-white py-8">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ECOMMSTORE. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;