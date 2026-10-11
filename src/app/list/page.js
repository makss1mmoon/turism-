"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from "react-i18next";
import Link from 'next/link';
import "@/app/(i18Next)/i18n";

export default function TourListPage() {
    const { t } = useTranslation();

    const tours = [
        {
            title: "Тур на озеро Иссык-Куль",
            badge: "🌊 Хит продаж",
            duration: "3 дня / 2 ночи",
            price: "12 000 сом",
            description: "Пляжный отдых, прогулка на теплоходе, ущелье Григорьевское и горячие источники.",
        },
        {
            title: "Высокогорное озеро Сон-Куль",
            badge: "⛺ Этно-тур",
            duration: "2 дня / 1 ночь",
            price: "15 500 сом",
            description: "Традиционные кыргызские юрты, национальная кухня, лошади и первозданная природа.",
        },
        {
            title: "Национальный парк Ала-Арча",
            badge: "🌲 Поход одного дня",
            duration: "1 день",
            price: "2 500 сом",
            description: "Треккинг к водопаду Ак-Сай, свежий хвойный воздух и величественные ледники.",
        },
        {
            title: "Красные скалы Джеты-Огуз",
            badge: "📸 Фото-тур",
            duration: "2 дня / 1 ночь",
            price: "9 800 сом",
            description: "Знаменитые скалы «Семь быков» и «Разбитое сердце», каньон «Сказка».",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
            <Header />
            <main className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        {t("Tour list")}
                    </h1>
                    <p className="text-gray-500">
                        Выбирайте лучшие направления для вашего отдыха
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tours.map((tour, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-xs font-semibold px-3 py-1 bg-[#89A291]/15 text-[#89A291] rounded-full">
                                        {tour.badge}
                                    </span>
                                    <span className="text-sm text-gray-400 font-medium">{tour.duration}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">{tour.title}</h2>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tour.description}</p>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div>
                                    <span className="text-xs text-gray-400 block">Стоимость:</span>
                                    <span className="text-xl font-bold text-gray-800">{tour.price}</span>
                                </div>
                                <Link
                                    href="/booking"
                                    className="bg-[#89A291] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#728b7a] transition shadow-sm text-sm"
                                >
                                    {t("Booking")}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
