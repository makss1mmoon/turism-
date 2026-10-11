"use client";

import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from "react-i18next";
import "@/app/(i18Next)/i18n";

export default function SupportPage() {
    const { t } = useTranslation();
    const [sent, setSent] = useState(false);

    const handleSend = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
            <Header />
            <main className="flex-1 max-w-2xl mx-auto px-6 py-12 w-full">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    {t("support")}
                </h1>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Возникли вопросы по туру или бронированию? Напишите нам или свяжитесь по контактам ниже:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="p-4 bg-gray-50 rounded-xl">
                            <span className="text-gray-400 block text-xs">Телефон / WhatsApp:</span>
                            <span className="font-semibold text-gray-800">+996 (555) 000-111</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl">
                            <span className="text-gray-400 block text-xs">Email поддержки:</span>
                            <span className="font-semibold text-gray-800">support@akjol-tourism.kg</span>
                        </div>
                    </div>

                    {sent ? (
                        <div className="p-4 bg-green-50 text-green-800 rounded-xl text-center font-medium">
                            Спасибо! Сообщение отправлено, скоро ответим.
                        </div>
                    ) : (
                        <form onSubmit={handleSend} className="space-y-4 pt-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Ваше сообщение</label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Опишите ваш вопрос..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#89A291]"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#89A291] text-white py-3.5 rounded-xl font-medium hover:bg-[#728b7a] transition shadow-sm"
                            >
                                Отправить сообщение
                            </button>
                        </form>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
