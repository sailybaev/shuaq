import {
  Camera,
  Scan,
  CableCarIcon as Elevator,
  Paintbrush,
  Leaf,
  Building2,
  Shield,
  Zap,
  Lock,
  Baby,
  Armchair,
  Dumbbell,
  Lightbulb,
  Recycle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ImageSlider } from "@/components/image-slider";
import { FeatureCard } from "@/components/feature-card";

export function CourtyardSection() {
  const lobbyImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Жилой комплекс Shyraq",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Территория жилого комплекса",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Инфраструктура комплекса",
    },
  ];

  return (
    <section id="courtyard" className="py-12 container mx-auto px-4 scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Двор</h2>
          <p className="text-gray-700 mb-6">
            Современное жилое пространство, спроектированное с учетом комфорта, 
            энергоэффективности и эстетики. Комплекс расположен в одном из 
            перспективных районов города Астаны и предлагает продуманные решения 
            для комфортной жизни.
          </p>


          <Card className="bg-gray-900 rounded-xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FeatureCard icon={Lock} title="Закрытая территория" />
                <FeatureCard icon={Baby} title="Безопасная детская площадка" />
                <FeatureCard icon={Armchair} title="Уютные зоны отдыха" />
                <FeatureCard icon={Leaf} title="Ландшафтный дизайн с озеленением" />
                <FeatureCard icon={Dumbbell} title="Workout-зоны" />
                <FeatureCard icon={Lightbulb} title="Вечернее освещение" />
                <FeatureCard icon={Recycle} title="Экологичные материалы" />
                <FeatureCard icon={Camera} title="Видеонаблюдение" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="h-[500px]">
          <ImageSlider images={lobbyImages} />
        </div>
      </div>
    </section>
  );
}
