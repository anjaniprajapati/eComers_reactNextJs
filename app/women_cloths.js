import React, { useEffect, useState } from 'react';

const Jewelery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")

      .then((result) => result.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div className='headind'>
        <h3>Women's clothing</h3>
      </div>
      <div className='productmainConter'>
        {data.map((item) => (
          <div className="product-container" key={item.id}>
            <div className="product">
              <img src={item.image} className="product-image" alt="Slide 2" />
              <div className="product-details">
                <h2 className="product-name">{item.title}</h2>
                <p className="product-price">${item.price}</p>
                {/* Removed the extra curly brace in the line above */}
                <div className="button-container">
                  <button className="btn btn-outline-white bg-info" type="submit">
                    Add Cart
                  </button>
                  <button className="btn btn-outline-white bg-warning" type="submit">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jewelery;