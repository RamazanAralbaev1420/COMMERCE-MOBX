import React from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { observer } from 'mobx-react-lite';
import cartStore from '../store/cartStore';

<IoCartOutline />
const Header:React.FC = observer(() => {
  return (
    <div className="header">
      <div className="logo">
        <h2>
          <Link to="/">MARKET</Link>
        </h2>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="cart">
        <Link to="/cart">
          <IoCartOutline />
        </Link>
        <span className="countProduct">{cartStore.cartProductsStore.length}</span>
      </div>
    </div>
  )
})

export default Header;
