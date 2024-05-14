"use client";

import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="shadow-sm border-b sticky p-3 z-30 top-0 bg-white">
      <div className="flex justify-between max-w-6xl mx-auto items-center ">
        {/* logo */}
        <Link href="/" className="hidden lg:inline-flex">
          <img
            src={"./Instagram_logo_black.webp"}
            alt=""
            width={96}
            height={96}
          />
        </Link>
        <Link href="/" className="lg:hidden ">
          <img src={"./Instagram_logo.webp"} alt="" width={40} height={40} />
        </Link>

        {/* search box */}
        <input
          type="text"
          placeholder="search"
          className="bg-gray-50 border border-gray-200 rounded-sm text-sm py-2 px-4 w-full max-w-[210px]"
        />

        {/* menu  */}

        {session ? (
          <img
            src={session.user.image}
            alt="fgbf"
            className="h-10 w-10 rounded-full cursor-pointer"
            onClick={signOut}
          />
        ) : (
          <button
            onClick={signIn}
            className="text-sm text-blue-500 font-semibold"
          >
            {" "}
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
