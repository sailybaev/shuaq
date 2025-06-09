import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function PropertyDescription() {
  return (
    <section
      id="advantages"
      className="py-12 container mx-auto px-4 scroll-mt-20"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-red-600">Shyraq</span> - Ваш семейный очаг
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            это современное жилое пространство, спроектированное с учетом
            комфорта, энергоэффективности и эстетики. Комплекс расположен в
            одном из перспективных районов города Астаны и предлагает
            продуманные решения для комфортной жизни.
          </p>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-red-600 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Расположение</h3>
              <p className="text-gray-700">
                г. Астана, район Сарыарка, пересечение ул. Ш.Айтматова и ул.
                №344
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Badge className="bg-red-600 text-white">СЭЗ</Badge>
            <div>
              <h3 className="font-semibold mb-1">Статус</h3>
              <p className="text-gray-700">
                Реализуется в рамках специальной экономической зоны «Астана –
                новый город»
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
