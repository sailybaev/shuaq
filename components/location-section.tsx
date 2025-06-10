'use client';

import React, { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function LocationSection() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Check if the 2GIS Maps API script is already loaded
    if (document.getElementById('2gis-map-script')) {
      initializeMap();
      return;
    }

    const script = document.createElement('script');
    script.id = '2gis-map-script';
    script.src = 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full';
    script.async = true;
    script.onload = () => {
      initializeMap();
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script if component unmounts
      const scriptElement = document.getElementById('2gis-map-script');
      if (scriptElement) {
        document.head.removeChild(scriptElement);
      }
    };
  }, []);

  const initializeMap = () => {
    // @ts-ignore
    if (window.DG && mapRef.current) {
      // @ts-ignore
      window.DG.then(function () {
        // @ts-ignore
        const map = window.DG.map(mapRef.current, {
          center: [51.170199, 71.377677], // Updated coordinates for Shyraq
          zoom: 16,
        });

        // @ts-ignore
        window.DG.marker([51.170199, 71.377677]).addTo(map).bindPopup('SHYRAQ');
      });
    }
  };

  return (
    <section id="location" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Расположение</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">ЖК SHYRAQ находится возле набережной реки Есиль</h3>
            {/* <p className="text-lg mb-4">Жилой комплекс SHYRAQ расположен в престижном районе столицы</p>
            <p className='text-lg mb-4'>Расположение в развивающемся районе Сарыарка с удобной транспортной доступностью</p>
            <p className='text-lg mb-4'>Участок в специальной экономической зоне — стратегическая значимость и инвестиционная привлекательность.</p>
            <p className="text-lg">Благодаря удобному выезду на ключевые городские магистрали, Вы легко сможете передвигаться по городу, экономя время на дороге и оставаясь мобильными каждый день.</p>
           */}
          </div>
          <div ref={mapRef} id="map-container" className="h-96 rounded-lg">
            {/* 2GIS Map will be rendered here */}
          </div>
        </div>

        <div className="mt-8 md:mt-16">
          <Card className="border-none shadow-lg bg-gray-900 text-white">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-center text-white">Что рядом</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="schools" className="border-gray-700">
                  <AccordionTrigger className="text-xl md:text-2xl font-semibold text-white hover:text-gray-300 text-left">Образовательное центры</AccordionTrigger>
                  <AccordionContent className="text-gray-200">
                    <p className="text-base md:text-lg mb-3 md:mb-4">В шаговой доступности от комплекса расположена современная школа на 1200 мест, оснащённая всем необходимым для качественного и удобного обучения.</p>
                    <ul className="list-disc list-inside text-base md:text-lg">
                      <li>школа-гимназия №67</li>
                      <li>школа-гимназия №80</li>
                      <li>школа-лицей №11</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="active-life" className="border-gray-700">
                  <AccordionTrigger className="text-xl md:text-2xl font-semibold text-white hover:text-gray-300 text-left">Активная жизнь рядом с домом</AccordionTrigger>
                  <AccordionContent className="text-gray-200">
                    <p className="text-base md:text-lg mb-3 md:mb-4">Сегодня забота о здоровье и физической форме — не просто мода, а часть повседневной жизни.</p>
                    <p className="text-base md:text-lg mb-3 md:mb-4">Вокруг SHYRAQ расположены современные фитнес-центры, тренажёрные залы и спортивные комплексы, где каждый сможет выбрать занятия по душе.</p>
                    <ul className="list-disc list-inside text-base md:text-lg">
                      <li>фитнес-центры</li>
                      <li>тренажерные залы</li>
                      <li>спортивные комплексы</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>


                <AccordionItem value="spiritual" className="border-gray-700">
                  <AccordionTrigger className="text-xl md:text-2xl font-semibold text-white hover:text-gray-300 text-left">Мечеть им. "Ырыскельды кажы"</AccordionTrigger>
                  <AccordionContent className="text-gray-200">
                    <p className="text-base md:text-lg">Недалеко от SHYRAQ расположена мечеть, где каждый может найти духовное спокойствие и общение с единомышленниками. Удобное расположение позволяет легко посещать молитвы и участвовать в общественных мероприятиях.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="nature" className="border-gray-700">
                  <AccordionTrigger className="text-xl md:text-2xl font-semibold text-white hover:text-gray-300 text-left">Окружен природой, вдохновлён комфортом</AccordionTrigger>
                  <AccordionContent className="text-gray-200">
                    <p className="text-base md:text-lg mb-3 md:mb-4">SHYRAQ расположен в уникальном месте — прямо между зелёными парками и в окружении живописных набережных.</p>
                    <p className="text-base md:text-lg mb-3 md:mb-4">Такое расположение создаёт идеальные условия для прогулок, утренних пробежек и спокойного отдыха на природе.</p>
                    <p className="text-base md:text-lg">Всё это делает повседневную жизнь по-настоящему комфортной и гармоничной.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 