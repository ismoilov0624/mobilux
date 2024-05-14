import { CartItem } from "../../interfaces";
import Image from "next/image";
import React from "react";
import { decrement, increment } from "../store/features/cartSlice";
import { useAppDispatch } from "../store/store";
import QtyBtn from "./QtyBtn";

interface Props {
  cartItem: CartItem;
}
const CartItemCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
      <thead className="bg-gray-50">
        <tr className="grid grid-cols-4">
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
          >
            Product Image
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
          >
            Product Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
          >
            Product Price
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
          >
            Total Price
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr className="grid grid-cols-4 items-center py-2 border-b">
          <td className="flex flex-col items-center gap-3 border-r">
            <Image
              src={cartItem.product.img}
              width={200}
              height={150}
              alt={cartItem.product.title}
              className="rounded-md"
            />
          </td>
          <td className="flex items-center justify-center gap-3 border-r h-full">
            <p className="text-slate-600 text-center">
              {cartItem.product.title}
            </p>
          </td>
          <td className="flex flex-col items-center justify-center gap-3 border-r h-full">
            <div className="flex flex-col items-center justify-center gap-3">
              <p>{cartItem.product.price} so'm</p>
              <p>&#xd7;</p>
              <QtyBtn
                qty={cartItem.qty}
                onDecrease={() => dispatch(decrement(cartItem.product))}
                onIncrease={() => dispatch(increment(cartItem.product))}
              />
            </div>
          </td>
          <td className="text-center border-r">
            {cartItem.qty * cartItem.product.price} so'm
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartItemCard;
