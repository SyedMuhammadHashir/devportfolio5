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
        navBg ? "bg-[#230b39]" : "fixed"
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

        {/* NAV LINKS + SOCIAL ICONS */}
        <div className="flex items-center space-x-10">
          {/* Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className="nav__link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

