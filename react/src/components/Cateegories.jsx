import React from "react";
import './cate.css';
export default function Cateegories() {
    return <div className="productCategories">
    <div id="search-section">
        <input type="text" placeholder="Search for products... " />
    </div>
    <div>
    <button>Custum</button>
    <button>Pre-built</button>
    <button>More products</button>
    </div>

  </div>;
};