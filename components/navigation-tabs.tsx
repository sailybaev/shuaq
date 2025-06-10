'use client'

import { useState } from 'react'

export function NavigationTabs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="border-b sticky top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center justify-between py-2">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg`}
        >
          <nav className="flex flex-col">
            <a
              href="#advantages"
              className="py-3 px-4 text-gray-600 hover:text-red-600 hover:bg-gray-50 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Преимущества
            </a>
            <a
              href="#infrastructure"
              className="py-3 px-4 text-gray-600 hover:text-red-600 hover:bg-gray-50 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Инфраструктура
            </a>
            <a
              href="#location"
              className="py-3 px-4 text-gray-600 hover:text-red-600 hover:bg-gray-50 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Расположение
            </a>
            <a
              href="#layouts"
              className="py-3 px-4 text-gray-600 hover:text-red-600 hover:bg-gray-50 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Планировки
            </a>
            <a
              href="#facade"
              className="py-3 px-4 text-gray-600 hover:text-red-600 hover:bg-gray-50 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Фасад
            </a>
            <a
              href="#lobby"
              className="py-3 px-4 text-gray-600 hover:text-red-600 hover:bg-gray-50 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Холл
            </a>
            <a
              href="#courtyard"
              className="py-3 px-4 text-gray-600 hover:text-red-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Двор
            </a>
          </nav>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex overflow-x-auto scrollbar-hide py-4">
          <div className="flex space-x-4 md:space-x-8 lg:space-x-12 min-w-max">
            <a
              href="#advantages"
              className="py-3 px-4 text-gray-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-all duration-200 font-medium whitespace-nowrap"
            >
              Преимущества
            </a>
            <a
              href="#infrastructure"
              className="py-3 px-4 text-gray-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-all duration-200 font-medium whitespace-nowrap"
            >
              Инфраструктура
            </a>
            <a
              href="#location"
              className="py-3 px-4 text-gray-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-all duration-200 font-medium whitespace-nowrap"
            >
              Расположение
            </a>
            <a
              href="#layouts"
              className="py-3 px-4 text-gray-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-all duration-200 font-medium whitespace-nowrap"
            >
              Планировки
            </a>
            <a
              href="#facade"
              className="py-3 px-4 text-gray-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-all duration-200 font-medium whitespace-nowrap"
            >
              Фасад
            </a>
            <a
              href="#lobby"
              className="py-3 px-4 text-gray-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-all duration-200 font-medium whitespace-nowrap"
            >
              Холл
            </a>
            <a
              href="#courtyard"
              className="py-3 px-4 text-gray-600 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition-all duration-200 font-medium whitespace-nowrap"
            >
              Двор
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
} 