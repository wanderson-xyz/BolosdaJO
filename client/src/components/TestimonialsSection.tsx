import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    text: "Os bolos da Jô são simplesmente perfeitos! Encomendar pelo WhatsApp é super fácil e a qualidade é incrível. Recomendo para toda festa!",
    rating: 5,
    location: "Fortaleza, CE"
  },
  {
    id: 2,
    name: "João Santos",
    text: "Já fiz vários pedidos e nunca me decepciono. Os kits de festa são uma economia e vêm tudo fresquinho. A Jô é uma artista!",
    rating: 5,
    location: "Fortaleza, CE"
  },
  {
    id: 3,
    name: "Ana Costa",
    text: "Sabor caseiro que lembra a casa da vovó. Os salgados são os melhores da região e o atendimento é sempre muito carinhoso.",
    rating: 5,
    location: "Fortaleza, CE"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover-elevate">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author */}
                    <div className="border-t pt-4">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}