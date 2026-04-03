import React from 'react';

const products = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    description: 'Bright, floral, and citrusy with a clean finish.',
    image: 'https://bucket-production-1ed0.up.railway.app/assets/store_605bfbec-f04d-4263-adf3-5d525e8eea75/products/1766766070392-mystic_moon_set_1.png',
  },
  {
    id: 2,
    name: 'Columbian Supremo',
    description: 'Rich, bold, and chocolaty with a nutty undertone.',
    image: 'https://bucket-production-1ed0.up.railway.app/assets/store_605bfbec-f04d-4263-adf3-5d525e8eea75/products/1766766070392-mystic_moon_set_1.png',
  },
  {
    id: 3,
    name: 'Sumatran Mandheling',
    description: 'Earthy, low-acid, and complex with a lingering finish.',
    image: 'https://bucket-production-1ed0.up.railway.app/assets/store_605bfbec-f04d-4263-adf3-5d525e8eea75/products/1766766070392-mystic_moon_set_1.png',
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
