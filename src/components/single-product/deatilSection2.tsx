

export interface productdata{
    image:string,
}

export default function DetailSection({image}:productdata){

 return(
   <>

 
 
      <div className="w-full max-w-[300px] md:max-w-[270px] flex flex-col  shadow-md">
  
        <div
          className="w-full h-60 sm:h-72 md:h-80 rounded-[10px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

     
        <div className="w-full flex flex-row justify-between py-3 px-2  bg-white">
          <div className="flex flex-col space-y-1">
            <p className="text-sm sm:text-base font-medium">Library stool chair</p>
          </div>
          <p className="text-sm sm:text-lg font-bold">$99</p>
        </div>
      </div>
    </>


 );
}


