import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import heroImage from "@assets/generated_images/Elegant_pink_bow_cake_ba0afee2.png";
import OptimizedImage from "./OptimizedImage";

import { companyInfo } from "@/data/products";

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    const message = "Olá! Vi o site e gostaria de fazer um pedido. Podem me ajudar?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${companyInfo.phone}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 to-orange-50">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={heroImage}
          alt="Bolo elegante da Jô"
          className="opacity-20"
          aspectRatio=""
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/80 to-orange-100/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Bolos caseiros e{" "}
              <span className="text-primary font-serif">kits de festa</span>
              <br />
              completos
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Seja na festa da firma ou nos encontros em família, a Bolos da Jô está sempre presente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                data-testid="button-whatsapp-hero"
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                Faça seu pedido
              </Button>
              
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground">
                  Bolos, doces e salgados
                </p>
                <p className="text-sm font-semibold text-primary">
                  para todos os momentos!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}