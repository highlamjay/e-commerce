"use client";
import { Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Search } from "lucide-react";
import NavHeader from "./NavHeader";

const Header = () => {
  const isLogin = false;
  const wishlistCount = 2; // Example count, replace with actual state or prop
  const shoppingCartCount = 2; // Example count, replace with actual state or prop

  return (
    <div className="h-[38px] flex flex-row items-center justify-between bg-transparent px-[135px]">
      {/* logo and app name */}
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" className="h-6" />
        <span className="font-bold text-2xl text-black">MyApp</span>
      </div>
      {/* main nav */}
      <NavHeader />
      {/* search and another icon */}
      <div className="flex items-center gap-6">
        {/* search */}
        <div className="relative  ">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="h-[38px] w-[243px] bg-secondary focus:outline-none rounded-sm text-xs py-[7px] px-[20px]"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-black w-6 h-6" />
        </div>
        {/* icons */}
        <div className="flex flex-row items-center justify-between gap-4">
          <button
            aria-label="Wishlist"
            className="relative text-black transition-transform duration-150 active:scale-90 cursor-pointer"
          >
            <Heart className="w-8 h-8 p-1" />
            {wishlistCount > 0 && (
              <span className="absolute -top-0 -right-0 bg-[#DB4444] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            aria-label="Cart"
            className="relative text-black transition-transform duration-150 active:scale-90 cursor-pointer"
          >
            <ShoppingCart className="w-8 h-8 p-1" />
            {shoppingCartCount > 0 && (
              <span className="absolute -top-0 -right-0 bg-[#DB4444] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {shoppingCartCount}
              </span>
            )}
          </button>

          {isLogin && (
            <Link
              href="/profile"
              className="text-black transition-transform duration-150 active:scale-90 cursor-pointer"
            >
              <User className="w-8 h-8 p-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
