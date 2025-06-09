import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"


export function FacadeSection() {
  return (
    <section id="facade" className="py-12 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Фасад</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-red-600 text-white">
            <CardContent className="p-0">
            <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Крытый паркинг"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Крытый паркинг"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white">
            <CardContent className="p-0">
            <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Крытый паркинг"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
            <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Крытый паркинг"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 