/* src/components/FeaturedProducts.tsx */
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    description: 'Bright, floral, and citrusy with a clean finish.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce7103ab?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Columbian Supremo',
    description: 'Rich, bold, and chocolaty with a nutty undertone.',
    image: 'https://images.unsplash.com/photo-1510972527921-ceb29d592631?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Sumatran Mandheling',
    description: 'Earthy, low-acid, and complex with a lingering finish.',
    image: 'https://images.unsplash.com/photo-1507963283580-ff6db975bd2e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="featured-products">
      <div className="container">
        <h2>Our Signature Blends</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button className="btn-primary">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
