"use client"
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
  
  
export default  function FeaturedProdoucts(){
const [data, setData]=useState<pdata[]>([]);

useEffect(()=>{
    const fetchdata = async () =>{
        try{
    const res =await fetch("/api/products")
    const products = await res.json();
    const newData=products.slice(0,4);
    setData(newData);
        }
        catch (error) {
            console.error("Error fetching products:", error);
    }
}
    fetchdata();
},[])

    return(
        <>
        <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="w-full py-1 flex flex-row items-center justify-center md:justify-between ml-1 mb-2 md:mb-5">
                <span className="text-[24px] md:text-[32px] font-semibold text-color1">Featured Products</span>
            </div>
            <div className="w-full py-6 px-4 sm:px-2  md:px-2 flex flex-row space-y-2 md:space-y-0 md:justify-between lg:justify-between gap-4 flex-wrap lg:flex-nowrap">
                {data.map((e)=>
               <ProductCard
               key={e.id}
                id={e.id}
                name={e.name}
                price={e.price}
                image={e.image}
                tag={e.tag}
                cutprice={e.cutprice}
               />
)}
            </div>



        </div>
        </section>
        </>
    );
}


