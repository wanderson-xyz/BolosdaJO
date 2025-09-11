import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import { companyInfo } from "@/data/products";

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de fazer um pedido dos Bolos da Jô.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${companyInfo.phone}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        delay: 2,
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative z-10"
        data-testid="button-whatsapp-float"
      >
        <FaWhatsapp className="h-6 w-6" />
      </Button>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20 pointer-events-none" aria-hidden="true"></div>
    </motion.div>
  );
}