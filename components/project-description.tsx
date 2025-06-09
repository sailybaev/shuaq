import { MapPin, Building2, Factory, Leaf, Shield, Zap, Trees, Palette, Users, Car, Store } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FeatureCard } from "@/components/feature-card"

export function ProjectDescription() {
  return (
    <section id="about" className="py-12 container mx-auto px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Жилой комплекс Shyraq</h2>
        
        <p className="text-gray-700 mb-8 text-lg text-center">
          Современное жилое пространство, спроектированное с учетом комфорта, энергоэффективности и эстетики. 
          Комплекс расположен в одном из перспективных районов города Астаны и предлагает продуманные решения 
          для комфортной жизни.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Основные характеристики</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                  <span>г. Астана, район Сарыарка, пересечение ул. Ш.Айтматова и ул. №344</span>
                </li>
                <li className="flex items-start gap-2">
                  <Building2 className="w-5 h-5 text-gray-600 mt-1" />
                  <span>Многоквартирный жилой комплекс со встроенными помещениями и паркингом</span>
                </li>
                <li className="flex items-start gap-2">
                  <Factory className="w-5 h-5 text-gray-600 mt-1" />
                  <span>Реализуется в рамках специальной экономической зоны «Астана – новый город»</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Преимущества</h3>
              <div className="grid grid-cols-1 gap-4">
                <FeatureCard icon={MapPin} title="Удобное расположение" />
                <FeatureCard icon={Shield} title="Специальная экономическая зона" />
                <FeatureCard icon={Store} title="Встроенные коммерческие помещения" />
                <FeatureCard icon={Car} title="Подземный и наземный паркинг" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-900 rounded-xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-white">Технологии и комфорт</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard icon={Palette} title="Современная архитектура" />
              <FeatureCard icon={Trees} title="Продуманный ландшафтный дизайн" />
              <FeatureCard icon={Users} title="Доступная среда" />
              <FeatureCard icon={Zap} title="Энергоэффективные технологии" />
              <FeatureCard icon={Shield} title="Системы безопасности" />
              <FeatureCard icon={Leaf} title="Качественные материалы" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 