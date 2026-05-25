import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

// Prop type
type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  // Sidebar translation slider logic
  const navSidebarPosition = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay Background - Click to close menu */}
      <div 
        onClick={closeNav}
        className={`fixed inset-0 z-[1000] bg-black bg-opacity-70 w-full h-screen transition-opacity duration-500 ${
          showNav ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      ></div>

      {/* Side Navigation Links Panel */}
      <div 
        className={`text-white ${navSidebarPosition} transform transition-all duration-500 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] space-y-6 z-[10000] bg-[#0f0715]`}
      >
        {navLinks.map((navlink) => {
          return (
            <Link key={navlink.id} href={navlink.url} onClick={closeNav}>
              <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px] hover:text-emerald-400 transition-colors">
                {navlink.label}
              </p>
            </Link>
          );
        })}

        {/* Close Button X */}
        <CgClose 
          onClick={closeNav}
          className="absolute top-[2rem] right-[2rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer hover:text-red-500 transition-colors"
        />
      </div>
    </div>
  );
};

export default MobileNav;
