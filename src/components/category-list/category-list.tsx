import { getCategoryList } from "@/service/category";
import Link from "next/link";
import React from "react";
import arrowRight from "../../../public/icons/arrow-right.svg";

const CategoryList = async () => {
  const data = await getCategoryList();

  return (
    <div className="mt-10">
      <button className=" bg-green-500 rounded-md text-white py-2 px-6">
        Maxsus buyurtma
      </button>
      {data.map((item) => (
        <div className="flex flex-col pt-5 pr-9  gap-5 bg-white w-[300px]">
          <Link
            className="flex items-center justify-between hover:text-green-500"
            key={item.id}
            href={`${item.path}`}
          >
            {item.title}
            <img src={arrowRight.src} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
