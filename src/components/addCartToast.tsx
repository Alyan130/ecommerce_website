"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { addtoCart } from "@/app/store/features/cart";
import { ShoppingCart } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  totalPrice: number;
}


function CartToast({ cartItem }: {cartItem : CartItem }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addtoCart(cartItem));
    toast.success("Item added successfully!", {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  return (
    <div className="w-fit">
      <Button
        className="bg-btncolor hover:bg-teal-600 text-white h-12 w-44 px-6 py-4 rounded-[10px] text-lg group"
        onClick={handleAddToCart}
      >
        <ShoppingCart className="h-5 w-5 transition-transform group-hover:translate-x-1 mr-2" />
        Add to cart
      </Button>
      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
}

export default CartToast;
