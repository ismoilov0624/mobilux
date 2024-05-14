import Link from "next/link";
import React from "react";

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex gap-4 w-full">
      <div className="w-[20%] h-[250px] p-4 border shadow-md flex flex-col gap-4 rounded-md">
        <Link href={`/profile/account`}>Akkaunt</Link>
        <Link href={`/profile/orders`}>Sizning buyurtmalaringiz</Link>
        <Link href={`/profile/devices`}>Sizning qurilmalaringiz</Link>
        <Link href={`/profile/help`}>Yordam kerakmi ? </Link>
        <Link href={`/`}>Bosh sahifa</Link>
      </div>
      <div className="w-[80%] p-4 border shadow-md flex flex-col gap-4 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
