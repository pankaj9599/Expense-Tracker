"use client";

import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className=" mx-5">
      <div className="flex justify-between items-center p-5 rounded-3xl bg-gray-300 shadow-md">

        {/* Logo */}
        <div className="w-20 font-bold text-lg">Logo</div>

        {/* Center Nav Items */}
        <div className="w-60 flex justify-between font-medium text-gray-700">
          <Link href="/dashboard" className="hover:text-blue-600 cursor-pointer">
            Dashboard
          </Link>

          <Link
            href="/transactions"
            className="hover:text-blue-600 cursor-pointer"
          >
            Transactions
          </Link>
        </div>

        {/* Profile */}
        <div className="w-20 text-right hover:text-blue-600 cursor-pointer">
          Profile
        </div>

      </div>
    </div>
  );
}

export default Navbar;
