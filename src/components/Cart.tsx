import { observer, Observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import cartStore from '../store/cartStore';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart: React.FC = observer(() => {
  return (
    <div className="cartPage">
      <div className="cartWrapper">
        <div className="cartHeader">
          <div className="cartTitle">
            <h4>cartProudcts</h4>
          </div>
          <div className="priceProduct">
            <h4>price: {cartStore.price.toFixed(2)}$</h4>
          </div>
        </div>
        <div className="productsList">
          {cartStore.cartProductsStore.length > 0 ? (
            cartStore.cartProductsStore.map((product, index) => {
              return (
                <div className="product" key={product.id}>
                  <div className="imgCartProduct">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="productCont">
                    <div className="titleCartProduct">
                      <h5>{product.title.slice(0, 19)}</h5>
                    </div>
                    <div className="priceCartProduct">
                      <h5>{product.price}$</h5>
                    </div>
                    <div className="cartControllers">
                      <button onClick={() => cartStore.decrement(product)}>
                        -
                      </button>

                      <h5>{cartStore.cartProductsStore[index].count}</h5>

                      <button onClick={() => cartStore.increment(product)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="deleteProduct">
                    <div className="trash">
                      <FaRegTrashAlt
                        onClick={() =>
                          cartStore.deleteProductCart(product)
                        }
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className='emptyCart'>cart is empty :(</h2>
          )}

          {cartStore.cartProductsStore.length > 0 ? (
            <>
              <div className="clearCartProducts">
                <button className="buyProduct">
                  <Link to="/buyProducts">оформит заказ</Link>
                </button>
                <button
                  className="clearProductsBtn"
                  onClick={() => cartStore.clearCart()}
                >
                  clear products
                </button>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
});

export default Cart;
