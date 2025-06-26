'use client'

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export function PhoneNumberSection() {
  const phone = "+7 706 699 95 00";
  const telLink = "tel:+7 706 699 95 00";

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <section className="py-12" id="phone-section">
      <div className="container mx-auto px-4">
        <Card className="rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 bg-gray-900">
            <motion.div 
              className="p-8 md:p-12 flex flex-col justify-center items-start"
              {...fadeInUp}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Связаться с нами</h2>
              <p className="text-gray-300 mb-8">Позвоните нам, и наши менеджеры ответят на все ваши вопросы</p>
              <a
                href={telLink}
                className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-xl w-full h-16 text-2xl font-semibold transition-colors duration-200 shadow-lg mb-4"
              >
                {phone}
              </a>
              <span className="text-gray-400">Нажмите, чтобы позвонить</span>
            </motion.div>
            <motion.div 
              className="relative hidden md:block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src="/jk.jpeg" alt="Жилой комплекс" fill className="object-cover" />
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  )
} 
