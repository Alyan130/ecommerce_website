

export default function Section1() {
    return (
      <>
        <section className="w-full py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="w-full flex flex-col md:flex-row items-center gap-4">
          
              <div className="pl-4 md:pl-16 w-full md:w-[50%] h-[400px] sm:h-[430px] md:h-[450px] lg:h-[478px] flex flex-col items-start justify-between bg-[#007580] text-white py-8">
                <div className="w-[90%]">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    About Us - Comforty
                  </h2>
                  <p className="text-[16px] md:text-[18px] mt-4">
                    At Comforty, we believe that the right chair can transform your
                    space and elevate your comfort. Specializing in ergonomic design,
                    premium materials, and modern aesthetics, we craft chairs that
                    seamlessly blend style with functionality.
                  </p>
                </div>
                <div className="relative w-44 h-11 mt-6 bg-[#F9F9F9] bg-opacity-20">
                  <button className="absolute inset-0 text-white bg-white/10 hover:bg-white/30 px-4 py-2 rounded-lg text-[14px] md:text-[16px]">
                    View collection
                  </button>
                </div>
              </div>
  
              <div
                className="w-full md:w-[50%] h-[230px] md:h-[478px] bg-cover bg-center"
                style={{ backgroundImage: `url("/images/Image.png")` }}
              ></div>
            </div>
          </div>
        </section>
      </>
    );
  }
  