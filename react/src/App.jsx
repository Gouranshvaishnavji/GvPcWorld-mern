import React from 'react';

const App = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to GV PC World</h1>
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </header>

      <main>
        <div className="productCategories">
          <button>CPU</button>
          <button>GPU</button>
          <button>Motherboard</button>
        </div>

        <section className="featuredProducts">
          <h2>Featured Products</h2>
          <div className="product card">Product 1</div>
          <div className="product card">Product 2</div>
        </section>

        <section className="special-offers">
          <h2>Special Offers</h2>
          <div className="offer card">deals 1</div>
          <div className="offer card">deals 2</div>
        </section>
      </main>

      <footer>
        <nav className="footerNav">
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
        <div className="social-media">
          <a href="https://www.facebook.com/">Facebook</a>
          <a href="https://twitter.com/">Twitter</a>
          <a href="https://www.instagram.com/">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
