


import React from 'react';

export default function OurPopularProducts() {
  const products = [
    {
      name: 'The Poplar suede sofa',
      price: '$99.00',
      image: '/images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg',
    },
    {
      name: 'The dandy chair',
      price: '$99.00',
      image: '/images/Parent.png',
    },
    {
      name: 'The Dandy chair',
      price: '$99.00',
      image: '/images/Parent2.png',
    },
  ];

  return (
    <section className="max-w-7xl   ml-0  md:ml-16  mx-auto px-4 sm:px-6 lg:px-1 mt-14 md:mt-12 mb-4 lg:mb-10">
      <div className="w-full py-1 flex flex-row items-center justify-center md:justify-between mb-5">
        <span className="text-[24px] md:text-[32px] font-semibold text-color1">
        Our popular Products
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
        {products.map((product, index) => (
          <div
            key={product.name}
            className={`rounded-lg overflow-hidden ${
              index === 0 ? 'lg:col-span-5' : 'lg:col-span-3'
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="py-2">
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


