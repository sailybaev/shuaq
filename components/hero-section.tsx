import Image from "next/image"
import { MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="relative overflow-hidden rounded-3xl">
        <div className="relative h-[600px] w-full">
          <Image
            src="/jk2.jpeg"
            alt="Вид с воздуха на современный жилой комплекс"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-white">
            <div className="max-w-4xl mb-8">
              <h1 className="text-5xl md:text-5xl font-bold mb-2">
                Сочетание природы, безопасности
                <br />
                и городской динамики
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Badge
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-none py-3 px-6 w-fit rounded-full"
              >
                <span className="font-medium">Срок сдачи: II квартал 2026 года</span>
              </Badge>

              <Badge
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-none py-3 px-6 w-fit rounded-full"
              >
                <MapPin className="h-4 w-4 mr-2" />
                <span className="font-medium">Ш.Айтматова и ул. №344.</span>
              </Badge>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact-form">
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto py-4 px-8 rounded-full text-lg font-semibold">
                Получить консультацию
              </Button>
              </a>
              <Button
                variant="outline"
                className="bg-white text-gray-800 hover:bg-gray-100 w-full sm:w-auto py-4 px-8 rounded-full text-lg font-semibold"
              > 
                Скачать буклет
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
} 