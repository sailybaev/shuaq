import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MoveVertical, Maximize2, ScanFace } from "lucide-react";

export function AdvantagesGrid() {
  return (
    <section id="advantages" className="py-8 px-4 md:py-12 bg-gray-50 scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12">Преимущества</h2>
      <div className="grid grid-cols-2 grid-rows-4 gap-4">
        <div className="relative row-span-2 col-start-1 row-start-1 rounded-lg overflow-hidden">
          <Image
            src="/inf.jpeg"
            alt="Building"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white p-2 bg-black bg-opacity-50 rounded-md text-center">
            <p className="text-lg font-bold">9 этажей</p>
            <p className="text-lg font-bold">298 квартир</p>
          </div>
        </div>

        <Card className="flex flex-col items-center justify-center text-center p-4 col-start-2 row-start-1">
          <CardContent className="p-0">
            <div className="text-4xl text-red-600 mb-2 flex items-center justify-center"><MoveVertical size={40} /></div>
            <p className="text-lg font-semibold">Высота потолков 3м</p>
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center justify-center text-center p-4 col-start-2 row-start-2">
          <CardContent className="p-0">
            <div className="text-4xl text-red-600 mb-2 flex items-center justify-center"><Maximize2 size={40} /></div>
            <p className="text-lg font-semibold">Увеличенные окна</p>
          </CardContent>
        </Card>

        <div className="relative col-span-2 row-start-3 rounded-lg overflow-hidden">
          <Image
            src="/jk.jpeg"
            alt="New Feature Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white p-2 bg-black bg-opacity-50 rounded-md text-center">
            <p className="text-lg font-bold">от 37,19 до 84,88 м2</p>
          </div>
        </div>
        
        <div className="relative row-span-1 col-start-1 row-start-4 rounded-lg overflow-hidden">
          <Image
            src="/min.jpeg"
            alt="Yard"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white p-2 bg-black bg-opacity-50 rounded-md text-center px-6">
            <p className="text-lg font-bold">Закрытый двор</p>
          </div>
        </div>

        <Card className="flex flex-col items-center justify-center text-center p-4 col-start-2 row-start-4 row-span-1">
          <CardContent className="p-0">
            <div className="text-4xl text-red-600 mb-2 flex items-center justify-center"><ScanFace size={40} /></div>
            <p className="text-lg font-semibold">Face ID</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
