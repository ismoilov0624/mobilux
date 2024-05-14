import React from "react";
import { getAccessories } from "@/service/accessories";
import ProductCard from "@/components/product-card/product-card";

const Devices = async () => {
  const data = await getAccessories();

  return (
    <div className="mt-7">
      <h2 className="text-[32px] font-[700]">Sizning qurilmalaringiz</h2>
      <div className="grid grid-cols-4 gap-4">
        {data.slice(0, 4).map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Devices;
