import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  return (
    <section className="w-full py-10 md:py-14">
    <div className="container mx-auto md:px-20 px-8 py-8 max-w-5xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl  md:text-[36px] font-inter font-semibold mb-4">Get In Touch With Us</h1>
        <p className="text-color5 text-[16px] font-poppins max-w-2xl mx-auto">
          For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 py-4  sm:py-10 lg:py-14">
        <div className="space-y-8">
          <div className="flex gap-4">
            <IoLocationSharp className="h-6 w-6 mt-1 space-x-2 text-black shrink-0" />
            <div className="max-w-72">
              <h3 className="font-semibold font-poppins text-[24px] mb-1 text-color6 ">Address</h3>
              <p className="text-[16px] font-inter text-color6">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          <div className="flex gap-4">
            <FaPhoneAlt className="h-6 w-6 mt-1 space-x-2 text-black shrink-0" />
            <div>
              <h3 className="font-semibold font-poppins text-[24px] mb-1">Phone</h3>
              <p className="text-[16px] font-inter text-color6">Mobile: +(84) 546-6789</p>
              <p className="text-[16px] font-inter text-color6">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex gap-4">
            <BsClockFill className="h-6 w-6 mt-1 space-x-2 text-black shrink-0" />
            <div>
              <h3 className="font-semibold font-poppins text-[24px] mb-1">Working Time</h3>
              <p className="text-[16px] font-inter text-color6">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-[16px] font-inter text-color6">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-bold font-poppins text-[16px] mb-4">Your name</Label>
            <Input className="border-color5 rounded-[5px] h-14 text-[16px] font-poppins text-color5 " id="name" placeholder="Abc" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email"  className="font-bold font-poppins text-[16px] mb-4">Email address</Label>
            <Input id="email" type="email"  className="border-color5 rounded-[5px] h-14 text-[16px] font-poppins text-color5 "  placeholder="Abc@def.com" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject"  className="font-bold font-poppins text-[16px] mb-4">Subject</Label>
            <Input id="subject" className="border-color5 rounded-[5px] h-14 text-[16px] font-poppins text-color5"  placeholder="This is an optional" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message"  className="font-bold font-poppins text-[16px] mb-4">Message</Label>
            <Textarea
              id="message"
              placeholder="Hi! I'd like to ask about"
              className="border-color5 rounded-[5px] h-[120px] text-[16px] font-poppins text-color5"
              required
            />
          </div>
          
          <Button 
              className="bg-btncolor hover:bg-teal-600 text-white h-12 w-44 px-6 py-4 rounded-[2px] text-lg group"
            >
              Submit
            </Button>

        </form>
      </div>
    </div>
    </section>
  )
}

