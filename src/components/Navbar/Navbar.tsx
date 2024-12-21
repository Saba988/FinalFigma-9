'use client'
import { useState } from 'react';
import Link from "next/link";
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/", active: true },
    { name: "Menu", href: "/Menu" },
    { name: "Blog", href: "/blog" },
    { name: "Pages", href: "/pages" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Chefs", href: "/chef" },
  ];

  return (
    <header className="w-full bg-[#0D0D0D] fixed top-0 px-4 sm:px-6 md:px-8 lg:px-[15.62%] py-4 lg:py-7 z-20">
      <nav className="flex items-center justify-between lg:justify-between">
        <div className="lg:hidden flex items-center gap-4">
          <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Search size={20} />
          </Link>
          <Link href="/signup" className="text-white hover:text-[#FF9F0D] transition-colors">
            <User size={20} />
          </Link>
          <Link href="/checkOut" className="text-white hover:text-[#FF9F0D] transition-colors">
            <ShoppingBag size={20} />
          </Link>
        </div>

        <Link
          href="/"
          className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white font-helvetica z-10"
        >
          Food<span className="text-[#FF9F0D]">tuck</span>
        </Link>

        <button
          className="lg:hidden text-white z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden lg:flex items-center justify-center flex-grow">
          <ul className="flex gap-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-[16px] leading-6 ${item.active ? "text-[#FF9F0D] font-bold" : "text-white"}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Search size={24} />
          </Link>
          <Link href="/signup" className="text-white hover:text-[#FF9F0D] transition-colors">
            <User size={24} />
          </Link>
          <Link href="/checkOut" className="text-white hover:text-[#FF9F0D] transition-colors">
            <ShoppingBag size={24} />
          </Link>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed top-0 right-0 w-3/4 h-full bg-[#0D0D0D] flex flex-col items-center justify-center gap-6
        transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-[16px] leading-6 ${item.active ? "text-[#FF9F0D] font-bold" : "text-white"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}