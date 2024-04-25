"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const data = useSession();
  console.log(data);

  return (
    <div className="bg-blue-300 p-5 flex justify-center gap-6">
      <Link href="/about" className="text-blue-800 hover:underline">
        About
      </Link>
      {data.status === "authenticated" ? (
        <Link href="/profile" className="text-blue-800 hover:underline">
          Profile
        </Link>
      ) : (
        <div className="flex gap-6">
          <Link href="/register" className="text-blue-800 hover:underline">
            Register
          </Link>
          <Link href="/login" className="text-blue-800 hover:underline">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
