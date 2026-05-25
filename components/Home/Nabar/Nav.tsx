"use client";

import { navLinks } from '@/constant/constant';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// Define props type
type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavbg(true);
      } else {
        setNavbg(false);
      }
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#230b39]" : "bg-transparent"
      } h-[12vh] z-[10] w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[80%] mx-auto">
        {/* LOGO */}
        <Image
          src="/images/logo2.png"
          alt="LOGO"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />

        {/* NAV LINKS + SOCIAL ICONS + HAMBURGER */}
        <div className="flex items-center space-x-10">
          {/* Nav Links - Desktop View ONLY */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className="nav__link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>

          {/* Social Media Icons & Mobile Hamburger Menu Wrapper */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <a
              href="https://facebook.com/creativetaginstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition duration-200"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com/p/DGdBYYXoQph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition duration-200"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/923329292118"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 transition duration-200"
            >
              <FaWhatsapp size={20} />
            </a>

            {/* HAMBURGER MENU ICON - Fixed: Triggers openNav and hides on large desktop views */}
            <HiBars3BottomRight 
              onClick={openNav}
              className="w-8 h-8 text-white cursor-pointer lg:hidden hover:text-emerald-400 transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

