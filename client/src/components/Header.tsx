import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/logo bolo da jo_1757542450876.jpg";

export default function Header() {
  const whatsappNumber = "5511999999999"; // Todo: replace with real number
  const whatsappMessage = "Olá! Gostaria de fazer um pedido dos Bolos da Jô.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
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
        
        <Button 
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 text-white"
          data-testid="button-whatsapp-header"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp
        </Button>
      </div>
    </header>
  );
}