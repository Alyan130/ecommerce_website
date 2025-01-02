"use client";

import { Button } from "@/components/ui/button";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts, selectProductById } from "@/app/store/features/product";
import { AppDispatch, RootState } from "@/app/store/store";
import CartToast from "../addCartToast";


interface Params {
  params: Promise<{ id: string }>;
}

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  totalPrice: number;
}


export default function ProductDetail({ params }: Params) {
  const [id, setId] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state:RootState) =>
    id ? selectProductById(state, parseInt(id)) : null
  );

  const [cartItem, setCartItem] = useState<CartItem>({
    id: 0,
    name: "",
    image: "",
    price: 0,
    quantity: 1,
    totalPrice: 0,
  });

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (id && !product) {
      dispatch(fetchProducts());
    } else if (product) {
      setCartItem({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
        totalPrice: product.price,
      });
    }
  }, [dispatch, id, product]);

  const incrementQuantity = () => {
    setCartItem((prevState) => {
      const updatedQuantity = prevState.quantity + 1;
      return {
        ...prevState,
        quantity: updatedQuantity,
        totalPrice: prevState.price * updatedQuantity,
      };
    });
  };

  const decrementQuantity = () => {
    if (cartItem.quantity > 1) {
      setCartItem((prevState) => {
        const updatedQuantity = prevState.quantity - 1;
        return {
          ...prevState,
          quantity: updatedQuantity,
          totalPrice: prevState.price * updatedQuantity,
        };
      });
    }
  };

  return (
    <section className="w-full mt-16 md:mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {product ? (
          <div className="w-full flex flex-col md:flex-row items-center gap-4">
            <div
              className="w-full md:w-[50%] h-[250px] md:h-[478px] bg-cover bg-center"
              style={{ backgroundImage: `url(${cartItem.image})` }}
            ></div>

            <div className="pl-4 md:pl-16 w-full md:w-[50%] h-[400px] sm:h-[430px] md:h-[400px] lg:h-[478px] flex flex-col items-start justify-between md:-mt-20 lg:-mt-0">
              <div className="w-[90%]">
                <h2 className="text-4xl leading-[54px] md:eading-[72px] font-inter text-color1 md:text-6xl font-bold mb-4 md:mb-6 lg-mb-8">
                  {cartItem.name}
                </h2>
                <div className="w-36 h-11 px-4 py-2 rounded-[25px] text-white bg-btncolor">
                  <button className="w-full text-xl font-semibold">
                    {`$${cartItem.totalPrice} USD`}
                  </button>
                </div>

                <hr className="my-8" />

                <p className="text-[16px] text-xl text-color1 opacity-60 -mt-4  mb-4 md:mb-6 lg-mb-8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Explicabo sunt veritatis fugit aut architecto molestias
                  delectus.
                </p>

                <div className="flex items-center flex-row">
                  <span className="text-xl md:text-2xl text-color1 font-semibold">
                    Quantity :
                  </span>
                  <Button
                    className="bg-color1 hover:bg-teal-600 text-white h-11 w-8 sm:h-12 sm:w-12 px-6 ml-4 py-4 rounded-[50%] text-lg group"
                    onClick={incrementQuantity}
                  >
                    <IoMdAdd className="text-xl font-bold" />
                  </Button>
                  <div className="text-xl md:text-2xl text-color1 ml-4 font-semibold">
                    {cartItem.quantity}
                  </div>
                  <Button
                    className="bg-color1 ml-4 hover:bg-teal-600 text-white h-11 w-8 sm:h-12 sm:w-12 px-6 py-4 rounded-[50%] text-center text-lg group"
                    onClick={decrementQuantity}
                  >
                    <IoMdRemove className="text-xl font-bold" />
                  </Button>
                </div>

                <hr className="my-4" />

                <CartToast cartItem={cartItem} />
              </div>
            </div>
          </div>
        ) : (
          <div role="status" className="flex items-center justify-center">
            <svg
              aria-hidden="true"
              className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </section>
  );
}
