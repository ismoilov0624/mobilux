"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Logo } from "../../../public/icons/logo";
import { ProfileIcon } from "../../../public/icons/profile-icon";
import CartBtn from "../CartBtn";

const Header = () => {
  const data = useSession();

  return (
    <div className="container flex items-center justify-between py-4 ">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex items-center">
        <input
          className="w-[800px] outline-none p-2 border border-green-500 rounded-l-md bg-gray-100"
          type="text"
          name=""
          id=""
          placeholder="Qidirish"
        />
        <button className="p-[8.5px] bg-green-500 rounded-r-md text-white">
          Search
        </button>

        <select
          className="ml-4 p-2.5 bg-slate-300 rounded-md outline-none"
          name="choice"
        >
          <option
            className="p-2.5 bg-slate-300 rounded-md outline-none"
            value="first"
          >
            Uz
          </option>
          <option
            className="p-2.5 bg-slate-300 rounded-md outline-none"
            value="second"
          >
            En
          </option>
        </select>
      </div>

      <div>
        <Link href={"/cart"}>
          <CartBtn />
        </Link>
      </div>

      {data.status === "authenticated" ? (
        <Link
          href="/profile"
          className="flex gap-2 text-[16px] font-[600] hover:underline"
        >
          Profile
          <ProfileIcon />
        </Link>
      ) : (
        <div className="flex gap-6">
          <Link
            href="/register"
            className="text-[16px] font-[600] hover:underline"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="text-[16px] font-[600] hover:underline"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
