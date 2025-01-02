import { ProductPosts } from "./productPosts";

export function Newsletter() {


  return (
    <section className="w-full py-20 -mt-8 sm:-mt-4 lg:-mt-0 bg-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-meduim mb-10 md:mb-16 font-roboto">Or Subscribe To The Newsletter</h2>
          <input
            type="email"
            placeholder="Email Address..."
            className="w-[60%] sm:w-[70% md:w-[80%] text-[16px]  bg-transparent font-semibold text-color4 border-b-2 border-color4"
            />
            <button className="border-b-2 border-color1 ml-4 text-[16px]  text-color1">
               Submit
            </button>
        </div>
        <ProductPosts/>
        </div>
        </section>
        )
}