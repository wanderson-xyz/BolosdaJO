import { Heart, Instagram, Phone, MapPin } from "lucide-react";
import logoImage from "@assets/logo bolo da jo_1757542450876.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoImage} 
                alt="Bolos da Jô" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-serif font-semibold text-primary">
                  Bolos da Jô
                </h3>
                <p className="text-sm text-muted-foreground">Bolos caseiros</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Há mais de 10 anos criando momentos doces e especiais. 
              Bolos caseiros, kits de festa e salgados feitos com muito carinho.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Rua das Flores, 123<br />Centro, São Paulo - SP</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Horário</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Segunda a Sexta<br />8h às 18h</p>
              <p>Sábado<br />8h às 15h</p>
              <p>Domingo<br />Fechado</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bolos da Jô. Feito com {" "}
            <Heart className="inline h-4 w-4 text-red-500" /> para você.
          </p>
        </div>
      </div>
    </footer>
  );
}