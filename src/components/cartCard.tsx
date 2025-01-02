"use client";

import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { IoMdRemove } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  addcart,
  decrementCart,
  removeFromCart,
} from "@/app/store/features/cart";

interface CartProps {
  id: number;
  name: string;
  quantity: number;
  price: number;
  img: string;
}

function Cartcard({ id, name, quantity, price, img }: CartProps) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  const handleAdd = () => {
    dispatch(addcart({ id, name, quantity: quantity + 1, price, img }));
  };

  const handleDecrement = () => {
    dispatch(decrementCart(id));
  };

  return (
    <div className="w-full flex flex-row justify-between">
      <div className="w-[100%] flex flex-col md:flex-row gap-8">
        <div
          className="w-[150px] h-[150px] border-black bg-cover bg-center"
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
        <div className="w-[205px] h-[150px] flex flex-col space-y-6">
          <p className="text-xl text-color1 font-semibold">{name}</p>
          <div>
            <div className="w-full flex flex-row ">
              <span className="text-lg sm:text-xl text-color1">Quantity:</span>
              <Button
                onClick={handleAdd}
                className="bg-color1 hover:bg-teal-600 text-white h-4 w-4  sm:h-2 sm:w-2 px-4 ml-4 py-4 rounded-sm text-lg group mr-4"
              >
                <IoMdAdd className="text-xl font-bold" />
              </Button>
              <span className="text-lg sm:text-xl text-color1 font-semibold">
                {quantity}
              </span>
              <Button
                onClick={handleDecrement}
                className="bg-color1 ml-4  hover:bg-teal-600 text-white  h-4 w-8 sm:h-4 sm:w-2 px-4 py-4 rounded-sm text-center text-lg group"
              >
                <IoMdRemove className="text-xl font-bold" />
              </Button>
            </div>
          </div>
          <div className="text-[24px] flex w-[40%]">
            <FaHeart className="mr-4 hover:text-pink-500 text-2xl" />
            <RiDeleteBin6Fill
              onClick={handleRemove}
              className=" text-red-600 text-2xl"
            />{" "}
          </div>
        </div>
      </div>
      <div className="w-[20%]">
        <p>
          MRP: <span className="text-lg font-semibold">{`$${price}`}</span>
        </p>
      </div>
    </div>
  );
}

export default Cartcard;
