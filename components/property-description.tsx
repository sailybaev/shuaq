import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function PropertyDescription() {
  return (
    <section
      id="advantages"
      className="py-8 md:py-12 container mx-auto px-4 scroll-mt-20"
    >
      <div className="grid md:grid-cols-2 gap-6 md:gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            <span className="text-red-600">Shyraq</span> - Ваш семейный очаг
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">
            это современное жилое пространство, спроектированное с учетом
            комфорта, энергоэффективности и эстетики. Комплекс расположен в
            одном из перспективных районов города Астаны и предлагает
            продуманные решения для комфортной жизни.
          </p>
        </div>
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-red-600 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Расположение</h3>
              <p className="text-gray-700 text-sm md:text-base">
                г. Астана, ул. Шаймерден Косшыгулулы, 27/1
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
