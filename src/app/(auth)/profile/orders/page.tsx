import React from "react";
import deviceImg from "../../../../../public/img/device-img.png";

const Orders = () => {
  return (
    <div>
      <h3 className="text-2xl font-[500] mb-5">Sizning buyurtmalaringiz</h3>
      <div className="flex gap-2">
        <div className="w-[400px] border border-green-500 rounded-md p-4">
          <div className="flex justify-between mb-2">
            <p className="font-[500]">Buyurtma #1160</p>
            <p className="text-red-600 bg-red-200 p-2 rounded-md">
              Bekor qilindi
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Buyurtma sanasi:</p>
            <p>02/02/2022</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Taxminiy yetkazib berish kuni:</p>
            <p>Payshanba</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Umuiy narx:</p>
            <p>18 664 000 so'm</p>
          </div>
        </div>

        <div className="w-[400px] bg-slate-100 rounded-md p-4">
          <div className="flex justify-between mb-2">
            <p className="font-[500]">Buyurtma #1160</p>
            <p className=" bg-slate-200 p-2 rounded-md">Yuborildi</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Buyurtma sanasi:</p>
            <p>02/02/2022</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Taxminiy yetkazib berish kuni:</p>
            <p>Payshanba</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Umuiy narx:</p>
            <p>18 664 000 so'm</p>
          </div>
        </div>
      </div>
      <div className="w-[800px]">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-[500] my-5">Buyurtma tafsilotlari</h3>
          <p>Buyurtma #1160</p>
        </div>

        <div className="flex justify-between">
          <div className="w-[200px] border p-2">
            <p>Yetkazish manzili</p>
            <p>Tashkent, Mirobod 1, 4 , Uzbekistan</p>
          </div>
          <div className="w-[200px] border p-2">
            <p>Virtual akkaunt raqami </p>
            <p>1242151246436</p>
          </div>
          <div className="w-[200px] border p-2">
            <p>To’lov turi </p>
            <p>Uzcard</p>
          </div>
          <div className="w-[400px] border p-2">
            <div className="flex justify-between">
              <p>Mahsulot narxi:</p>
              <p>16 374 000 so’m</p>
            </div>
            <div className="flex justify-between">
              <p>Chegirma:</p>
              <p>0 so’m</p>
            </div>
            <div className="flex justify-between">
              <p>Yetkazib berish narxi:</p>
              <p>127 000 so’m</p>
            </div>
            <div className="flex justify-between">
              <p>Jami:</p>
              <p>16 501 000 so’m</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-3">
        <div>
          <img src={deviceImg.src} alt="" />
        </div>
        <div>
          <p className="font-[700] text-[14px]">
            Смартфон Apple iphone 13 Pro Max 512 GB Graphite
          </p>
          <p className="font-[600] text-[12px]">16 374 000 so’m</p>
          <p className="font-[600] text-[12px] text-gray-300">1 dona</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
