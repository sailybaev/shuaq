import ApartmentCard from './layout-card'


export function LayoutsSection() {
  return (
    <section id="layouts" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Планировки</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ApartmentCard
            image="/placeholder.jpg"
            title="1-комнатная"
            size="40–55 м²"
            price="22 680 000"
            pricePerM2="567 000 до 626 000"
            available={true}
          />
          <ApartmentCard
            image="/placeholder.jpg"
            title="2-комнатная"
            size="60–75 м²"
            price="32 580 000"
            pricePerM2="543 000 до 600 000"
            available={false}
          />
          <ApartmentCard
            image="/placeholder.jpg"
            title="3-комнатная"
            size="85–100 м²"
            price="47 260 000"
            pricePerM2="556 000 до 562 000"
            available={true}
          />
          <ApartmentCard
            image="/placeholder.jpg "
            title="4-комнатная"
            size="40–55 м²"
            price="22 680 000"
            pricePerM2="567 000 до 626 000"
            available={true}
          />
        </div>
      </div>
    </section>
  )
} 