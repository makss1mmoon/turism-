"use client";

import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from "react-i18next";
import "@/app/(i18Next)/i18n";

export default function BookingPage() {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
            <Header />
            <main className="flex-1 max-w-2xl mx-auto px-6 py-12 w-full">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    {t("Booking")}
                </h1>

                {submitted ? (
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center space-y-4">
                        <div className="text-5xl">✅</div>
                        <h2 className="text-2xl font-bold text-gray-800">Заявка успешно отправлена!</h2>
                        <p className="text-gray-600">Наш менеджер свяжется с вами в течение 15 минут для подтверждения бронирования.</p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="bg-[#89A291] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#728b7a] transition"
                        >
                            Забронировать ещё
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Выберите тур</label>
                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#89A291] bg-white">
                                <option>Тур на озеро Иссык-Куль</option>
                                <option>Высокогорное озеро Сон-Куль</option>
                                <option>Национальный парк Ала-Арча</option>
                                <option>Ущелье Джеты-Огуз</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Иван"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#89A291]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Номер телефона</label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="+996 (555) 123-456"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#89A291]"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Дата начала</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#89A291]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Количество человек</label>
                                <input
                                    type="number"
                                    defaultValue={1}
                                    min={1}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#89A291]"
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-[#89A291] text-white py-3.5 rounded-xl font-medium hover:bg-[#728b7a] transition shadow-sm">
                            Подтвердить бронирование
                        </button>
                    </form>
                )}
            </main>
            <Footer />
        </div>
    );
}
