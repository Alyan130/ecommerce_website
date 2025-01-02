

export default function Formcategory() {
  return (
    <div className="w-full -mt-14">
      <div className="container max-w-6xl mx-auto px-12  bg-[#f4f4f4] py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-6 gap-8">
        
          <div className="flex items-center sm:items-start text-left flex-col sm:flex-row">
            <div className="sm:mr-4 mb-4 sm:mb-0">
              <img src="/icons/Vec.png" className="h-10 w-10 sm:h-15 sm:w-15 text-gray-700" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-poppins font-semibold">High Quality</h3>
              <p className="text-sm sm:text-base md:text-lg text-[#898989]">crafted from top materials</p>
            </div>
          </div>

        
          <div className="flex items-center sm:items-start text-left flex-col sm:flex-row">
            <div className="sm:mr-4 mb-4 sm:mb-0">
              <img src="/icons/Group.png" className="h-10 w-10 sm:h-15 sm:w-15 text-gray-700" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-poppins font-semibold mb-1">
                Warranty Protection
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[#898989]">Over 2 years</p>
            </div>
          </div>


          <div className="flex items-center sm:items-start text-left flex-col sm:flex-row">
            <div className="sm:mr-4 mb-4 sm:mb-0">
              <img src="/icons/Call.png" className="h-10 w-10 sm:h-15 sm:w-15 text-gray-700" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-poppins font-semibold mb-1">24 / 7 Support</h3>
              <p className="text-sm sm:text-base md:text-lg text-[#898989]">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
