"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from "react-i18next";
import "@/app/(i18Next)/i18n";

export default function AboutPage() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
            <Header />
            <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    {t("About")}
                </h1>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-gray-700 space-y-6 leading-relaxed">
                    <p className="text-lg">
                        Добро пожаловать в <strong>Ak Jol</strong> — ваш надёжный проводник по самым завораживающим уголкам и горным тропам.
                    </p>
                    <p>
                        Мы организуем авторские туры, походы и комфортный отдых по Кыргызстану. Наша цель — показать красоту природы, национальные традиции и подарить незабываемые впечатления каждому путешественнику.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                        <div className="p-4 bg-[#89A291]/10 rounded-xl text-center">
                            <div className="text-3xl mb-2">🏔️</div>
                            <div className="font-bold text-gray-800">50+ Маршрутов</div>
                            <div className="text-sm text-gray-500">По всей стране</div>
                        </div>
                        <div className="p-4 bg-[#89A291]/10 rounded-xl text-center">
                            <div className="text-3xl mb-2">⭐</div>
                            <div className="font-bold text-gray-800">5+ Лет опыта</div>
                            <div className="text-sm text-gray-500">Проверенные гиды</div>
                        </div>
                        <div className="p-4 bg-[#89A291]/10 rounded-xl text-center">
                            <div className="text-3xl mb-2">🤝</div>
                            <div className="font-bold text-gray-800">10 000+ Туристов</div>
                            <div className="text-sm text-gray-500">Довольных клиентов</div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
