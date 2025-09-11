import { Heart, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import logoImage from "@assets/logo bolo da jo_1757542450876.jpg";
import { companyInfo } from "@/data/products";

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
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              <a 
                href={companyInfo.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a 
                href={companyInfo.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>({companyInfo.phone.slice(2, 4)}) {companyInfo.phone.slice(4, 9)}-{companyInfo.phone.slice(9)}</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Horário</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Segunda a Sexta<br />{companyInfo.hours.weekdays}</p>
              <p>Sábado<br />{companyInfo.hours.saturday}</p>
              <p>Domingo<br />{companyInfo.hours.sunday}</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bolos da Jô. Feito com {" "}
            <Heart className="inline h-4 w-4 text-red-500" /> para você.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Site criado por {" "}
            <a 
              href="https://wanderson-almeida.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-muted-foreground transition-colors underline decoration-dotted"
              data-testid="link-developer"
            >
              Wanderson Almeida
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}