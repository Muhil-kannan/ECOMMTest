import React from 'react';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow bg-slate-50/50">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default App;