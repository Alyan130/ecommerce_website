
import Link from "next/link";

export default function Navbar() {
    return (
      <>
     <nav className="hidden md:block w-full h-[74px] py-6 border-b-2 border-slate-100 px-4 px-0 lg-:px-0">
    <div className="max-w-6xl mx-auto  flex flex-row items-center justify-between">
    <ul className="gap-8 hidden md:flex ml-1">
        <Link href={"/"} ><li className="text-[#636270]  hover:text-btncolor text-[16px] font-meduim">Home</li></Link>
        <Link href={"/cart"}><li className="text-[#636270] text-[16px]  hover:text-btncolor font-meduim">Shop</li></Link>
        <Link href={"/product"}><li className="text-[#636270] text-[16px]  hover:text-btncolor font-meduim">Product</li> </Link>

        <Link href={"/about"}><li className="text-[#636270] text-[16px]  hover:text-btncolor font-meduim">About</li> </Link>
        <Link href={"/contact"}><li className="text-[#636270] text-[16px]  hover:text-btncolor font-meduim">Contact</li> </Link>
    </ul>
     <p className="text-[16px] text-color1"><span className="text-[#636270]">Contact:</span>(808) 555-0111</p>
</div>
      </nav>
      </>
    );
}