"use client";
import Cartcard from "./cartCard";
import { useAppSelector } from "@/app/store/hook";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryCharge = cart.length > 0 ? 25 : 0;
  const totalPrice = subtotal + deliveryCharge;

  return (
    <section className="w-full py-12 mt-10 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-12">
        <div className="w-full flex flex-col md:flex-row gap-8 justify-between">
          <div className="w-full lg:w-[70%] flex flex-col space-y-16">
            {cart.length > 0 ? (
              cart.map((e) => (
                <Cartcard
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  price={e.price * e.quantity}
                  quantity={e.quantity}
                  img={e.image}
                />
              ))
            ) : (
              <div className="text-center text-gray-500 text-2xl">
                Your cart is empty.
              </div>
            )}
          </div>

          <div className="w-full lg:w-[30%] rounded-lg mt-10 lg:mt-0">
            <h2 className="text-[21px] font-medium text-color1 mb-4">
              Summary
            </h2>
            <div className="flex text-black text-[15px] justify-between mb-2">
              <span>Subtotal</span>
              <span>{`$${subtotal.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-black text-[15px] mb-2">
              <span>Estimated Delivery & Handling</span>
              <span>{`$${deliveryCharge.toFixed(2)}`}</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">{`$${totalPrice.toFixed(
                2
              )}`}</span>
            </div>

            <hr className="my-4" />

            <button
              className="w-full hover:bg-teal-600 bg-[#029FAE] text-white py-4 px-4 rounded-[25px] mt-4"
              disabled={cart.length === 0}
            >
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
