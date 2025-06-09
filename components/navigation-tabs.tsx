export function NavigationTabs() {
  return (
    <div className="border-b sticky top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-8">
        <nav className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 py-4">
          <a 
            href="#advantages" 
            className="py-3 px-4 text-gray-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-all duration-200 font-medium"
          >
            Преимущества
          </a>
          <a 
            href="#infrastructure" 
            className="py-3 px-4 text-gray-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-all duration-200 font-medium"
          >
            Инфраструктура
          </a>
          <a 
            href="#location" 
            className="py-3 px-4 text-gray-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-all duration-200 font-medium"
          >
            Расположение
          </a>
          <a 
            href="#layouts" 
            className="py-3 px-4 text-gray-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-all duration-200 font-medium"
          >
            Планировки
          </a>
          <a 
            href="#facade" 
            className="py-3 px-4 text-gray-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-all duration-200 font-medium"
          >
            Фасад
          </a>
          <a 
            href="#lobby" 
            className="py-3 px-4 text-gray-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-all duration-200 font-medium"
          >
            Холл
          </a>
          <a 
            href="#courtyard" 
            className="py-3 px-4 text-gray-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-all duration-200 font-medium"
          >
            Двор
          </a>
        </nav>
      </div>
    </div>
  )
} 