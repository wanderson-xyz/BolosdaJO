import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";

import { companyInfo } from "@/data/products";

export default function LocationSection() {
  const handleWazeClick = () => {
    const encodedAddress = encodeURIComponent(companyInfo.address);
    window.open(`https://waze.com/ul?q=${encodedAddress}`, "_blank");
  };
  
  const handleMapsClick = () => {
    const encodedAddress = encodeURIComponent(companyInfo.address);
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
                <div className="aspect-video">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO6T8Q1YJZLPd8&q=${encodeURIComponent(companyInfo.address)}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Bolos da Jô"
                    className="w-full h-full"
                  />
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
                          {companyInfo.address}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <p className="text-muted-foreground" data-testid="text-phone">
                          ({companyInfo.phone.slice(2, 4)}) {companyInfo.phone.slice(4, 9)}-{companyInfo.phone.slice(9)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Horário de Funcionamento</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Segunda a Sexta: {companyInfo.hours.weekdays}</p>
                          <p>Sábado: {companyInfo.hours.saturday}</p>
                          <p>Domingo: {companyInfo.hours.sunday}</p>
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