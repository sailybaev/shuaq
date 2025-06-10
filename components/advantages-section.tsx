import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-8 md:py-12 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12">Преимущества</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card className="bg-red-600 text-white">
            <CardContent className="p-4 md:p-6">
              <div className="text-lg md:text-xl font-light mb-3 md:mb-4">01</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Стратегическое расположение</h3>
              <p className="text-sm md:text-base">ЖК Shyraq находится в перспективном районе Сарыарка на пересечении ул. Ш.Айтматова и ул. №344 с удобной транспортной доступностью.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0 h-full">
              <div className="relative h-40 md:h-48">
                <Image
                  src="/inf.jpeg"
                  alt="Инфраструктура"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="text-lg md:text-xl font-light mb-3 md:mb-4 text-gray-400">02</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Развитая инфраструктура</h3>
                <p className="text-sm md:text-base">Встроенные коммерческие помещения, подземный паркинг, современные системы безопасности и телекоммуникации.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white">
            <CardContent className="p-4 md:p-6">
              <div className="text-lg md:text-xl font-light mb-3 md:mb-4">03</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Комфортная среда</h3>
              <p className="text-sm md:text-base">Продуманный ландшафтный дизайн, озеленение, малые архитектурные формы, адаптированная среда для маломобильных групп населения.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="text-lg md:text-xl font-light mb-3 md:mb-4 text-gray-400">04</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Энергоэффективность</h3>
              <p className="text-sm md:text-base">Современные технологии и материалы обеспечивают сниженные затраты на эксплуатацию и комфортный микроклимат в помещениях.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 