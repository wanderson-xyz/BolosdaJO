import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
import { companyInfo } from "@/data/products";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  whatsappMessage?: string;
}

export default function ProductCard({ 
  id, 
  title, 
  description, 
  price, 
  image, 
  category,
  whatsappMessage 
}: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const message = whatsappMessage || `Olá! Gostaria de pedir o ${title} (${price}). Podem me ajudar?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${companyInfo.phone}?text=${encodedMessage}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="flex-shrink-0 w-72"
    >
      <Card className="h-full hover-elevate overflow-hidden">
        <div className="overflow-hidden">
          <OptimizedImage
            src={image}
            alt={title}
            className="transition-transform duration-300 hover:scale-105"
            aspectRatio="aspect-square"
          />
        </div>
        
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground" data-testid={`text-title-${id}`}>
                {title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1" data-testid={`text-description-${id}`}>
                {description}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary" data-testid={`text-price-${id}`}>
                {price}
              </span>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white"
                data-testid={`button-whatsapp-${id}`}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Pedir
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}