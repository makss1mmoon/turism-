"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from "react-i18next";
import Link from 'next/link';
import "@/app/(i18Next)/i18n";

export default function WishlistsPage() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
            <Header />
            <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    {t("wishlists")}
                </h1>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center py-12 space-y-4">
                    <div className="text-5xl">❤️</div>
                    <h2 className="text-2xl font-bold text-gray-800">Список желаемого пуст</h2>
                    <p className="text-gray-500 max-w-md mx-auto text-sm">
                        Добавляйте понравившиеся туры в избранное, чтобы не потерять их перед поездкой.
                    </p>
                    <Link
                        href="/list"
                        className="inline-block bg-[#89A291] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#728b7a] transition shadow-sm text-sm"
                    >
                        Посмотреть туры
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
