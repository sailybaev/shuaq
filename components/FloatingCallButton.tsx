'use client'

import { Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

export function FloatingCallButton() {
  const isMobile = useIsMobile();
  const phone = "+7 706 699 95 00";
  const telLink = "tel:+77066999500";

  if (isMobile === undefined) {
    return null;
  }

  if (isMobile) {
    return (
      <a
        href={telLink}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-3 bg-red-600 text-white font-semibold shadow-md"
      >
        <Phone className="mr-2 h-5 w-5" />
        <span>{phone}</span>
      </a>
    );
  }

  return (
    <a
      href={telLink}
      className="fixed top-6 right-6 z-50"
    >
      <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg flex items-center">
        <Phone className="mr-2 h-5 w-5" />
        <span>Позвонить</span>
      </Button>
    </a>
  );
} 