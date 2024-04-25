import { getServerSession } from "next-auth";
import { authOptions } from "@/config/next-auth-config";
import React from "react";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
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
  );
};

export default Profile;
