import React from "react";
import Image from 'next/image';
import { HiOutlineMenu } from 'react-icons/hi';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur bg-neutral-900/60 border-b border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <a href="#home" className="text-neutral-200 hover:text-white transition">Home</a>
                    <a href="#about" className="text-neutral-200 hover:text-white transition">About</a>
                    <a href="#skills" className="text-neutral-200 hover:text-white transition">Skills</a>
                    <a href="#resume" className="text-neutral-200 hover:text-white transition">Resume</a>
                    <a href="#contact" className="text-neutral-200 hover:text-white transition">Contact</a>
                </div>

                {/* Mobile menu placeholder (kept simple for now) */}
                <div className="md:hidden">
                    <button aria-label="Open menu" className="text-neutral-200 hover:text-white">
                        <HiOutlineMenu size={22} aria-hidden={false} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
