"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Navbar from "./links";
import { RiMenuLine } from "react-icons/ri";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { useAppSelector } from "@/app/store/hook";

export default function Header() {
  const cart = useAppSelector((state) => state.cart);
  return (
    <>
      <header className="bg-color3 border-b h-[84px] py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md flex items-center justify-center">
                <img src="/icons/Vector.png" alt="Logo" />
              </div>
              <span className="text-xl md:text-[26px] font-medium text-color1">
                Comforty
              </span>
            </Link>

            <div className="hidden md:flex flex-1 justify-center"></div>

            <Link href={"/cart"}>
              {" "}
              <button className="hidden md:flex items-center justify-center w-24 md:w-36 h-11 gap-3 bg-white">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-[12px] font-medium text-color1">
                  Cart
                </span>
                {cart.length > 0 && (
                  <div className="w-6 h-6 text-sm rounded-[50%] text-white bg-iconcolor flex items-center justify-center">
                    {cart.length}
                  </div>
                )}
              </button>
            </Link>

            <Sheet>
              <SheetTrigger>
                <RiMenuLine size={28} className="font-bold md:hidden" />
              </SheetTrigger>

              <SheetContent className="flex flex-col items-center py-20 px-6 bg-white">
                <ul className="mb-6 text-center">
                  <Link href={"/"}>
                    <li className="text-[#636270] text-[18px] font-medium hover:text-btncolor mb-2">
                      Home
                    </li>
                  </Link>
                  <Link href={"/cart"}>
                    <li className="text-[#636270] text-[18px]  font-medium  hover:text-btncolor mb-2">
                      Shop
                    </li>
                  </Link>
                  <Link href={"/product"}>
                    <li className="text-[#636270] text-[18px] font-medium  hover:text-btncolor mb-2">
                      Product
                    </li>
                  </Link>
                  <Link href={"/faq"}>
                    <li className="text-[#636270] text-[18px] font-medium  hover:text-btncolor mb-2">
                      Pages
                    </li>
                  </Link>
                  <Link href={"/about"}>
                    <li className="text-[#636270] text-[18px] font-medium  hover:text-btncolor mb-2">
                      About
                    </li>
                  </Link>
                  <Link href={"/contact"}>
                    <li className="text-[#636270] text-[18px] font-medium  hover:text-btncolor mb-2">
                      Contact
                    </li>
                  </Link>
                </ul>
                <p className="text-[18px] text-center">
                  <span className="text-[#636270]">Contact:</span> (808)
                  555-0111
                </p>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  );
}
