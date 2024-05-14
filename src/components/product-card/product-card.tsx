"use client";
import React from "react";
import Link from "next/link";
import AddToCartBtn from "../AddToCartBtn";

const ProductCard = ({
  id,
  img,
  title,
  price,
}: {
  id: number;
  img: string;
  title: string;
  price: string;
}) => {
  return (
    <div className="w-[230px] h-[350px] flex flex-col items-center mt-5 bg-white p-5 rounded-md text-center justify-between transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
      <Link href={{ pathname: "/singleproduct", query: { _id: id } }}>
        <div>
          <img className="w-full h-[170px]" src={img} alt={title} />
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-green-500">
            {title.length > 35 ? `${title.substring(0, 35)}...` : title}
          </h4>
          <p className="text-[18px] font-[800]">{price} so'm</p>
        </div>
      </Link>
      <AddToCartBtn
        product={{ id, title, price: Number(price.split(" ").join("")), img }}
      />
    </div>
  );
};

export default ProductCard;
