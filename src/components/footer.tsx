
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
export default function Footer() {
  return (
    <section className='py-4 md:py-8 '>
      <footer className=" border-t border-gray-200 px-2 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="space-y-6">
              <div className="flex items-center space-x-2 justify-center">
                <div className='w-full flex gap-2'>
                  <img src="/icons/Vector.png" alt="" />
                  <span className="text-xl font-semibold text-color1">Comforty</span>
                </div>
              </div>
              <p className="text-[16px] text-color1">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                Cras egestas purus
              </p>
              <div className="flex space-x-4 items-end">
                <div className='h-9 w-9 flex items-center justify-center hover:border-[2px] hover:border-btncolor rounded-[50%] group'>
                  <Link href="#" className="text-iconcolor2 group-hover:text-btncolor">
                    <FaFacebook className="w-5 h-5" />
                  </Link>
                </div>
                <div className='h-9 w-9 flex items-center justify-center hover:border-[2px] hover:border-btncolor rounded-[50%] group'>
                  <Link href="#" className=" text-iconcolor2 group-hover:text-btncolor">
                    <FaTwitter className="w-5 h-5" />
                  </Link>
                </div>
                <div className='h-9 w-9 flex items-center justify-center hover:border-[2px] hover:border-btncolor rounded-[50%] group'>
                  <Link href="#" className=" text-iconcolor2  group-hover:text-btncolor">
                    <CiInstagram className="w-5 h-5" />
                  </Link>
                </div>
                <div className='h-9 w-9 flex items-center justify-center hover:border-[2px] hover:border-btncolor rounded-[50%] group'>
                  <Link href="#" className="text-iconcolor2  group-hover:text-btncolor">
                    <FaYoutube className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm  text-color4 uppercase tracking-wider mb-4">
                Category
              </h3>
              <ul className="space-y-3">
                {['Sofa', 'Armchair', 'Wing Chair', 'Desk Chair', 'Wooden Chair', 'Park Bench'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-color1 hover:text-btncolor text-[16px]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm  text-color4 uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                {['Help & Support', 'Terms & Conditions', 'Privacy Policy', 'Help'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-color1 hover:text-btncolor text-[16px]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            <div>
              <h3 className="text-sm font-medium text-color4 uppercase tracking-wider mb-4">
                Newsletter
              </h3>
              <div className="space-y-4">
                <div className="flex max-w-md gap-x-2 text-color4">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-white"
                  />
                  <Button className='bg-btncolor hover:bg-teal-600 text-white rounded-[10px]'>
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-color4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam tincidunt erat enim.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-500">
                © 2021 - Blogv - Designed & Develop by{' '}
                <Link href="#" className="text-color1 hover:text-primary/90">
                  Zakirsoft
                </Link>
              </p>
              <div className="flex items-center space-x-4  p-4">
                <Image
                  src="/logo/Group 11.png"
                  alt="PayPal"
                  width={50}
                  height={24}
                  className="h-4 w-auto filter grayscale opacity-50"
                />
                <Image
                  src="/logo/Group 12.png"
                  alt="PayPal"
                  width={50}
                  height={24}
                  className="h-4 w-auto filter grayscale opacity-50"
                />
                <Image
                  src="/logo/Vector.png"
                  alt="American Express"
                  width={50}
                  height={24}
                  className="h-4 w-auto filter grayscale opacity-50"
                />
                <Image
                  src="/logo/Union.png"
                  alt="Visa"
                  width={50}
                  height={24}
                  className="h-4 w-auto filter grayscale opacity-50"
                />
              </div>

            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

