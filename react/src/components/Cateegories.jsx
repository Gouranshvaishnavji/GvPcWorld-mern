import React from "react";
import './cate.css';
import { Link } from "react-router-dom";
export default function Cateegories() {
    return <div className="productCategories">
    <div id="search-section">
        <input type="text" placeholder="Search for products... " />
    </div>
    <div>
    <button ><Link to={"/custompc"}>Custom</Link></button>
    <button>Pre-built</button>
    <button>More products</button>
    </div>

  </div>;
};