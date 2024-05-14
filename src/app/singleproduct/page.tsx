import { getSingleProductById } from "@/helpers/single-product";
import Link from "next/link";
import { getPhones } from "@/service/phones";
import ProductCard from "@/components/product-card/product-card";
import AddToCartBtn from "@/components/AddToCartBtn";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProduct = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = await getSingleProductById(_id);
  const data = await getPhones();
  const { id, title, price, img } = product;

  return (
    <div className="p-10 bg-slate-100 rounded-md w-full">
      <div className="flex items-center mb-5">
        <Link
          className="text-[15px] font-400 hover:text-green-500 hover:underline"
          href={"/"}
        >
          Bosh sahifa
        </Link>
        <p> / {product.type}</p>
        <p> / {product.title}</p>
      </div>
      <div className="flex items-center justify-center gap-10 p-9 bg-white rounded-md">
        <div className="w-[300px]">
          <img className="w-full" src={product.img} alt={product.title} />
        </div>
        <div className="flex flex-col gap-4 w-[500px]">
          <p className="text-[36px] font-[700]">{product.title}</p>
          <p className="text-green-500 text-[42px] font-[700]">
            {product.price} so'm
          </p>
          <div className="flex items-center gap-1">
            <p className="text-[16px] font-[600]">Rang:</p>
            <div className="flex flex-col items-center justify-center py-2 px-4 border rounded-md">
              <div
                className="w-[20px] h-[20px] rounded-full"
                style={{
                  backgroundColor: product.color,
                }}
              ></div>
              <p>{product.color}</p>
            </div>
          </div>

          <div className="mr-[auto]">
            <AddToCartBtn
              product={{
                id,
                title,
                price: Number(price.split(" ").join("")),
                img,
              }}
            />
          </div>
          <p className="text-[18px] font-bold p-6 bg-slate-200 rounded-md">
            O'zbekiston bo'ylab yetkazib berish: 14 ish kuni
          </p>
          <div>
            <p className="text-[16px] font-[600] mb-4">Описание</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      <div className="bg-white mt-6 rounded-md p-9">
        <p className="text-[24px] font-[700] mb-5">Основные характеристики</p>
        <table className="w-full table-auto">
          <tbody>
            <tr className="border-t border-b">
              <td className="px-4 py-2 text-gray-500 text-[14px] font-[500]">
                Наименование товара
              </td>
              <td className="px-4 py-2 text-[14px] font-[500px]">
                {product.title}
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 text-gray-500 text-[14px] font-[500]">
                Бренд
              </td>
              <td className="px-4 py-2 text-[14px] font-[500px]">
                {product.brand}
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 text-gray-500 text-[14px] font-[500]">
                Цена
              </td>
              <td className="px-4 py-2 text-[14px] font-[500px]">
                {product.price} so'm
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 text-gray-500 text-[14px] font-[500]">
                Цвет
              </td>
              <td className="px-4 py-2 text-[14px] font-[500px]">
                {product.color}
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 text-gray-500 text-[14px] font-[500]">
                Описание
              </td>
              <td className="px-4 py-2 text-[14px] font-[500px]">
                {product.description.length > 60
                  ? `${product.description.substring(0, 60)}...`
                  : product.description}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-7 bg-white rounded-md p-9">
        <h2 className="text-[32px] font-[700]">
          Вместе с этим товаром покупают
        </h2>
        <div className="grid grid-cols-4 gap-2">
          {data.slice(0, 4).map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>

      <div className="mt-7 bg-white rounded-md p-9">
        <h2 className="text-[32px] font-[700]">Похожие товары</h2>
        <div className="grid grid-cols-4 gap-2">
          {data.slice(4, 8).map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
