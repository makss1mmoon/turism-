"use client";

import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import "./(i18Next)/i18n";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Home = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
            <Header />
            <main className="flex-1">
                {/* Hero section with BG.png */}
                <div className="relative w-full h-[520px] overflow-hidden">
                    <Image
                        src={`${basePath}/BG.png`}
                        alt="Tourism Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md mb-4 tracking-wide">
                            {t("Ak Jol")}
                        </h1>
                        <p className="text-lg md:text-2xl text-white/95 drop-shadow mb-8 max-w-2xl font-light">
                            {t("welcome") || "Откройте для себя незабываемые туры и путешествия"}
                        </p>
                        <a
                            href="#tours"
                            className="bg-[#89A291] hover:bg-[#728b7a] text-white font-medium px-8 py-3.5 rounded-full shadow-lg transition duration-200"
                        >
                            {t("Tour list")}
                        </a>
                    </div>
                </div>

                {/* Content Section */}
                <div id="tours" className="max-w-6xl mx-auto px-6 py-14">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">
                            {t("Tour list")}
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Лучшие маршруты по живописным уголкам и горным вершинам
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-6 border border-gray-100 flex flex-col">
                            <div className="h-44 bg-[#89A291]/15 rounded-xl mb-4 flex items-center justify-center text-[#89A291] font-bold text-2xl">
                                🏔️ Иссык-Куль
                            </div>
                            <h3 className="font-bold text-xl text-gray-800 mb-2">Тур на озеро Иссык-Куль</h3>
                            <p className="text-gray-500 text-sm mb-6 flex-1">
                                Незабываемый отдых на жемчужине Центральной Азии с песчаными пляжами и кристально чистой водой.
                            </p>
                            <button className="w-full bg-[#89A291] text-white py-3 rounded-xl font-medium hover:bg-[#728b7a] transition shadow-sm">
                                {t("Booking")}
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-6 border border-gray-100 flex flex-col">
                            <div className="h-44 bg-[#89A291]/15 rounded-xl mb-4 flex items-center justify-center text-[#89A291] font-bold text-2xl">
                                ⛺ Сон-Куль
                            </div>
                            <h3 className="font-bold text-xl text-gray-800 mb-2">Высокогорное озеро Сон-Куль</h3>
                            <p className="text-gray-500 text-sm mb-6 flex-1">
                                Ночёвки в аутентичных юртах, конные прогулки и звёздное небо над высокогорным плато.
                            </p>
                            <button className="w-full bg-[#89A291] text-white py-3 rounded-xl font-medium hover:bg-[#728b7a] transition shadow-sm">
                                {t("Booking")}
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-6 border border-gray-100 flex flex-col">
                            <div className="h-44 bg-[#89A291]/15 rounded-xl mb-4 flex items-center justify-center text-[#89A291] font-bold text-2xl">
                                🌲 Ала-Арча
                            </div>
                            <h3 className="font-bold text-xl text-gray-800 mb-2">Национальный парк Ала-Арча</h3>
                            <p className="text-gray-500 text-sm mb-6 flex-1">
                                Живописные ущелья, бурные горные реки, водопады и треккинг среди ледников Тянь-Шаня.
                            </p>
                            <button className="w-full bg-[#89A291] text-white py-3 rounded-xl font-medium hover:bg-[#728b7a] transition shadow-sm">
                                {t("Booking")}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
