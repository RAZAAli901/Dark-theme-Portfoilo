"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // if scroll down hide the navbar
          setShow(false); 
        } else {
          // if scroll up show the navbar
          setShow(true);  
        }
        setLastScrollY(window.scrollY); 
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-6 md:px-10 transition-transform duration-300 ${
      show ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <div className="flex items-center">
          <div>
            <img
              alt="Logo"
              draggable="false"
              loading="lazy"
              width="70"
              height="70"
              className="cursor-pointer rounded-full hover:scale-110 transition-transform duration-300 w-10 h-10 object-cover border border-purple-500/50"
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Jeimeen&backgroundColor=050510"
            />
          </div>
          <a className="hidden md:flex font-bold ml-[10px] text-gray-300 hover:text-purple-400 transition" href="#about-me">
            Jeimeen (Jony)
          </a>
        </div>
        
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a className="cursor-pointer hover:text-[#7042f8] transition" href="#about-me">About me</a>
            <a className="cursor-pointer hover:text-[#7042f8] transition" href="#skills">Skills</a>
            <a className="cursor-pointer hover:text-[#7042f8] transition" href="#projects">Projects</a>
            <a className="cursor-pointer hover:text-[#7042f8] transition" href="#contact">Contact</a>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5">
           <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/jeimeen_editzzz/" className="text-white hover:text-purple-500 transition">
             Ig
           </a>
           <a target="_blank" rel="noreferrer noopener" href="https://x.com/Jeimeen3031" className="text-white hover:text-purple-500 transition">
             X
           </a>
           <a target="_blank" rel="noreferrer noopener" href="https://github.com/JeimeenChaudhari" className="text-white hover:text-purple-500 transition">
             Gh
           </a>
           <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/jeimeen-chaudhari-3a680028b/" className="text-white hover:text-purple-500 transition">
             In
           </a>
        </div>
        
        <button className="md:hidden text-white focus:outline-none text-4xl">☰</button>
      </div>
    </div>
  );
}
