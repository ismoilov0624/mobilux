import React from "react";

const Help = () => {
  return (
    <div>
      <h1 className="text-2xl font-[500] mb-5 text-center">F.A.Q</h1>
      <div className="flex flex-col  gap-3">
        <p className="text-lg text-gray-600 border rounded-md p-4">
          Ayirboshlash siyosati
        </p>
        <p className="text-lg text-gray-600 border rounded-md p-4">
          Pulni qaytarib olish siyosati
        </p>
        <p className="text-lg text-gray-600 border rounded-md p-4">
          Veb-sayt vaqt talab qilmoqda, uni qanday yaxshilash kerak?
        </p>
        <p className="text-lg text-gray-600 border rounded-md p-4">
          Hisob qaydnomasini qanday yarataman?
        </p>
      </div>
    </div>
  );
};

export default Help;
