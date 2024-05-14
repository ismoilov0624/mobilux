import React from "react";
import Link from "next/link";
import { getBanner } from "@/service/banner";
import { useSession } from "next-auth/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductBanner from "@/components/phones/phones-banner";
import AccessoriesBanner from "@/components/acceessories/acceessories-banner";
import CategoryList from "@/components/category-list/category-list";
("@/components/ui/carousel");
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function Home() {
  const banners = await getBanner();

  return (
    <div className="flex">
      <CategoryList />
      <div className="bg-slate-100 p-8 flex flex-col items-center">
        <Carousel className="w-full border rounded-lg">
          <CarouselContent className="h-[300px]">
            {banners.map((item) => (
              <CarouselItem key={item.id}>
                <img
                  className="w-full h-[100%] rounded-lg"
                  alt={item.title}
                  src={item.img}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4" />
          <CarouselNext className="absolute right-4" />
        </Carousel>

        <ProductBanner {...{ title: "Yangi mahsulotlar" }} />
        <AccessoriesBanner />
        <ProductBanner {...{ title: "Chegirmadagi mahsulotlar" }} />
      </div>
    </div>
  );
}
