import React from 'react';

export default function OurBrand() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 md:py-14 sm:py-8">
      <div className="w-full  py-1 flex flex-row items-center justify-center ml-1 mb-6">
        <span className="text-[24px] md:text-[32px] font-semibold text-color1">
          What Makes Our Brand Different
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
   
        <div className="bg-gray-100 rounded-lg p-6 text-left hover:scale-105 transition-all duration-200 ease">
          <img src="/icons/Delivery.png" className="h-6 w-6 mb-4" >
          </img>
          <h3 className="text-xl text-[#007580] font-medium mb-2">Next Day as Standard</h3>
          <p className="text-[16px]  text-[#007580]">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
                     
       
        <div className="bg-gray-100 rounded-lg p-6 text-left hover:scale-105 transition-all duration-200 ease">
        <img src="/icons/Checkmark--outline.png" className="h-6 w-6 mb-4" >
          </img>
          <h3 className="text-xl text-[#007580] mb-2">Made by True Artisans</h3>
          <p className="text-[16px]  text-[#007580]">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

      
        <div className="bg-gray-100 rounded-lg p-6 text-left hover:scale-105 transition-all duration-200 ease">
        <img src="/icons/Purchase.png" className="h-6 w-6 mb-4" >
          </img>
          <h3 className="text-xl text-[#007580] font-medium mb-2">Unbeatable Prices</h3>
          <p className="text-[16px]  text-[#007580]">
            For our materials and quality  you wont find better prices anywhere
          </p>
        </div>

    
        <div className="bg-gray-100 rounded-lg p-6 text-left hover:scale-105 transition-all duration-200 ease">
        <img src="/icons/Sprout.png" className="h-6 w-6 mb-4" >
          </img>
          <h3 className="text-xl text-[#007580] font-medium mb-2">Recycled Packaging</h3>
          <p className="text-[16px]  text-[#007580]">
            We use 100% recycled to ensure our footprint is more manageable
          </p>
        </div>
      </div>
    </section>
  );
}
