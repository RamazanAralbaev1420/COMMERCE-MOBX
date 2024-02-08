import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IProducts } from '../types/data';
import { Loader } from 'rsuite';
import { IoCartOutline } from 'react-icons/io5';
import { observer } from 'mobx-react-lite';
import cartStore from '../store/cartStore';

const API = 'https://fakestoreapi.com/products';

const Home: React.FC = observer(() => {
  const [data, setData] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="load">
          <Loader size="lg" />
        </div>
      ) : (
        <div className="wrapper">
          {data.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="title">
                  <h5>{item.title}</h5>
                </div>
                <div className="imageCard">
                  <img src={item.image} alt="" />
                </div>
                <div className="info">
                  <h5> price: {item.price}$</h5>
                  <button
                    onClick={() => cartStore.addCart(item)}
                    className="addCart"
                  ></button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});

export default Home;
