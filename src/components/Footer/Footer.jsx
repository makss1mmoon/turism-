"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#89A291] text-white py-8 mt-auto">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <div>
                    <span className="font-bold text-xl tracking-wide">Ak Jol</span>
                    <span className="ml-2 text-white/80">© {new Date().getFullYear()} Все права защищены.</span>
                </div>
                <div className="flex gap-6 text-white/90">
                    <Link href="/list" className="hover:text-white transition">Туры</Link>
                    <Link href="/booking" className="hover:text-white transition">Бронирование</Link>
                    <Link href="/aboutus" className="hover:text-white transition">О нас</Link>
                    <Link href="/support" className="hover:text-white transition">Поддержка</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;