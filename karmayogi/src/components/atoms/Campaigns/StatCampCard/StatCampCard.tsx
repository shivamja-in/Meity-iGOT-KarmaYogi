import React from 'react';

export default function StatCampCard() {
  const campaignTitle = "Buy at 392 Only";
  const targetedUsers = 16000;
  const dateTime = "12:00 AM 12/07/2025";
  
  return (
    <div className='bg-black text-white p-6 rounded-lg shadow-lg w-full max-w-2xl'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-4xl font-semibold'>{campaignTitle}</h1>
        <span className='text-lg'>{dateTime}</span>
      </div>
      <div className='flex items-center mb-6'>
        {/* Icon for users */}
        <div className='mr-2'>
          {/* Replace with user icon */}
          <span className='text-lg'>👥</span>
        </div>
        <span className='text-lg'>{targetedUsers}</span>
      </div>
      <div className='bg-gray-800 p-4 rounded-lg'>
        {/* Funnel Graph Placeholder */}
        <div className='bg-purple-700 p-4 rounded-lg'>
          <div className='flex justify-between text-black'>
            <div className='text-center'>
              <span className='block text-xl font-semibold'>1,000</span>
              <span>Visited Site</span>
            </div>
            <div className='text-center'>
              <span className='block text-xl font-semibold'>900</span>
              <span>Added to Cart</span>
            </div>
            <div className='text-center'>
              <span className='block text-xl font-semibold'>600</span>
              <span>Initiated Checkout</span>
            </div>
            <div className='text-center'>
              <span className='block text-xl font-semibold'>400</span>
              <span>Purchased</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
