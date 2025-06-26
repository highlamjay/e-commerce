"use client";

import { useResponsive } from "@/hooks/useResponsive";
import { useState } from "react";

const TopHeader = () => {
  const { breakpoint } = useResponsive();
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleShopNowClick = () => {
    console.log("Shop Now clicked");
  };

  const isMobile = breakpoint === "xs" || breakpoint === "sm";

  return (
    <div className="h-12 bg-black flex items-center justify-between text-[#FAFAFA] px-4 md:px-[135px]">
       {!isMobile && (
        <div className="w-1/3" />
       )}
      <div className="flex flex-row gap-2 items-center flex-1">
        <span className="text-sm font-normal">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        {!isMobile && (
          <span
            className="text-sm font-semibold underline cursor-pointer hover:text-[#DB4444] transition-colors"
            onClick={handleShopNowClick}
          >
            ShopNow
          </span>
        )}
      </div>

      <div>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="h-8 bg-black text-white text-sm focus:outline-none hover:bg-[#1a1a1a] cursor-pointer"
        >
          <option className="bg-black text-white" value="en">
            English
          </option>
          <option className="bg-black text-white" value="vie">
            Vietnamese
          </option>
        </select>
      </div>
    </div>
  );
};

export default TopHeader;
