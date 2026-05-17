import React from 'react';
import ProductGrid from '../components/product/ProductGrid';
import { mockProducts } from '../data/mockProducts';

const Dashboard: React.FC = () => {
  return (
    <main className="flex-1">
      <div className="container-custom py-8 sm:py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Featured Collection
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Explore our curated selection of high-quality products designed for your lifestyle.
          </p>
        </div>

        <ProductGrid products={mockProducts} />
      </div>
    </main>
  );
};

export default Dashboard;