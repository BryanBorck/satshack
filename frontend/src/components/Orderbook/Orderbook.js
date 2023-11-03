import React from 'react';

export default function Orderbook() {
  const orders = [
    { type: 'Sell', price: 1200, quantity: 5 },
    { type: 'Sell', price: 1150, quantity: 10 },
    { type: 'Sell', price: 1100, quantity: 15 },
    { type: 'Buy', price: 1050, quantity: 20 },
    { type: 'Buy', price: 1000, quantity: 25 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Order Book</h1>
      <div className="flex justify-between border-b border-gray-300 pb-2">
        <span className="text-lg font-medium">Type</span>
        <span className="text-lg font-medium">Price</span>
        <span className="text-lg font-medium">Quantity</span>
      </div>
      {orders.map((order, index) => (
        <div
          key={index}
          className={`flex justify-between py-2 ${order.type === 'Sell' ? 'text-red-500' : 'text-green-500'}`}
        >
          <span>{order.type}</span>
          <span>${order.price}</span>
          <span>{order.quantity}</span>
        </div>
      ))}
    </div>
  );
};