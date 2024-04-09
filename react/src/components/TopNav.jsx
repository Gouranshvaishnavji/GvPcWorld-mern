import React from 'react';
import { Link } from 'react-router-dom';
import './topnav.css';
import Cateegories from './Cateegories';
export default function TopNav() {
    return (
    <>     
         
<div id="header">
    <Link to={"/"}><h1><span id='pc'>PC</span> World</h1></Link>

    <div className="nav-section">
        <Link to={"/login"}><button>Login/SignUp</button></Link>
        <Link to={"/cart"}><button>Cart</button></Link>
    </div>
</div>


<Cateegories/>


         
  </>
  )
}

