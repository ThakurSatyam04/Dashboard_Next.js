"use client"
import React, { useState } from 'react';
import Image from "next/image"
import { library } from '@fortawesome/fontawesome-svg-core';
{/* <FontAwesomeIcon icon="fa-light fa-magnifying-glass" style={{color: "#050505",}} /> */}
import { faSearch , faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HamburgerMenu from 'react-hamburger-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex flex-wrap sm:justify-between bg-neutral-900">
      {/* Hamburger Icon */}
      <div className="flex items-center sm:hidden m-2">
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={handleToggleMenu}
          width={18}
          height={15}
          strokeWidth={2}
          rotate={0}
          color="white"
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex ${
          isOpen ? 'flex-wrap gap-2' : 'hidden'
        } sm:flex pl-4 gap-2 sm:gap-5 size1 text-white items-center justify-center global_font m-1`}
      >
        <li className="cursor-pointer hover:brightness-75">Home</li>
        <li className="cursor-pointer hover:brightness-75">Contents</li>
        <li className="cursor-pointer hover:brightness-75">Categories</li>
        <li className="cursor-pointer hover:brightness-75">Settings</li>
      </ul>

      {/* User Profile */}
      <div className="flex gap-3 items-center justify-center text-white sm:mr-2">
        <Image
          className="bg-white rounded-full"
          src="/profile-user.png"
          width={30}
          height={30}
          alt="Picture of the author"
        />
        <div className="global_font">İsmail İhsan Bülbül</div>
      </div>
    </nav>

    </>
  )
}

export default Navbar
