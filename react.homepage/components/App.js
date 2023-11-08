import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Carousel />
        <h2 className="produtos">Produtos recomendados</h2>
        {/* Use ProductCard component here */}
        <ProductCard />
        <h2 className="produtos">Produtos mais vendidos</h2>
        {/* Use another instance of ProductCard component here */}
        <ProductCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;