"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from "react-i18next";
import "@/app/(i18Next)/i18n";

export default function ProfilePage() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
            <Header />
            <main className="flex-1 max-w-2xl mx-auto px-6 py-12 w-full">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    {t("profile")}
                </h1>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
                    <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
                        <div className="w-16 h-16 rounded-full bg-[#89A291] text-white flex items-center justify-center font-bold text-2xl">
                            U
                        </div>
                        <div>
                            <div className="font-bold text-xl text-gray-800">Пользователь Ak Jol</div>
                            <div className="text-sm text-gray-400">user@example.com</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="p-4 bg-gray-50 rounded-xl">
                            <span className="text-gray-400 block text-xs">Забронировано туров:</span>
                            <span className="font-bold text-lg text-gray-800">2 тура</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl">
                            <span className="text-gray-400 block text-xs">Бонусные баллы:</span>
                            <span className="font-bold text-lg text-[#89A291]">1 250</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
