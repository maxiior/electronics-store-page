"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (!navbar) return;

      if (window.scrollY > 50) {
        navbar.classList.add("bg-black", "shadow-lg");
        navbar.classList.remove("bg-transparent");
      } else {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-black", "shadow-lg");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Strona główna" },
    { href: "/produkty", label: "Produkty" },
    { href: "/onas", label: "O nas" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav id="navbar" className="fixed w-full z-50 transition duration-400">
      <div className="flex justify-between items-center h-25 max-w-7xl mx-auto px-10 2xl:px-0">
        <Link className="text-4xl font-[700] text-white" href="/">
          RETRO JOY
        </Link>
        <div className="hidden md:flex items-center space-x-5 text-lg">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${
                  isActive ? "text-main" : "text-white"
                } hover:text-main transition-colors relative`}
              >
                {item.label}
                {isActive && (
                  <div className="bg-main h-1.5 w-1.5 absolute rounded-full left-1/2 bottom-[-12]"></div>
                )}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:block">
          <Link
            className="border-2 border-white rounded-xl px-3 py-1 text-white flex items-center justify-center gap-2 cursor-pointer font-nunito hover:text-main hover:border-main transition"
            href="/koszyk"
          >
            <div className="text-sm">Koszyk</div>
            <div className="bg-main text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
              0
            </div>
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <Link href="/koszyk" className="relative hover:text-main text-white">
            <FiShoppingCart className="p-2 rounded-lg transition-colors cursor-pointer w-10 h-10" />
            <div className="bg-main text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full absolute right-0 top-1/2">
              0
            </div>
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:text-main transition-colors cursor-pointer text-white"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden py-10 bg-black">
          {menuItems.map((item) => (
            <div key={item.label} onClick={toggleMobileMenu}>
              <Link
                href={item.href}
                className="block py-5 text-center hover:bg-wcpink hover:bg-main transition-colors text-white"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
