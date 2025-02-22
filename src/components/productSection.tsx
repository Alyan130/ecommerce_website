"use client";
import { useEffect, useState } from "react";
import ProductCard from "./productcard";

interface pdata{
  id:number,
  image:string,
  tag?:string,
 cutprice?:string,
 name:string,
 price:number,
}


export default function Products() {
const [data, setData]=useState<pdata[]>([]);

  useEffect(()=>{
    const fetchdata = async () =>{
      try{
const res = await fetch("http://localhost:3000/api/products");
const products:pdata[]=await res.json();
const newData= products.slice(0,8);
setData(newData);    
} catch (error) {
  console.error("Error fetching products:", error);
}
  }
  fetchdata();
},[])
  return (
    <>
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="w-full py-1 flex items-center justify-center mb-2 md-mb-5">
            <span className="text-[24px] md:text-[32px] font-semibold text-color1">
              Products
            </span>
          </div>

          <div className="py-6 px-4 sm:px-2 md:px-0  w-full flex flex-wrap gap-x-10 gap-y-10 justify-center md:justify-center">
            {data.map((e) => (
              
              <ProductCard
              key={e.id}
              id={e.id}
              name={e.name}
              price={e.price}
              image={e.image}
              tag={e.tag}
              cutprice={e.cutprice}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
