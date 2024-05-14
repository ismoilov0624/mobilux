import React from "react";
import { getPhones } from "@/service/phones";
import ProductCard from "../product-card/product-card";

const ProductBanner = async ({ title }: { title: string }) => {
  const data = await getPhones();

  return (
    <div className="mt-7">
      <h2 className="text-[32px] font-[700]">{title}</h2>
      <div className="grid grid-cols-4 gap-4">
        {data.slice(0, 8).map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductBanner;
