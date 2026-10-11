"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from "react-i18next";
import "@/app/(i18Next)/i18n";

export default function AccountPage() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
            <Header />
            <main className="flex-1 max-w-xl mx-auto px-6 py-12 w-full">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    {t("Account")}
                </h1>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Электронная почта</label>
                        <input
                            type="email"
                            placeholder="user@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#89A291]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#89A291]"
                        />
                    </div>
                    <button className="w-full bg-[#89A291] text-white py-3.5 rounded-xl font-medium hover:bg-[#728b7a] transition shadow-sm">
                        Войти в аккаунт
                    </button>
                    <div className="text-center text-sm text-gray-500 pt-2">
                        Ещё нет аккаунта? <a href="#" className="text-[#89A291] font-medium hover:underline">Зарегистрироваться</a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
