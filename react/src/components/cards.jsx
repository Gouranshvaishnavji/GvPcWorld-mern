import React from "react";
import './card.css';

export default function Card() {
  return (
    <div>
      <section className="featuredProducts">
        <h2>Featured Products</h2>
        <div className="product card">
          <img src="https://wallpapers.com/images/featured/desktop-lsjkr6wg7ctq97qv.jpg" alt="Pre built pc image" />
          <p>Product 1</p>
        </div>
        <div className="product card">
          <img src="https://wallpapers.com/images/featured/desktop-lsjkr6wg7ctq97qv.jpg" alt="Pre built pc image" />
          <p>Product 2</p>
        </div>
        <div className="product card">
          <img src="https://wallpapers.com/images/featured/desktop-lsjkr6wg7ctq97qv.jpg" alt="Pre built pc image" />
          <p>Product 3</p>
        </div>
        <div className="product card">
          <img src="https://wallpapers.com/images/featured/desktop-lsjkr6wg7ctq97qv.jpg" alt="Pre built pc image" />
          <p>Product 4</p>
        </div>
        <div className="product card">
          <img src="https://wallpapers.com/images/featured/desktop-lsjkr6wg7ctq97qv.jpg" alt="Pre built pc image" />
          <p>Product 5</p>
        </div>
      </section>

      <section className="special-offers">
        <h2>Special Offers</h2>
        <div className="offer card">
          <img src="https://wallpapers.com/images/featured/desktop-lsjkr6wg7ctq97qv.jpg" alt="Pre built pc image" />
          <p>Deal 1</p>
        </div>
        <div className="offer card">
          <img src="https://wallpapers.com/images/featured/desktop-lsjkr6wg7ctq97qv.jpg" alt="Pre built pc image" />
          <p>Deal 2</p>
        </div>
        <div className="offer card">
          <img src="https://wallpapers.com/images/featured/desktop-lsjkr6wg7ctq97qv.jpg" alt="Pre built pc image" />
          <p>Deal 3</p>
        </div>
        <div className="offer card">
          <img src="https://wallpapers.com/images/featured/desktop-lsjkr6wg7ctq97qv.jpg" alt="Pre built pc image" />
          <p>Deal 4</p>
        </div>
        <div className="offer card">
          <img src="https://wallpapers.com/images/featured/desktop-lsjkr6wg7ctq97qv.jpg" alt="Pre built pc image" />
          <p>Deal 5</p>
        </div>
        <div className="offer card">
          <img src="https://wallpapers.com/images/featured/desktop-lsjkr6wg7ctq97qv.jpg" alt="Pre built pc image" />
          <p>Deal 6</p>
        </div>
        <div className="offer card">
          <img src="https://wallpapers.com/images/featured/desktop-lsjkr6wg7ctq97qv.jpg" alt="Pre built pc image" />
          <p>Deal 7</p>
        </div>
      </section>
    </div>
  );
}
