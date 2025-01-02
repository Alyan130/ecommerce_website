
import { GoChevronDown } from "react-icons/go";
import { RxQuestionMarkCircled } from "react-icons/rx";

export default function TopBar() {
  return (
    <div className="bg-[#272343] text-white py-2 px-5 hidden  md:flex justify-between items-center text-sm">
      <div>
        <span className="hidden sm:inline">Free Shipping On All Orders Over $50</span>
        <span className="sm:hidden">Free Shipping Over $50</span>
      </div> 
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <span>Eng</span>
          <GoChevronDown className="w-4 h-4 ml-1" />
        </div>
        <span>FAQs</span>
        <div className="flex items-center">
          <RxQuestionMarkCircled className="w-5 h-5 mr-1" />
          <span className="hidden sm:inline">Need Help</span>
        </div>
      </div>
    </div>
  )
}

