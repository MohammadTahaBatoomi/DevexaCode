"use client";

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IconButton } from "@mui/material";
import { IoMdSearch } from "react-icons/io";
import { LuSunMoon } from "react-icons/lu";
import { motion } from "framer-motion";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white fixed top-0 left-0 right-0 z-50 border-b border-[#e8eae9]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex justify-center gap-2 items-center">
              {/* آیکون منوی موبایل */}
              <div className="md:hidden">
                <IconButton onClick={() => setMobileMenuOpen(true)}>
                  <FiMenu size={24} className="text-[#757575]" />
                </IconButton>
              </div>
              {/* لوگو */}
              <div className="text-2xl font-medium text-[#5063f0]">
                DevexaCode
              </div>
            </div>

            {/* آیکون‌ها و منوی دسکتاپ */}
            <div className="flex justify-center items-center gap-2">
              <div className="flex gap-2">
                <IconButton>
                  <IoMdSearch className="text-[#5063f0] text-2xl" />
                </IconButton>
                <IconButton>
                  <LuSunMoon className="text-[#5063f0] text-2xl" />
                </IconButton>
              </div>

              <nav className="hidden md:flex space-x-2 text-sm font-medium">
                <a href="/docs" className="text-[#5063f0] hover:bg-blue-50 py-2 px-3 rounded-md">Docs</a>
                <a href="/about-us" className="text-[#5063f0] hover:bg-blue-50 py-2 px-3 rounded-md">About</a>
                <a href="#" className="text-[#5063f0] hover:bg-blue-50 py-2 px-3 rounded-md">Services</a>
                <a href="#" className="text-[#5063f0] hover:bg-blue-50 py-2 px-3 rounded-md">Pricing</a>
                <span className="border-l border-[#e8eae9]"></span>
                <a href="#" className="text-[#5063f0] hover:bg-blue-50 py-2 px-3 rounded-md">LOGIN</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* پس‌زمینه تار هنگام باز بودن منو */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-opacity-30 z-80 bg-black/40"
        />
      )}

      {/* منوی موبایل با انیمیشن اسلاید از چپ */}
      <motion.nav
        initial={{ x: "-100%" }}
        animate={{ x: mobileMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-90 md:hidden"
      >
        <ul className="p-4 flex flex-col space-y-4 text-[#333] text-base font-medium mt-4">
          <li><a href="#" className="hover:text-[#5063f0]">Home</a></li>
          <li><a href="#" className="hover:text-[#5063f0]">About</a></li>
          <li><a href="#" className="hover:text-[#5063f0]">Services</a></li>
          <li><a href="#" className="hover:text-[#5063f0]">Contact</a></li>
          <span className="border-t border-[#e8eae9]"></span>
          <a href="#" className="hover:text-[#5063f0] rounded-md">Login</a>
        </ul>
      </motion.nav>
    </>
  );
}

export default Header;
