import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppFloat() {
  const whatsappNumber = "5511999999999"; // Todo: replace with real number
  const whatsappMessage = "Olá! Gostaria de fazer um pedido dos Bolos da Jô.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
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
        className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        data-testid="button-whatsapp-float"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20"></div>
    </motion.div>
  );
}