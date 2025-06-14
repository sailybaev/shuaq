import { Camera, Scan, MoveVertical as MV, Paintbrush } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ImageSlider } from "@/components/image-slider"
import { FeatureCard } from "@/components/feature-card"

export function DesignerLobby() {
  const lobbyImages = [
    {
      src: "/lobby3.png",
      alt: "Дизайнерский холл жилого комплекса Shyraq",
    },
    {
      src: "/lobby2.png",
      alt: "Интерьер холла Shyraq",
    },
    {
      src: "/lobby1.png",
      alt: "Лобби жилого комплекса Shyraq",
    },
  ]

  return (
    <section id="lobby" className="py-12 container mx-auto px-4 scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="h-[500px]">
          <ImageSlider images={lobbyImages} />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4">Дизайнерский холл</h2>
          <p className="text-gray-700 mb-6">
            Жилой комплекс Shyraq — это современное жилое пространство, спроектированное с учетом комфорта, 
            энергоэффективности и эстетики. Комплекс расположен в одном из перспективных районов города Астаны 
            и предлагает продуманные решения для комфортной жизни.
          </p>
          <p className="text-gray-700 mb-8">
            Особое внимание уделено доступной среде — пандусы, адаптированные входы и навигация. 
            Современная архитектура, качественные отделочные материалы и выразительный фасад создают 
            уникальную атмосферу жилого пространства.
          </p>

          <Card className="bg-gray-900 rounded-xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FeatureCard icon={Camera} title="Видеонаблюдение" />
                <FeatureCard icon={Scan} title="Face ID" />
                <FeatureCard icon={MV} title="Потолки 3 метра" />
                <FeatureCard icon={Paintbrush} title="Авторский дизайн" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 