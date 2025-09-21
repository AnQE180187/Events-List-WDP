import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CardProduct from '../components/CardProduct';
import { products, categories } from '../mock/products';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="space-y-20">
      {/* Hero Banner */}
      <div className="text-center py-20 bg-dark rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold text-white leading-tight">
          AI-Powered Fashion Shopping
        </h1>
        <p className="text-xl text-gray mt-4 mb-8">
          Your style, redefined.
        </p>
        <Link to="/catalog">
          <Button>Shop Now</Button>
        </Link>
      </div>

      {/* Categories Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map(category => (
            <Link to="/catalog" key={category.id} className="group text-center">
              <div className="overflow-hidden rounded-lg">
                <img src={category.image} alt={category.name} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-primary transition">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/catalog">
                <Button>View All Products</Button>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;