import { getServerSession } from "next-auth";
import { authOptions } from "@/config/next-auth-config";
import React from "react";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h3 className="text-2xl font-[500] mb-5">Sizning profilingiz</h3>
      <div className="flex items-center mt-10 ml-10">
        <img
          src="https://via.placeholder.com/150"
          alt=""
          className="rounded-full h-24 w-24 mr-4"
        />
        <div>
          <h1 className="text-3xl text-blue-500">
            User Name: {session?.user.name}
          </h1>
          <p className="text-lg text-gray-600">Email: {session?.user.email}</p>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-[500] mb-5">Yetkazib berish manzili</h3>

        <div className="flex gap-3 ">
          <div className="w-[400px] flex flex-col gap-2 border border-green-400 rounded-md p-5">
            <p className="font-[400]">{session?.user.name}</p>
            <p>Андижанская область, Андижан город, Muhitdinov 29, 1, 1</p>
            <p>+998 99 999 99 99</p>
            <p>Asosiy manzil</p>
          </div>
          <div className="w-[400px] flex flex-col gap-2 bg-slate-200 rounded-md p-5">
            <p className="font-[400]">{session?.user.name}</p>
            <p>Андижанская область, Андижан город, Muhitdinov 29, 1, 1</p>
            <p>+998 99 999 99 99</p>
            <p>Asosiy manzil</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
