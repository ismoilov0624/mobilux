import CategoryList from "@/components/category-list/category-list";
import ProductCard from "@/components/product-card/product-card";
import { getSingleCategory } from "@/service/getSingleCategory";
import Link from "next/link";

const SingleCatefgoryPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const data = await getSingleCategory({ params });

  return (
    <div className="flex">
      <CategoryList />
      <div className="bg-slate-100 p-8">
        <div className="flex items-center">
          <Link
            className="text-[15px] font-400 hover:text-green-500 hover:underline"
            href={"/"}
          >
            Bosh sahifa
          </Link>
          <p className="text-[15px] font-400 hover:text-green-500 cursor-pointer hover:underline">
            / {data[0].type}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          {data.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SingleCatefgoryPage;
