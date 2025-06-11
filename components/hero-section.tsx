import Image from "next/image"
import { MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <Card className="relative overflow-hidden rounded-3xl">
        <div className="relative h-[400px] md:h-[600px] w-full">
          <Image
            src="/jk2.jpeg"
            alt="Вид с воздуха на современный жилой комплекс"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-16 text-white">
            <div className="max-w-4xl mb-4 md:mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                ЖК Shyraq
                <br className="hidden md:block" />
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4 md:mb-8">
              <Badge
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-none py-2 md:py-3 px-4 md:px-6 w-fit rounded-full"
              >
                <span className="font-medium text-sm md:text-base">Срок сдачи: II квартал 2026 года</span>
              </Badge>

              <Badge
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-none py-2 md:py-3 px-4 md:px-6 w-fit rounded-full"
              >
                <MapPin className="h-4 w-4 mr-2" />
                <span className="font-medium text-sm md:text-base">ул. Шаймерден Косшыгулулы, 27/1</span>
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <a href="#contact-form" className="w-full sm:w-auto min-w-[280px] md:min-w-[400px]">
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full py-3 md:py-4 px-8 md:px-16 rounded-full text-base md:text-lg font-semibold min-w-[280px] md:min-w-[400px]">
                  Получить консультацию
                </Button>
              </a>
              {/* <Button
                variant="outline"
                className="bg-white text-gray-800 hover:bg-gray-100 w-full py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg font-semibold"
              > 
                Скачать буклет
                <Download className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button> */}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
} 