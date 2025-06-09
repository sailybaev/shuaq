import { Card, CardContent } from "@/components/ui/card"

export function TechnicalSpecifications() {
  return (
    <section id="location" className="py-12 container mx-auto px-4 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8">Технические характеристики</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Конструктивные решения</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Фундаменты – Ленточный (Ростверк)</li>
                <li>• Стены тех помещения – ЖБ Панели</li>
                <li>• Газобетонный блок</li>
                <li>• Плиты перекрытия и покрытия – сборные, железобетонные</li>
                <li>• Лестницы – сборные железобетонные</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Высота помещений</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Подвальные помещения – 1,80 м</li>
                <li>• С 2 по 9 этажи – от 3,0 м (жилые)</li>
                <li>• Жилой дом с воздушным продухом на кровле</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Стены и перегородки</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Наружные стены – ЖБ Панели</li>
                <li>• Внутренние стены – ЖБ Панели</li>
                <li>• Перегородки из газоблока</li>
                <li>• Сан.узлы - газоблок толщ. 100мм</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Отделка</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Полы в квартирах - цементно-песчаная стяжка</li>
                <li>• Полы в тамбурах, холлах - керамогранит</li>
                <li>• Потолки в квартирах – без отделки</li>
                <li>• Стены в квартирах – штукатурка, черновая отделка</li>
                <li>• 1-9 этажи – вентилируемый фасад</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Инженерные системы</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Окна - металлопластиковый профиль</li>
                <li>• Лифт грузоподъемностью 1000 кг</li>
                <li>• Поквартирная система отопления</li>
                <li>• Естественная вентиляция</li>
                <li>• Поквартирная стояковая система водоснабжения</li>
                <li>• Скрытая электропроводка</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Кровля</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Совмещенная крыша</li>
                <li>• Пароизоляция</li>
                <li>• Утепление</li>
                <li>• 2 слоя гидроизоляции</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 