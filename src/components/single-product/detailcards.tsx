import detaildata from "@/Productdata/cards";
import DetailSection from "./deatilSection2";

export default function DetailCards(){
   return(
   <>
    <section className="py-16 md:py-20 mt-8 md:mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2">
            <div className="w-full py-1 flex flex-row items-center md:justify-between justify-center mb-2 md:mb-5">
                <span className="text-[20px] md:text-[28px] tracking-[0.1em] font-semibold text-color1 uppercase mb-7">Featured Products</span>
                <p className="mr-4 text-black text-xl font-bold hidden md:block underline decoration-black decoration-2 underline-offset-4">View all</p>

            </div>
            <div className="w-full flex flex-row  justify-center lg:justify-between gap-4 flex-wrap">
                {detaildata.map((e,index)=>
                <DetailSection
                image={e.image}
                key={index}
               />
)}
            </div>
        </div>
        </section>
   </>
   );
}


  