"use client";
import CartItemCard from "../../components/CartItemCard";
import React from "react";
import { TotalPriceSelector } from "../../store/features/cartSlice";
import { useAppSelector } from "../../store/store";
import emptyCartImg from "../../../public/img/empty-cart.png";
import Link from "next/link";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(TotalPriceSelector);

  return (
    <div className="p-8 bg-slate-100 rounded-md w-full">
      <div className="flex items-center mb-4">
        <Link
          className="text-[15px] font-400 hover:text-green-500 hover:underline"
          href={"/"}
        >
          Bosh sahifa
        </Link>
        <p className="text-[15px] font-400 hover:text-green-500 hover:underline cursor-pointer">
          / Savatcha
        </p>
      </div>
      <div className="p-2 bg-white rounded-md">
        {totalPrice === 0 ? (
          <div className="w-[300px] flex flex-col mx-auto items-center justify-center">
            <img src={emptyCartImg.src} alt="empty-cart" />
            <p className="text-slate-600 m-3 text-center">Savatingiz boʻsh</p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItemCard key={item.id} cartItem={item} />
            ))}
            <p className="text-slate-600 m-3 text-end">
              Total Price:
              <span className="text-slate-900 font-bold">
                {totalPrice} so'm
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
