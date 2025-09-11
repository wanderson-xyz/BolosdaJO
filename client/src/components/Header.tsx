import { Button } from "@/components/ui/button";
import logoImage from "@assets/logo bolo da jo_1757542450876.jpg";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

import { companyInfo } from "@/data/products";

export default function Header() {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de fazer um pedido dos Bolos da Jô.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${companyInfo.phone}?text=${encodedMessage}`, "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src={logoImage} 
            alt="Bolos da Jô" 
            className="h-12 w-12 rounded-full object-cover"
            data-testid="img-logo"
          />
          <div>
            <h1 className="text-xl font-serif font-semibold text-primary">
              Bolos da Jô
            </h1>
            <p className="text-sm text-muted-foreground">Bolos caseiros</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Social Media Links */}
          <div className="flex items-center space-x-2">
            <a 
              href={companyInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-instagram-header"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a 
              href={companyInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-facebook-header"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
          </div>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white"
            data-testid="button-whatsapp-header"
          >
            <FaWhatsapp className="mr-2 h-4 w-4" />
            Faça seu pedido
          </Button>
        </div>
      </div>
    </header>
  );
}