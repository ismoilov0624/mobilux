import React from "react";
import { getBanner } from "@/service/banner";

export const Banner = async () => {
  const banners = await getBanner();
  console.log(banners);

  return <div>Banner</div>;
};
