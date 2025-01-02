

const products = [
  {
    id: 1,
    image:"/images/Image2.png",
    alt: "Modern orange chair with geometric design"
  },
  {
    id: 2,
    image: "/images/card.png",
    alt: "White tufted accent chair"
  },
  {
    id: 3,
    image: "/images/Image.png",
    alt: "Classic white wooden chair"
  },
  {
    id: 4,
    image: "/images/02.png",
    alt: "Gray upholstered dining chair"
  },
  {
    id: 5,
    image: "/images/Image.png",
    alt: "White wooden dining chair"
  }
]

 export default function Section3() {

  return (
    <div className="bg-white py-12 md:py-16 ">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-4">
        <div className="relative">
  
          <div className="mb-8 lg:hidden text-center">
            <span className="text-[12px] uppercase tracking-[0.2em] text-color1 font-semibold">
              Explore new and popular styles
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="lg:row-span-2">
              <div  className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#F5F5F5] rounded-sm h-full">
                <img
                  src={products[0].image}
                  alt={products[0].alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 h-full">
              {products.slice(1).map((product) => (
                <div 
                  key={product.id} 
                  className="relative aspect-square overflow-hidden bg-[#F5F5F5] rounded-sm"
                >
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


