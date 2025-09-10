import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import bakerImage from "@assets/generated_images/Brazilian_woman_baker_39c4379b.png";
import OptimizedImage from "./OptimizedImage";

export default function AboutSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sobre a <span className="text-primary font-serif">Jô</span>
          </h2>
          
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square md:aspect-auto">
                  <OptimizedImage
                    src={bakerImage}
                    alt="Jô, confeiteira dos Bolos da Jô"
                    aspectRatio="aspect-square md:aspect-auto"
                  />
                </div>
                
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-semibold text-primary">
                      Uma paixão que virou profissão
                    </h3>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Olá! Eu sou a Jô, e há mais de 10 anos transformo momentos especiais 
                        em memórias ainda mais doces. Tudo começou na minha cozinha, com receitas 
                        da família e muito amor pelos detalhes.
                      </p>
                      
                      <p>
                        Cada bolo, cada docinho e cada kit de festa são feitos com ingredientes 
                        selecionados e o carinho de quem entende que comida boa é feita com o coração. 
                        Aqui, cada cliente é especial e cada pedido é único.
                      </p>
                      
                      <p className="text-primary font-medium">
                        "Minha missão é adoçar seus momentos mais importantes!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}