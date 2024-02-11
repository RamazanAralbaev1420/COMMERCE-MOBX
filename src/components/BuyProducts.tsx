import { observer } from 'mobx-react-lite';
import React from 'react';
import { Navigate, useNavigate } from 'react-router';
import cartStore from '../store/cartStore';

const BuyProducts: React.FC = observer(() => {
  const navigate = useNavigate();
  function handleBuy() {
    alert('Success');
    cartStore.cartProductsStore.length = 0;
    navigate('/');
  }

  function handleCancel() {
    alert('Cancelled');
  }
  return (
    <div className="buyProductPage">
      <div className="leftContent">
        <input type="text" placeholder="name" required />
        <input type="number" placeholder="phone" required />
        <input type="text" placeholder="card number" required />
        <div className="cash">
          <label htmlFor="">
            <input type="radio" placeholder="cash" name="cash" />
            <span>cash</span>
          </label>

          <label htmlFor="">
            <input type="radio" placeholder="card" name="cash" checked />
            <span>card</span>
          </label>
        </div>
        <div className="priceProducts">
          <h5>Products count: {cartStore.cartProductsStore.length}</h5>
          <h5>Price: {cartStore.price}$</h5>
        </div>
        <div className="buyActions">
          <button type="submit" onClick={handleBuy}>
            buy
          </button>
          <button onClick={handleCancel}>cancel</button>
        </div>
      </div>
    </div>
  );
});

export default BuyProducts;
