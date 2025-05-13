"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed z-50 w-screen">
      <div className="container mx-auto flex justify-between items-center px-8 lg:px-12 py-4 ">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <Image
            alt=""
            src="/logos/logo_dnt_2025.png"
            width={150}
            height={30}
            priority
          />
        </Link>

        {/* Menu */}
        <ul className="hidden lg:flex space-x-8 lg:text-lg">
          <li>
            <Link href="/" className="hover:text-gray-400 transition">
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/programacao"
              className="hover:text-gray-400 transition"
            >
              Programação
            </Link>
          </li>
          <li>
            <Link
              href="/batalha-de-startups"
              className="hover:text-gray-400 transition"
            >
              Batalha de Startups
            </Link>
          </li>
          <li>
            <Link href="/livrodnt" className="hover:text-gray-400 transition">
              Livro
            </Link>
          </li>

          <li>
            <Link
              href="/enucompi2025"
              className="hover:text-gray-400 transition"
            >
              Enucompi 2025
            </Link>
          </li>
        </ul>

        <div
          className="relative lg:hidden w-8 h-8 cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <Menu
            className={`absolute left-0 top-0 cursor-pointer inset-0 m-auto ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
            size={32}
          />
          <X
            className={`absolute left-0 top-0 cursor-pointer inset-0 m-auto ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            size={32}
          />
        </div>

        <div
          className={`z-50 absolute lg:hidden top-20 right-0 w-full bg-gray-800   flex flex-col items-center gap-6 font-semibold text-lg trasforn transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0 hidden"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <ul>
            <li className="list-none w-full text-center p-4 ">
              <Link href="/" className="hover:text-gray-400 transition">
                Início
              </Link>
            </li>
            <li className="list-none w-full text-center p-4 ">
              <Link
                href="/programacao"
                className="hover:text-gray-400 transition"
              >
                Programação
              </Link>
            </li>
            <li className="list-none w-full text-center p-4 ">
              <Link
                href="/batalha-de-startups"
                className="hover:text-gray-400 transition"
              >
                Batalha de Startups
              </Link>
            </li>
            <li className="list-none w-full text-center p-4 ">
              <Link
                href="/enucompi2025"
                className="hover:text-gray-400 transition"
              >
                Enucompi 2025
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
