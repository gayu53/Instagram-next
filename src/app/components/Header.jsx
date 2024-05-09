import Link from "next/link";
import React from "react";

const Header = () => {
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

        <button className="text-sm text-blue-500 font-semibold"> Login</button>
      </div>
    </div>
  );
};

export default Header;
