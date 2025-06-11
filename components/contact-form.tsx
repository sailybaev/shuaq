'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    object: "ЖК Shyraq",
    subj: "заявка с сайта",
    form: "форма"
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/make/makecrm.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response) {
        toast({
          title: "Успешно!",
          description: "Форма успешно отправлена!",
          variant: "default",
        });
        setFormData({
          name: "",
          phone: "",
          object: "ЖК Shyraq",
          subj: "заявка с сайта",
          form: "форма"
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Ошибка!",
        description: "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <section className="py-12" id="contact-form">
      <div className="container mx-auto px-4">
        <Card className="rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 bg-gray-900">
            <motion.div 
              className="p-8 md:p-12"
              {...fadeInUp}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Оставьте заявку</h2>
              <p className="text-gray-300 mb-8">Наши менеджера свяжутся с вами в ближайшее время</p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <div className="relative">
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800 border-none text-white rounded-full py-6 px-6 w-full"
                      placeholder="Имя *"
                      required
                    />
                    <span className="absolute text-red-500 top-3 -right-3">*</span>
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-800 border-none text-white rounded-full py-6 px-6 w-full"
                      placeholder="Телефон *"
                      required
                    />
                    <span className="absolute text-red-500 top-3 -right-3">*</span>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Отправка..." : "Оставить заявку"}
                  </Button>
                </motion.div>
              </form>
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