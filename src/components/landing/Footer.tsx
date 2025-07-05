import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-[#1c1642] text-white py-4 px-6 absolute bottom-0 w-[100%]">
      <div className="container mx-auto flex md:flex-row items-center justify-between">
        {/* متن کپی‌رایت */}
        <p className="text-sm">©2025 DevexaCode App</p>

        {/* آیکون‌های شبکه‌های اجتماعی */}
        <div className="flex gap-6 md:text-2xl text-lg">
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-[#5063f0] transition duration-500">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-[#5063f0] transition duration-500">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-[#5063f0] transition duration-500">
            <FaXTwitter />
          </a>
        </div>

        {/* لینک‌های اضافی */}
        <div className="text-sm">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> |{' '}
          <a href="/refund-policy" className="hover:underline">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;