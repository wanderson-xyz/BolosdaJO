import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";

export default function LocationSection() {
  const address = "Rua das Flores, 123 - Centro, São Paulo - SP"; // Todo: replace with real address
  const phone = "(11) 99999-9999"; // Todo: replace with real phone
  
  const handleWazeClick = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://waze.com/ul?q=${encodedAddress}`, "_blank");
  };
  
  const handleMapsClick = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.google.com/?q=${encodedAddress}`, "_blank");
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <MapPin className="inline mr-3" />
            Localização
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p>Mapa do Google será integrado aqui</p>
                    <p className="text-sm mt-2">Todo: Adicionar Google Maps embed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Endereço</h3>
                        <p className="text-muted-foreground" data-testid="text-address">
                          {address}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Telefone</h3>
                        <p className="text-muted-foreground" data-testid="text-phone">
                          {phone}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Horário de Funcionamento</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Segunda a Sexta: 8h às 18h</p>
                          <p>Sábado: 8h às 15h</p>
                          <p>Domingo: Fechado</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWazeClick}
                  variant="outline" 
                  className="flex-1"
                  data-testid="button-waze"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Abrir no Waze
                </Button>
                
                <Button 
                  onClick={handleMapsClick}
                  variant="outline" 
                  className="flex-1"
                  data-testid="button-maps"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Abrir no Maps
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}